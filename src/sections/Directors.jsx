import { useEffect, useState } from "react";
import Button from "../components/Button";

function DirectorsSection() {
  const [dark, setDark] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      let theme = localStorage.theme;
      setDark(theme === "dark" ? true : false);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="px-10 md:px-32 mt-10 md:mt-32 dark:text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Board of directors</h2>
        <Button>All Members</Button>
      </div>

      <div className="grid grid-col-2 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <img
            className="object-cover w-full h-[409px]"
            src={dark ? "director-4-dark.png" : "director-4.png"}
          />
          <h2 className="text-[32px] leading-[40px] font-bold mt-[24px]">
            Mr. Ali
          </h2>
          <span className="font-semibold text-[20px]">Founder & CEO</span>
        </div>

        <div>
          <img
            className="object-cover w-full h-[409px]"
            src={dark ? "director-2-dark.png" : "director-2.png"}
          />

          <h2 className="text-[32px] leading-[40px] font-bold mt-[24px]">
            Mr. Syed Owais Chishti
          </h2>
          <span className="font-semibold text-[20px]">CTO</span>
        </div>

        <div>
          <img
            className="object-cover w-full h-[409px]"
            src={dark ? "director-3-dark.png" : "director-3.png"}
          />
          <h2 className="text-[32px] leading-[40px] font-bold mt-[24px]">
            Mr. Sanwal Khan
          </h2>
          <span className="font-semibold text-[20px]">Lead AI Engineer</span>
        </div>

        {/* <div>
          <img className="object-cover w-full h-[409px]" src="director-4.png" />
          <h2 className="text-[32px] leading-[40px] font-bold mt-[24px]">
            Mr. Name Here
          </h2>
          <span className="font-semibold text-[20px]">Founder & CEO</span>
        </div>

        <div>
          <img className="object-cover w-full h-[409px]" src="director-5.png" />
          <h2 className="text-[32px] leading-[40px] font-bold mt-[24px]">
            Mr. Name Here
          </h2>
          <span className="font-semibold text-[20px]">Founder & CEO</span>
        </div>

        <div>
          <img className="object-cover w-full h-[409px]" src="director-6.jpg" />
          <h2 className="text-[32px] leading-[40px] font-bold mt-[24px]">
            Mr. Name Here
          </h2>
          <span className="font-semibold text-[20px]">Founder & CEO</span>
        </div> */}
      </div>
    </div>
  );
}

export default DirectorsSection;
