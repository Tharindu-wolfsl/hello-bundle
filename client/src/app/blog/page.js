export default function BlogPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog</h1>
          <p className="text-lg text-gray-600">
            Stay updated with our latest news and articles
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">April 10, 2024</p>
              <h2 className="text-xl font-semibold mb-2">Blog Post Title 1</h2>
              <p className="text-gray-600 mb-4">
                Short description of the blog post content goes here...
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Read More →
              </a>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">April 9, 2024</p>
              <h2 className="text-xl font-semibold mb-2">Blog Post Title 2</h2>
              <p className="text-gray-600 mb-4">
                Short description of the blog post content goes here...
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Read More →
              </a>
            </div>
          </article>

          {/* Blog Post 3 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">April 8, 2024</p>
              <h2 className="text-xl font-semibold mb-2">Blog Post Title 3</h2>
              <p className="text-gray-600 mb-4">
                Short description of the blog post content goes here...
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Read More →
              </a>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
