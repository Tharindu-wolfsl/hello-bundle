import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const categories = [
    {
      title: "Leadership & Management",
      links: ["Team", "Board", "Partners"],
    },
    {
      title: "Operations & HR",
      links: ["Careers", "Policies", "Resources"],
    },
    {
      title: "Finance & Legal",
      links: ["Terms", "Privacy", "Legal"],
    },
    {
      title: "Technology & Support",
      links: ["Help Center", "Contact", "FAQ"],
    },
  ];

  return (
    <footer className="bg-[#3D1D2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Hello Bundle Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <div className="flex space-x-4 text-sm text-gray-300">
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/education">Education</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Go To Top</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center md:text-left text-sm text-gray-400">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <span>📧 info@hellobundle.com</span>
              <span>📞 +1 (555) 123-4567</span>
              <span>📍 Somewhere in the World</span>
            </div>
            <p className="mt-4">© 2024 Hello Bundle. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
