import Image from "next/image";
import Link from "next/link";
import { homeData } from "@/data/homeData";

// Function to convert title to slug
function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return homeData.blogs.posts.map((post) => ({
    slug: toSlug(post.title),
  }));
}

export default function BlogPost({ params }) {
  const post = homeData.blogs.posts.find(
    (post) => toSlug(post.title) === params.slug
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="min-h-screen py-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category and Back Link */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm text-[#C7597F] font-medium">
            {post.category}
          </span>
          <Link
            href="/"
            className="text-[#421520] hover:text-[#C7597F] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-[#421520] mb-6">{post.title}</h1>

        {/* Featured Image */}
        <div className="relative h-[480px] rounded-2xl overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <div className="prose max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {post.description}
          </p>

          {/* Example content - you should replace this with actual blog content */}
          <h2 className="text-2xl font-bold text-[#421520] mb-4">
            Understanding the Basics
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <h2 className="text-2xl font-bold text-[#421520] mb-4">
            Key Benefits
          </h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li className="mb-2">
              Comprehensive support throughout your parental leave journey
            </li>
            <li className="mb-2">
              Expert guidance on navigating workplace policies
            </li>
            <li className="mb-2">
              Resources for maintaining work-life balance
            </li>
            <li className="mb-2">Financial planning tools and advice</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#421520] mb-4">Next Steps</h2>
          <p className="text-gray-600 mb-8">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-[#FDF4F7] rounded-2xl">
          <h3 className="text-xl font-bold text-[#421520] mb-4">
            Ready to Learn More?
          </h3>
          <p className="text-gray-600 mb-6">
            Get personalized support for your parental leave journey.
          </p>
          <Link
            href="/contact"
            className="bg-[#C7597F] text-white px-6 py-3 rounded-md hover:bg-[#9c4e69] transition-colors inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </article>
    </main>
  );
}
