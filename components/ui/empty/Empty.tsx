import React from "react";
import { functions } from "../../../utils";

export const Empty = () => {
  return (
    <>
      <div>
        <img
          src={functions.pathImgLocal("/image/product-not-found.png")}
          alt=""
        />
      </div>
    </>
  );
};
