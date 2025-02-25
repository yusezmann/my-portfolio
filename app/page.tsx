import Photo from "@/components/Photo"

// framer motion
import HeroText from "@/components/HeroText"

const Home = () => {
  return (
    <>
      <div className="h-full">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <HeroText />
            </div>

            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
