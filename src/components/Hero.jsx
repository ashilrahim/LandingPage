import HeroImage from "../assets/images/hero-image.jpg";

const Hero = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col-reverse mx-auto lg:flex-row lg:justify-between">
        {/* Text Content */}
        <div className="flex flex-col justify-center p-6 lg:max-w-md xl:max-w-lg">
          <h1 className="text-[52px] font-bold leading-tight lg:leading-none">
            Create a modern and unique design for your dream
          </h1>
          <p className="mt-6 mb-8 text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
            dui tellus commodo convallis. Auctor eget orci pharetra non. Integer
            lorem in scelerisque tortor dui tempor
          </p>
          <div className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-[25px] py-[11px] text-lg font-semibold text-white rounded bg-black"
            >
              Connect Us
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center lg:justify-start lg:w-1/2 h-72 sm:h-80 lg:h-auto">
          <img
            src={HeroImage}
            alt="Hero"
            className="object-cover w-full h-full lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;



  
