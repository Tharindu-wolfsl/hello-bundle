import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  GraduationCap,
  UtensilsCrossed,
  BackpackIcon,
  Dumbbell,
  BabyIcon,
} from "lucide-react";
import { homeData } from "@/data/homeData";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function HomePage() {
  const { hero, features, achievements, team, cta, blogs, testimonials } =
    homeData;

  const getIconComponent = (iconName) => {
    const iconMap = {
      Sprout: <Sprout className="w-6 h-6 text-[#421520]" />,
      GraduationCap: <GraduationCap className="w-6 h-6 text-[#421520]" />,
      UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-[#421520]" />,
      BackpackIcon: <BackpackIcon className="w-6 h-6 text-[#421520]" />,
      Dumbbell: <Dumbbell className="w-6 h-6 text-[#421520]" />,
      BabyIcon: <BabyIcon className="w-6 h-6 text-[#421520]" />,
    };
    return iconMap[iconName] || null;
  };

  const toSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white lg:pt-16 md:pb-16 pt-4 pb-8">
        <div className="max-w-full mx-auto px-4 sm:px-0 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src={hero.image}
                alt="Mother and baby"
                fill
                className="object-cover rounded-lg md:rounded-r-lg md:rounded-l-none"
              />
            </div>
            <div className="w-full md:w-3/4">
              <div className="flex items-center w-fit border-b-3 pb-2 border-[#C7597F] mb-4">
                <Image
                  src={hero.logo}
                  alt="Mother and baby"
                  width={300}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#421520] mb-6">
                {hero.title}
              </h1>
              <p className="text-gray-600 text-sm mb-8">{hero.description}</p>
              <Link
                href={hero.ctaLink}
                className="bg-[#C7597F] text-gray-200 px-4 py-3 rounded-md hover:bg-[#9c4e69] transition-colors text-sm inline-block"
              >
                {hero.ctaText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features.map((feature) => (
        <section key={feature.id} className="bg-white py-4 sm:py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center bg-[#F8EBF0] rounded-lg overflow-hidden">
              <div
                className={`relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] ${
                  feature.id === 1
                    ? "md:rounded-tl-lg md:rounded-bl-lg"
                    : "md:rounded-tr-lg md:rounded-br-lg"
                } ${feature.id % 2 === 0 ? "md:order-2" : "md:order-1"}`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className={`object-cover ${
                    feature.id === 1
                      ? "md:rounded-tl-lg md:rounded-bl-lg"
                      : "md:rounded-tr-lg md:rounded-br-lg"
                  }`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                className={`px-4 py-6 sm:px-6 sm:py-8 md:py-12 ${
                  feature.id % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-[#421520] mb-4 sm:mb-6">
                  {feature.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  {feature.description}
                </p>
                <Link
                  href={feature.ctaLink}
                  className="bg-[#C7597F] text-gray-100 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-md hover:bg-[#9c4e69] transition-colors inline-block"
                >
                  {feature.ctaText}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Services</h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {achievements.map((service) => (
              <div
                key={service.id}
                className="bg-[#FDF4F7] p-8 rounded-2xl flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#F8B8CC] p-4 rounded-xl">
                    {getIconComponent(service.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-[#421520]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#FDF4F7] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Image
                src={team.image}
                alt="Team"
                width={500}
                height={120}
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 -mt-16">
              Meet Our Team of Experts
            </h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.members.map((member) => (
              <div key={member.name} className="">
                <div className="relative h-76 w-full mx-auto rounded-xl overflow-hidden z-1">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative flex flex-col gap-1 bg-[#F8EBF0] p-4 rounded-xl z-2 -mt-8">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">{blogs.title}</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              {blogs.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${toSlug(post.title)}`}
                className="block group"
              >
                <div className="bg-[#FDF4F7] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 p-8">
                  <div className="relative h-[280px] mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="">
                    <div className="mb-1">
                      <span className="text-sm text-[#C7597F] font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#421520] mb-2 group-hover:text-[#C7597F] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">
              {testimonials.title}
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              {testimonials.description}
            </p>
          </div>
          <TestimonialSlider testimonials={testimonials.items} />
        </div>
      </section>

      {/* Download Guide Section */}
      <section className="py-16 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <Image
                src="/home/bundle.png"
                alt="Parental Leave Guide Preview"
                width={600}
                height={600}
                className="object-contain rounded-xl"
              />
            </div>

            {/* Right side - Form */}
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold mb-4">
                Download Hello Bundle's FREE Parental Leave Guide!
              </h2>
              <p className="text-gray-500 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C7597F]"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-500 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#C7597F]"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-md bg-white text-black placeholder-gray-500 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#C7597F]"
                />
                <button
                  type="submit"
                  className="bg-[#C7597F] text-white px-6 py-3 rounded-md hover:bg-[#9c4e69] transition-colors font-medium cursor-pointer"
                >
                  Download the guide!
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
