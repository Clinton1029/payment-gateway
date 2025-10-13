export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to PayFlex</h1>
      <p className="text-lg max-w-2xl mb-8">
        A secure and modern payment gateway that lets businesses accept payments seamlessly with just a few lines of code.
      </p>
      <div className="space-x-4">
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Get Started
        </button>
        <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}
