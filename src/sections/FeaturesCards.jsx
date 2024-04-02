const Card = ({ heading, text }) => {
  return (
    <div className="bg-slate-300 dark:bg-[#222A32] rounded-xl p-4 text-center dark:text-white">
      <h3 className="font-bold text-[17px] md:text-[24px] mb-2">{heading}</h3>
      <p className="text-[12px] md:text-[14px] leading-5">{text}</p>
    </div>
  );
};

function FeaturesCardSection() {
  return (
    <div >
      <h2 className="text-[32px] md:text-[40px] font-bold text-[#111920] dark:text-white text-center leading-[46px] mb-8">
        Izzy Can Assist You With
        <br />
        Many{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0CC8E8] to-[#2DEEAA]">
          Disorders
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-10 md:px-32">
        <Card
          heading="Stammering"
          text="Our AI-driven therapy provides personalized exercises and feedback, helping you to speak more fluently. Break free from stammering with technology that understands and adapts to your pace."
        />
        <Card
          heading="Articulation"
          text="Whether it’s blending sounds or mastering difficult syllables, IzzyAI supports you through tailored articulation exercises. Experience a noticeable improvement in how you express words and phrases."
        />
        <Card
          heading="Voice Disorder"
          text="If voice disorders disrupt your communication, IzzyAI is here to help. Our AI therapists guide you through specialized exercises aimed at strengthening your voice, enhancing its quality, and ensuring you’re heard."
        />
      </div>
    </div>
  );
}

export default FeaturesCardSection;
