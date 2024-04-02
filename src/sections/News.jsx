import Button from "../components/Button";
import Arrow from "../Assets/Arrow";

function NewsSection() {
  return (
    <div className="px-10 md:px-32 mt-10 md:mt-32 text-[#111920] dark:text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[40px] leading-tight md:leading-normal font-bold">
          Latest News
        </h2>
        <Button>All Posts</Button>
      </div>

      <div className="grid grid-col-1 md:grid-cols-3 space-x-[24px] text-center md:text-left">
        <div>
          <img className="object-cover h-[300px]" src="news-1.png" />
          <h2 className="text-[32px] leading-[40px] font-bold my-2">
            Victoriam partners with openAI
          </h2>
          <a
            className="dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#0CC8E8] dark:to-[#2DEEAA] uppercase cursor-pointer flex items-center justify-center md:justify-start font-bold mb-5 md:mb-0"
            href="#"
          >
            Read More <Arrow />
          </a>
        </div>

        <div>
          <img className="object-cover h-[300px]" src="news-2.png" />
          <h2 className="text-[32px] leading-[40px] font-bold my-2">
            Victoriam partners with openAI
          </h2>
          <a
            className="dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#0CC8E8] dark:to-[#2DEEAA] uppercase cursor-pointer flex items-center justify-center md:justify-start font-bold mb-5 md:mb-0"
            href="#"
          >
            Read More <Arrow />
          </a>
        </div>

        <div>
          <img className="object-cover h-[300px]" src="news-3.png" />
          <h2 className="text-[32px] leading-[40px] font-bold my-2">
            Victoriam partners with openAI
          </h2>
          <a
            className="dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#0CC8E8] dark:to-[#2DEEAA] uppercase cursor-pointer flex items-center justify-center md:justify-start font-bold mb-5 md:mb-0"
            href="#"
          >
            Read More <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
