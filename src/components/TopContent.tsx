import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface TopContentProps {
  leftContent?: string;
  rightContent?: string;
  href: any;
  width?: string | number;
  buttonText?: string;
  noButton?: boolean;
  color?: string;
  bgColor?: string;
}

const TopContent = ({
  leftContent,
  rightContent,
  href,
  width,
  buttonText,
  noButton,
  color,
  bgColor,
}: TopContentProps) => {
  const [index, setIndex] = useState(0);
  const words = ["businesses", "people", "the world forward."];

  const isMobileOrTablet = useMobileOrTablet(900);
  const isSmallerPhone = useMobileOrTablet(468);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex: number) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={`h-1/8 ${bgColor || "bg-gray-300"} w-full flex py-8    ${
        isMobileOrTablet
          ? "px-6 flex-col h-1/8 text-left justify-start"
          : "justify-center px-28 items-center"
      }`}
    >
      <div
        className={`${isMobileOrTablet ? "w-screen/2 mb-2" : "w-2/3 mb-10"}`}
        style={{ flex: isMobileOrTablet ? 1.0 : 0.6 }}
      >
        {/* Content for the first half */}
        <p
          style={{ lineHeight: 1.2, width: width }}
          className={`${color || "text-black-100"} ${
            isMobileOrTablet
              ? "text-xl justify-left text-left font-bold"
              : "text-4xl"
          }`}
        >
          {leftContent || `We Are Atlanta’s Leading Content Management Agency.`}
        </p>
      </div>
      <div
        style={{ flex: isMobileOrTablet ? 1.0 : 0.6 }}
        className={`flex flex-col ${"items-start"} text-left items-start justify-start`}
      >
        <p
          className={`${color || "text-black-100"} mb-4 text-base ${
            isMobileOrTablet && "text-sm"
          }`}
          style={{ width: width }}
        >
          {rightContent ||
            ` We give our clients the confidence to make a bold statement.`}
        </p>
        {!noButton && (
          <Link
            href={href}
            style={{
              marginTop: isMobileOrTablet ? 8 : 0,
              alignItems: "left",
              justifyContent: "flex-start",
              flex: 1.0,
              // width: "80%",
            }}
          >
            <button
              className={`bg-black ${
                isSmallerPhone
                  ? "px-1 py-2 rounded-0"
                  : isMobileOrTablet
                  ? "px-2 py-2 rounded-0"
                  : "px-4 py-3"
              } flex justify-between text-white items-center rounded-md`}
            >
              <p
                style={{
                  fontSize: isSmallerPhone ? "8px" : "14px",
                  paddingLeft: "4px",
                }}
                className={`mr-4 `}
              >
                {buttonText || `  FIND OUT MORE`}
              </p>
              <ArrowRightIcon height={15} />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopContent;
