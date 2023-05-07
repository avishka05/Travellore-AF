import React from "react";


const SearchIcon = ({ width, height, className, fill }: SvgProps) => {
  return (
    <svg
      fill={fill}
      viewBox="0 0 26 26"
      stroke={fill}
      width={width}
      height={height}
      className={className}
    >
      <path d="M25.1375 23.3625L20.5 18.7625C22.3001 16.518 23.1719 13.6691 22.936 10.8016C22.7002 7.93413 21.3746 5.26598 19.2319 3.34581C17.0892 1.42564 14.2923 0.39939 11.4162 0.478091C8.54005 0.556791 5.8034 1.73445 3.76893 3.76893C1.73445 5.8034 0.556789 8.54005 0.478089 11.4162C0.399388 14.2923 1.42563 17.0892 3.34581 19.2319C5.26598 21.3746 7.93413 22.7001 10.8016 22.936C13.6691 23.1719 16.518 22.3001 18.7625 20.5L23.3625 25.1C23.4787 25.2172 23.617 25.3102 23.7693 25.3736C23.9216 25.4371 24.085 25.4697 24.25 25.4697C24.415 25.4697 24.5784 25.4371 24.7307 25.3736C24.8831 25.3102 25.0213 25.2172 25.1375 25.1C25.3628 24.8669 25.4887 24.5554 25.4887 24.2313C25.4887 23.9071 25.3628 23.5956 25.1375 23.3625ZM11.75 20.5C10.0194 20.5 8.32769 19.9868 6.88876 19.0254C5.44983 18.0639 4.32832 16.6973 3.66606 15.0985C3.00379 13.4996 2.83051 11.7403 3.16813 10.043C3.50575 8.34563 4.33911 6.78653 5.56282 5.56282C6.78653 4.33911 8.34563 3.50575 10.043 3.16813C11.7403 2.83051 13.4996 3.00379 15.0985 3.66606C16.6973 4.32832 18.0639 5.44983 19.0254 6.88876C19.9868 8.32769 20.5 10.0194 20.5 11.75C20.5 14.0706 19.5781 16.2962 17.9372 17.9372C16.2962 19.5781 14.0706 20.5 11.75 20.5Z" />
    </svg>
  );
};

export default SearchIcon;