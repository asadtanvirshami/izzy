function ChevronUpGradientIcon(props) {
  return (
    <svg
      className={`ml-1 ${
        !props.open && "rotate-180"
      } transition-all duration-200`}
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="7"
      viewBox="0 0 11 7"
      fill="none"
    >
      <path
        d="M10 6.22314L5.55371 1.77673L1.1073 6.22314"
        stroke="url(#paint0_linear_54_615)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_54_615"
          x1="9.79471"
          y1="6.09051"
          x2="6.2744"
          y2="-0.850463"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0CC8E8" />
          <stop offset="1" stopColor="#2DEEAA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ChevronUpGradientIcon;
