import React from "react";

const CardTitle = (props: any) => {
  const { children } = props;
  return (
    <div className={`flex justify-between font-semibold text-lg pb-3`}>
      {children}
    </div>
  );
};

export default CardTitle;
