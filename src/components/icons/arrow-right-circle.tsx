import { IconProps } from ".";

const IconArrowRightCircle = ({ width = 24, height = 24, fill = "black" }: IconProps) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_120_33121)">
        <path
          d="M24 1.6875C36.3229 1.6875 46.3125 11.6771 46.3125 24C46.3125 36.3229 36.3229 46.3125 24 46.3125C11.6771 46.3125 1.6875 36.3229 1.6875 24C1.6875 11.6771 11.6771 1.6875 24 1.6875Z"
          fill="white"
          stroke="#E87722"
          stroke-width="3.375"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.8244 35.2582C16.8701 36.2486 18.5678 36.2486 19.6135 35.2582L31.4995 24.0019L19.6135 12.7455C18.5682 11.7556 16.8724 11.7556 15.8268 12.7288L14.9995 13.5124L26.0681 23.9947L14.9995 34.477L15.8244 35.2582Z"
          fill="#E87722"
        />
      </g>
      <defs>
        <clipPath id="clip0_120_33121">
          <rect y="48" width="48" height="48" rx="6.75" transform="rotate(-90 0 48)" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconArrowRightCircle;
