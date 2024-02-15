import React from "react";
import { Oval } from "react-loader-spinner";
import { Colors } from "../constants";

interface LoaderProps {
  height: string;
  width: string;
}

const Loader: React.FC<LoaderProps> = ({ height, width }) => {
  return (
    <div className="flex text-center items-center">
      <Oval
        visible={true}
        height={height}
        width={width}
        color={Colors.Primary}
        secondaryColor={Colors.Secondary}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p className="ml-3 font-poppins">Loading</p>
    </div>
  );
};

export default Loader;
