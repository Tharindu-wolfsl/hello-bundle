export default function EducationPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Education</h1>
          <p className="text-lg text-gray-600">
            Explore our educational resources and learning paths
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-8">
            {/* Course Section 1 */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h2 className="text-2xl font-semibold mb-2">Course Category 1</h2>
              <p className="text-gray-600 mb-4">
                Description of educational offerings in this category.
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4">
                <li>Course item 1</li>
                <li>Course item 2</li>
                <li>Course item 3</li>
              </ul>
            </div>

            {/* Course Section 2 */}
            <div className="border-l-4 border-green-600 pl-4">
              <h2 className="text-2xl font-semibold mb-2">Course Category 2</h2>
              <p className="text-gray-600 mb-4">
                Description of educational offerings in this category.
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4">
                <li>Course item 1</li>
                <li>Course item 2</li>
                <li>Course item 3</li>
              </ul>
            </div>

            {/* Course Section 3 */}
            <div className="border-l-4 border-purple-600 pl-4">
              <h2 className="text-2xl font-semibold mb-2">Course Category 3</h2>
              <p className="text-gray-600 mb-4">
                Description of educational offerings in this category.
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4">
                <li>Course item 1</li>
                <li>Course item 2</li>
                <li>Course item 3</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
