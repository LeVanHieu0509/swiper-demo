import { IconProps } from ".";

const IconArrowLeftCircle = ({ width = 24, height = 24, fill = "black" }: IconProps) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="1.6875"
        y="46.3125"
        width="44.625"
        height="44.625"
        rx="22.3125"
        transform="rotate(-90 1.6875 46.3125)"
        fill="white"
      />
      <rect
        x="1.6875"
        y="46.3125"
        width="44.625"
        height="44.625"
        rx="22.3125"
        transform="rotate(-90 1.6875 46.3125)"
        stroke="#E87722"
        stroke-width="3.375"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.197 11.3356C32.0206 10.2215 30.1106 10.2215 28.9342 11.3356L15.5625 23.999L28.9342 36.6624C30.1102 37.7761 32.018 37.776 33.1943 36.6812L34.125 35.7997L21.6728 24.0071L34.125 12.2144L33.197 11.3356Z"
        fill="#E87722"
      />
    </svg>
  );
};

export default IconArrowLeftCircle;
