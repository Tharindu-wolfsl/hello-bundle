export default function AboutPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Learn more about who we are and what we do
          </p>
        </section>

        <section className="prose lg:prose-xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Share your company's story, mission, and values here.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Describe your mission and what drives your organization.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-600">
              Introduce your team members and their roles.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
