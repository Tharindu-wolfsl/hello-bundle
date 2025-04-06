import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const achievements = [
    {
      id: 1,
      title: "Achievements 01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "👶",
    },
    {
      id: 2,
      title: "Achievements 02",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🎯",
    },
    {
      id: 3,
      title: "Achievements 03",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🍼",
    },
    {
      id: 4,
      title: "Achievements 04",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "👶",
    },
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder and CEO",
      image: "/team/sarah.jpg",
    },
    {
      name: "Emily Thompson",
      role: "HR & Operations Manager",
      image: "/team/emily.jpg",
    },
    {
      name: "John Davis",
      role: "Chief Financial Officer",
      image: "/team/john.jpg",
    },
    {
      name: "Rachel Adams",
      role: "Chief Marketing Officer",
      image: "/team/rachel.jpg",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-full mx-auto px-4 sm:px-0 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/home/heroImg.png"
                alt="Mother and baby"
                fill
                className="object-cover rounded-tr-lg rounded-br-lg"
              />
            </div>
            <div className="w-full md:w-3/4">
              <div className="flex items-center w-fit border-b-3 pb-2 border-[#C7597F] mb-4">
                <Image
                  src="/home/joy.png"
                  alt="Mother and baby"
                  width={300}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get the Parental Leave You Deserve
              </h1>
              <p className="text-gray-600 text-sm mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link
                href="/contact"
                className="bg-[#C7597F] text-gray-200 px-4 py-3 rounded-md hover:bg-[#9c4e69] transition-colors text-sm inline-block"
              >
                Get Starter Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#FDF4F7] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/feature-1.jpg"
                alt="Happy baby"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Lorem ipsum
              </h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link
                href="/learn-more"
                className="bg-[#E9B8CC] text-gray-800 px-6 py-3 rounded-md hover:bg-[#f4b6ce] transition-colors inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Achievements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Company Achievements
            </h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="bg-[#FDF4F7] p-6 rounded-lg">
                <span className="text-4xl mb-4 block">{achievement.icon}</span>
                <h3 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#FDF4F7] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Meet Our Team of Experts
            </h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative h-48 w-48 mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FDF4F7] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              We Are Proud of Our Achievements
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              href="/contact"
              className="bg-[#E9B8CC] text-gray-800 px-8 py-3 rounded-md hover:bg-[#f4b6ce] transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
