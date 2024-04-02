import Arrow from "../Assets/Arrow";

function ProductsSection() {
  return (
    <div className="px-16 md:px-32 dark:text-white">
      <h2 className="mb-8 capitalize text-center e font-bold text-[46px]">
        Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#111920] dark:text-white">
        <div>
          <img src="/products-1.png" />
          <div className="flex justify-between items-center my-3">
            <h3 className="font-bold text-[28px] md:text-[32px]">
              Izzy AI App
            </h3>
            <a
              href="#"
              className="px-4 py-2 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#0CC8E8] dark:to-[#2DEEAA] border border-black dark:border-[#283642] hover:border-transparent dark:hover:border-transparent cursor-pointer flex items-center uppercase font-bold"
            >
              Try Izzy <Arrow />
            </a>
          </div>
          <p>
            Curabitur pretium vel aliquet in. Euismod aliquet amet nunc varius.
          </p>
        </div>

        <div>
          <img src="/products-2.png" />
          <div className="flex justify-between items-center my-3">
            <h3 className="font-bold text-[28px] md:text-[32px]">Victor AI</h3>
            <a
              href="#"
              className="px-4 py-2 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#0CC8E8] dark:to-[#2DEEAA] border border-black dark:border-[#283642] hover:border-transparent dark:hover:border-transparent cursor-pointer flex items-center uppercase font-bold"
            >
              Try Victor <Arrow />
            </a>
          </div>
          <p>
            Curabitur pretium vel aliquet in. Euismod aliquet amet nunc varius.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
