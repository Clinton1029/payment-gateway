export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Welcome to PayFlex Gateway</h1>
      <p className="text-lg mb-8 max-w-2xl">
        Accept secure payments instantly. Built with Next.js + TypeScript + Tailwind CSS.
      </p>
      <div className="space-x-4">
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100">
          Get Started
        </button>
        <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600">
          Learn More
        </button>
      </div>
    </section>
  );
}
