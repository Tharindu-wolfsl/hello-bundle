import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome Home
          </h1>
          <p className="text-lg text-gray-600">
            This is your beautifully organized home page
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Featured Content</h2>
            <p className="text-gray-600">
              Add your featured content here. This section can be customized
              based on your needs.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <p className="text-gray-600">
              Add important links or navigation elements here.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
