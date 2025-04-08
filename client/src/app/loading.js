import Skeleton from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen">
      {/* Hero Section Loading */}
      <section className="bg-white lg:pt-16 md:pb-16 pt-4 pb-8">
        <div className="max-w-full mx-auto px-4 sm:px-0 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Skeleton className="h-[500px] w-full rounded-lg" />
            <div className="w-full md:w-3/4">
              <Skeleton className="h-12 w-48 mb-4" />
              <Skeleton className="h-16 w-full mb-6" />
              <Skeleton className="h-24 w-full mb-8" />
              <Skeleton className="h-12 w-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Loading */}
      {[1, 2].map((feature) => (
        <section key={feature} className="bg-white py-4 sm:py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center bg-[#F8EBF0] rounded-lg overflow-hidden">
              <Skeleton className="h-[400px] w-full" />
              <div className="px-4 py-6 sm:px-6 sm:py-8 md:py-12">
                <Skeleton className="h-10 w-3/4 mb-6" />
                <Skeleton className="h-32 w-full mb-8" />
                <Skeleton className="h-12 w-40" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Services Section Loading */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-16 w-2/3 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((service) => (
              <div
                key={service}
                className="bg-[#FDF4F7] p-8 rounded-2xl flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <Skeleton className="w-16 h-16 rounded-xl" />
                  <Skeleton className="h-8 w-48" />
                </div>
                <Skeleton className="h-24 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Loading */}
      <section className="bg-[#FDF4F7] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-32 w-96 mx-auto mb-6" />
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-16 w-2/3 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((member) => (
              <div key={member}>
                <Skeleton className="h-76 w-full rounded-xl mb-4" />
                <div className="bg-[#F8EBF0] p-4 rounded-xl">
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section Loading */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-16 w-2/3 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((post) => (
              <div
                key={post}
                className="bg-[#FDF4F7] rounded-2xl overflow-hidden p-8"
              >
                <Skeleton className="h-[280px] w-full rounded-lg mb-4" />
                <Skeleton className="h-6 w-24 mb-2" />
                <Skeleton className="h-8 w-3/4 mb-2" />
                <Skeleton className="h-20 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Guide Section Loading */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Skeleton className="h-[600px] w-full rounded-xl" />
            <div className="flex flex-col">
              <Skeleton className="h-12 w-full mb-4" />
              <Skeleton className="h-24 w-full mb-8" />
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
