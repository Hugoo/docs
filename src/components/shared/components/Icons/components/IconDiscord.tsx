import clsx from "clsx";
import { SVGProps } from "react";

const IconDiscord = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-green-200 dark:text-green-100": !otherProps?.className })}
  >
    <path
      d="M30.1783 11.1038C28.3638 10.2757 26.4065 9.67613 24.3635 9.3335C24.3206 9.3335 24.292 9.34777 24.2635 9.37632C24.0063 9.81889 23.7348 10.3899 23.5348 10.8325C21.3346 10.5041 19.1487 10.5041 17.0057 10.8325C16.8199 10.3757 16.5342 9.81889 16.277 9.37632C16.2628 9.34777 16.2199 9.3335 16.1913 9.3335C14.1483 9.67613 12.191 10.29 10.3765 11.1038C10.3622 11.1038 10.348 11.118 10.3337 11.1323C6.63334 16.5716 5.61896 21.8823 6.11901 27.1217C6.11901 27.1503 6.1333 27.1788 6.16187 27.1931C8.59065 28.9634 10.9623 30.0341 13.2768 30.7479C13.3196 30.7622 13.3482 30.7479 13.3768 30.7193C13.9197 29.977 14.4197 29.2061 14.8341 28.378C14.8626 28.3352 14.8341 28.2781 14.7912 28.2495C14.0197 27.964 13.2768 27.6071 12.5624 27.2074C12.5053 27.1788 12.5053 27.0932 12.5481 27.0646C12.691 26.9504 12.8482 26.8362 12.991 26.722C13.0196 26.7077 13.0482 26.6934 13.0768 26.7077C17.7486 28.8063 22.8205 28.8063 27.4352 26.7077C27.4637 26.6934 27.5066 26.6934 27.5352 26.722C27.678 26.8362 27.8209 26.9504 27.9781 27.0646C28.0352 27.1074 28.0209 27.1788 27.9638 27.2074C27.2494 27.6214 26.5065 27.964 25.735 28.2495C25.6779 28.2638 25.6636 28.3209 25.6922 28.378C26.1208 29.1918 26.6065 29.977 27.1494 30.7051C27.178 30.7336 27.2066 30.7479 27.2494 30.7336C29.5782 30.0198 31.9498 28.9491 34.3929 27.1931C34.4072 27.1788 34.4215 27.1503 34.4358 27.1217C35.0358 21.0543 33.4357 15.8006 30.2068 11.1323C30.2068 11.1323 30.1926 11.118 30.1783 11.1038ZM15.5341 23.9381C14.1197 23.9381 12.9625 22.6675 12.9625 21.1114C12.9625 19.5553 14.1054 18.2847 15.5341 18.2847C16.9771 18.2847 18.1201 19.5696 18.1058 21.1114C18.1058 22.6675 16.9628 23.9381 15.5341 23.9381ZM25.035 23.9381C23.6205 23.9381 22.4633 22.6675 22.4633 21.1114C22.4633 19.5553 23.6063 18.2847 25.035 18.2847C26.4779 18.2847 27.6209 19.5696 27.6066 21.1114C27.6066 22.6675 26.4779 23.9381 25.035 23.9381Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconDiscord };
