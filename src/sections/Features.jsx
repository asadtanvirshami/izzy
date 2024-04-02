import phoneMockup from "../Assets/phone-mockup-2.png";

import Svg1 from "../Assets/features-1.svg";
import Svg2 from "../Assets/features-2.svg";
import Svg3 from "../Assets/features-3.svg";

const Tile = (props) => {
  return (
    <div className="">
      <div className="flex items-center mb-2 ">
        <img src={props.icon} alt="icon" />
        <h3 className="ml-2 text-[22px] font-bold w-full">{props.heading}</h3>
      </div>
      <p className="text-justify text-[13.5px] tight-letter-spacing break-words  tracking-tighter lg:text-justify md:text-[13px] lg:text-[13px] mt-6 lg:tracking-tighter ">
        {props.text}
      </p>
    </div>
  );
};

function FeaturesSection() {
  return (
    <div id="help">
      <h2 className="text-[32px] md:text-[40px] font-bold text-[#111920] dark:text-white text-center leading-[46px] mt-28 px-5 md:px-0">
        How Izzy can&nbsp;
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0CC8E8] to-[#2DEEAA]">
          help&nbsp;
        </span>
        you improve your
        <br />
        speaking&nbsp;
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0CC8E8] to-[#2DEEAA]">
          abilities
        </span>
        ?
      </h2>
      <div className="relative w-full md:bg-slate-300 md:dark:bg-[#222A32] text-[#111920] dark:text-white mt-16 md:mt-32 block md:flex rounded-2xl max-w-5xl mx-auto py-5 md:py-0">
        <div className="justify-center align-middle items-center">
          <img
            className="block md:absolute left-14 bottom-32 mx-auto md:mx-0 mt-3 md:mt-0"
            src={phoneMockup}
          />
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-6  md:gap-8 p-6 rounded-2xl md:p-16  bg-slate-300 dark:bg-[#222A32] mt-10 md:mt-0 mx-5 md:mx-0 text-sm">
          <div></div>
          <Tile
            heading="Assessment"
            text="Begin your journey with IzzyAI’s comprehensive assessment, powered by advanced AI models. These initial evaluations accurately identify your speech patterns, pinpointing areas for improvement. This tailored approach ensures that you receive the most effective therapy right from the start."
            icon={Svg3}
          />
          <Tile
            heading="Exercises"
            text="Dive into a variety of interactive exercises led by a friendly avatar, designed to enhance your speaking abilities. These exercises are not only personalized but also engaging, making your practice sessions enjoyable. Whether it's working on fluency, pronunciation, or articulation, our avatar guides you every step of the way, offering real-time feedback and encouragement."
            icon={Svg2}
          />
          <div></div>
          <Tile
            heading="Reports"
            text="With IzzyAI, tracking your progress is seamless. After each session, receive comprehensive reports detailing your improvements, areas that need more attention, and insights into your overall speech development. These reports cover everything from session frequency to specific speech errors, offering a clear view of your journey towards clearer communication."
            icon={Svg1}
          />
          <Tile
            heading="Support and Community"
            text="IzzyAI goes beyond exercises and assessments by providing continuous support and access to a thriving community. Engage with peers facing similar challenges in a supportive environment, share experiences, and celebrate milestones together. Our dedicated team offers guidance, answers questions, and ensures you have all the resources needed for a successful journey. Feel empowered and motivated by a community that understands and supports your path to clearer speech."
            icon={Svg1}
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
