import useMobileOrTablet from "@/app/hooks/useMobileOrTablet";
import React from "react";

interface ServicePillProps {
  label: string;
}

const ServicePill = ({ label }: ServicePillProps) => {
  const isMobileOrTablet = useMobileOrTablet(1204);
  const isMdScreen = useMobileOrTablet(700);

  return (
    <div
      style={{
        marginBottom: isMobileOrTablet ? "-20px" : "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",

        // width: "40%",
      }} // Centering and wrapping
      className={`${
        isMobileOrTablet ? "border-t-0 border-b-2" : "border-t-2 border-b-2 "
      } border-gray-500 px-6`}
    >
      <p
        style={{
          paddingTop: 15,
          paddingBottom: 15,
          maxWidth: "100%",
          fontSize: isMdScreen ? "14px" : "20px",
          fontWeight: isMdScreen ? 200 : "normal",
        }}
        className="text-white"
      >
        {label}
      </p>
    </div>
  );
};

export default ServicePill;
