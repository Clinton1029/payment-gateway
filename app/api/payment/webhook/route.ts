import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import stripe from "stripe";

// Define ApiVersion type or import it if available elsewhere
type ApiVersion = string;

const apiVersion: ApiVersion = "2025-09-30.clover"; // ✅

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature") as string;
  const body = await req.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    console.error("Webhook signature error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      const userEmail = session.metadata?.userEmail;
      const paymentStatus = session.payment_status;
      const amount = session.amount_total;

      if (userEmail && amount) {
        await prisma.payment.updateMany({
          where: { user: { email: userEmail }, status: "pending" },
          data: { status: paymentStatus },
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error("Webhook handling error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
