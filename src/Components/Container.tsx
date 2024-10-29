import React from "react";

interface ContainerProps {
  flexDirection: string;
  flexWrap: string;
  justifyContent: string;
  alignItems: string;
  alignContent: string;
  gap: number;
  items: string[]; // Accept items as a prop
}

const Container: React.FC<ContainerProps> = ({
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  gap,
  items,
}) => {
  const colors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500"];
  return (
    <div
      className="flex p-4 w-full md:w-1/2 bg-gray-600 rounded-lg overflow-auto"
      style={{
        display: "flex",
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
        gap: `${gap}px`,
      }}
    >
      {/* <div className="flex justify-center items-center w-24 h-24 bg-red-500 text-white text-2xl rounded">
        A
      </div>
      <div className="flex justify-center items-center w-24 h-24 bg-green-500 text-white text-2xl rounded">
        B
      </div>
      <div className="flex justify-center items-center w-24 h-24 bg-blue-500 text-white text-2xl rounded">
        C
      </div>
      <div className="flex justify-center items-center w-24 h-24 bg-yellow-500 text-white text-2xl rounded">
        D
      </div> */}
      {/* 
      {items.map((item, index) => (
        <div
          key={index}
          className=`flex justify-center items-center w-24 h-24  text-white text-2xl rounded bg-[${bg}]`

        >
          {item}
        </div>
      ))} */}

      {items.map((item, index) => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`;
        return (
          <div
            key={index}
            className={`flex justify-center items-center w-24 h-24 text-white text-2xl rounded`}
            style={{ backgroundColor: randomColor }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Container;
