import React from "react";

interface StarButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

const StarButton = ({
  disabled = false,
  onClick = () => {},
}: StarButtonProps) => {
  return (
    <div
      className="custom-button w-[2.625rem] h-[2.625rem] bg-dark-grey rounded-[0.375rem] flex items-center justify-center hover:cursor-pointer"
      onClick={onClick}
    >
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-[-2px] ml-[1px]"
      >
        <path
          d="M9.54896 2.42664C9.84833 1.50537 11.1517 1.50538 11.451 2.42664L12.9699 7.10055C13.1038 7.51254 13.4877 7.79148 13.9209 7.79149L18.8354 7.79168C19.8041 7.79172 20.2068 9.03127 19.4232 9.60067L15.4474 12.4895C15.0969 12.7441 14.9503 13.1955 15.0841 13.6075L16.6026 18.2815C16.9019 19.2028 15.8475 19.9689 15.0638 19.3995L11.0878 16.511C10.7373 16.2564 10.2627 16.2564 9.91225 16.511L5.93622 19.3995C5.15252 19.9689 4.0981 19.2028 4.3974 18.2815L5.91589 13.6075C6.04974 13.1955 5.90309 12.7441 5.55263 12.4895L1.57683 9.60067C0.793169 9.03127 1.19592 7.79172 2.16461 7.79168L7.07911 7.79149C7.51231 7.79148 7.89623 7.51254 8.03011 7.10055L9.54896 2.42664Z"
          stroke="#AA99C0"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default StarButton;
