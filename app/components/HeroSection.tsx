import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-neutral-900 text-white">
      {/* Top Hero Section */}
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building Tomorrow{" "}
              <span className="text-red-600">Exceptional</span> Solutions That{" "}
              <span className="text-neutral-400">Shape Enduring Spaces.</span>
            </h1>
            
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-xl">
              We deliver innovative construction and development solutions through our diverse portfolio
              of specialized companies, combining expertise, cutting-edge technology, and sustainable
              practices.
            </p>
            
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 mt-4 transition-colors duration-300">
              Get In Touch
            </button>
          </div>

          <div className="relative">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-sm overflow-hidden">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-48 h-full bg-red-600 opacity-90"></div>
  
  <Image 
    src="/mediaFiles/people_chat.png" 
    alt="Construction team with hard hats reviewing plans"
    fill
    className="object-cover"
    priority
  />
</div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Truck */}
      <div className="bg-neutral-950 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Text Content */}
            <div className="space-y-6 border-l-4 border-blue-500 pl-6">
              <div className="flex items-start gap-4 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Shaping Enduring Spaces with Innovation and Integrity
                </h2>
                <div className="flex-shrink-0">
                  <Image 
                    src="/mediaFiles/small_truck.png" 
                    alt="Truck icon"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                GField Company Limited is a multidisciplinary construction and development firm committed to creating structures that last and communities that thrive. Guided by a belief that great design should serve both people and the planet, we combine advanced technology, sustainable practices, and meticulous craftsmanship to deliver projects of lasting value.
              </p>
              
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                From landmark commercial towers to vibrant residential enclaves, our work reflects a seamless blend of creativity and precision. Every project begins with a bold vision and ends with a space that inspires—built on time, within budget, and to the highest standards.
              </p>
              
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                With a team of dedicated professionals and a legacy of innovation, GField continues to redefine skylines and shape environments that stand the test of time.
              </p>
            </div>

            {/* Right Truck Image with Dimensions Overlay */}
            <div className="relative">
            <div className="relative">
<div className="relative w-full h-[400px] md:h-[500px] overflow-visible">
  <Image 
    src="/mediaFiles/bigger_truck.png" 
    alt="GFIELD branded truck"
    fill
    className="object-contain"
  />
  
  {/* Dimensions overlay - positioned in front */}
  <div className="absolute inset-0 -top-0.2 -left-8 z-10">
    <Image 
      src="/mediaFiles/dimensions.png" 
      alt="Truck dimensions"
      width={200}
      height={200}
      className="object-contain"
    />
  </div>
</div>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}