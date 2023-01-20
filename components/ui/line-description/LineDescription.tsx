import React from "react";

type Prop = {
  name: string;
  value: number;
  classColor: string;
};

export const LineDescription = ({ name, value, classColor }: Prop) => {
  //let classColor = typeColor == "black" ? "backgr-plom": "backgr-white"
  return (
    <div className={classColor}>
      <div className="alination">
        <div className="lines-1">
          <div className="widht">{name}</div>
        </div>
        <div className="lines-2">
          <div className="widht">{value}</div>
        </div>
      </div>
    </div>
  );
};
