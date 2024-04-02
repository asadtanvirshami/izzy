import Button from "../components/Button";

function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left w-full gap-24 md:gap-32 my-24 md:my-32 px-8 md:px-32">
      {/* <div className="">
        <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">
          Revolutionizing Design with AI
        </h2>
        <p className="my-4 text-[#111920] dark:text-white text-[16px]">
          Victor AI is revolutionizing the world of shoe and apparel design by
          blending advanced AI with real-time fashion trends. Our platform
          empowers designers, creatives, and brand strategists to generate
          innovative designs, perfectly aligned with current market demands.
          Experience the synergy of creativity and data-driven insights, where
          every design is a step into the future of fashion.
        </p>
        <Button>Learn More</Button>
      </div>
      <img className="w-full" src="/about-1.png" /> */}

      <img className="w-full" src="/about-2.png" />
      <div className="">
        <h2 className="text-[30px] dark:text-white capitalize leading-[48px] font-bold">
         IzzyAI brings products to help humanity
        </h2>
        <p className="my-4 text-justify text-[14.3px] tight-letter-spacing break-words  tracking-tighter lg:text-justify md:text-[14px] lg:text-[15.5px] mt-6 lg:tracking-tighter text-[#111920] dark:text-white">
          Empowering Change Through Innovation: At the heart of IzzyAI, we're driven by a mission to create
          technology that makes a real difference. Our products are designed with humanity in mind,
          aiming to bridge gaps, overcome barriers, and offer solutions that enhance lives.
          Join us in our journey to bring positive change, one voice at a time.
        </p>
      </div>

    
      {/* <img className="w-full" src="/about-3.png" /> */}
    </div>
  );
}

export default AboutSection;
