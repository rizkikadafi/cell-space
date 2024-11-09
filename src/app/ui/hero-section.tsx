import Spline from "@splinetool/react-spline/next"
import Logo from "@/app/components/logo"
import Navigation from "@/app/ui/navigation"

export default function HeroSection() {
  return (
    <section className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
      <header className="flex items-center pt-3 z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Logo />
          <Navigation />
        </div>
      </header>
      <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden" style={{ height: 'calc(100vh - 6rem)' }}>
        <div className="container mx-auto px-6 flex items-center relative h-full py-5">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-5">
            </span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              Cell <span className="text-5xl sm:text-7xl">Space</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
              Platform pembelajaran Biologi Sel yang dirancang untuk memberikan pengalaman belajar yang interaktif dan menyenangkan melalui materi dan simulasi 3D.
            </p>
            <div className="flex mt-8">
              <a href="#" className="uppercase py-2 px-4 rounded-lg bg-blue-500 border-2 border-transparent text-white text-md mr-4 hover:bg-blue-400">
                Get started
              </a>
              <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-blue-500 text-blue-500 dark:text-white hover:bg-blue-500 hover:text-white text-md">
                Read more
              </a>
            </div>
          </div>
          <div className="absolute md:relative md:w-3/5 w-full h-full left-0">
            <Spline
              scene="/scene.splinecode"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
