import Photo from "@/components/Photo"
import HeroText from "@/components/HeroText"

const Home = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-12">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <HeroText />
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 md:mb-12 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
