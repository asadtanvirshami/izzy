import DarkLogo from "../Assets/logo-footer.svg";

function Footer() {
  return (
    <footer className="text-gray-400 bg-black body-font mt-10 md:mt-32 flex flex-col items-center">
      <div className="pt-10">
        <img src={DarkLogo} />
      </div>

      <div className="container px-10  md:px-32 py-16 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <a className="title-font font-medium text-white tracking-widest text-sm mb-3 flex justify-center items-center">
              How Izzy AI can help?
            </a>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <a className="title-font font-medium text-white tracking-widest text-sm mb-3 flex justify-center items-center">
              Company
            </a>
          </div>
          {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <a className="title-font font-medium text-white tracking-widest text-sm mb-3 flex justify-center items-center">
              Product
            </a>
          </div> */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <a className="title-font font-medium text-white tracking-widest text-sm mb-3 flex justify-center items-center">
              Contact Us
            </a>
          </div>
          {/* <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <a className="title-font font-medium text-white tracking-widest text-sm mb-3 flex justify-center items-center">
              Research
            </a>
          </div> */}
          {/* <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <a className="title-font font-medium text-white tracking-widest text-sm mb-3 flex justify-center items-center">
              API
            </a>
          </div> */}
        </div>
      </div>

      <div className=" w-full h-px max-w-5xl mx-auto my-1 bg-[#262626]"></div>

      <p className="text-gray-400 text-sm text-center sm:text-left md:text-center px-10 md:px-32 py-5">
        Copyright ©2024 Victoriam AI  - All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
