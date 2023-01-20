import Link from "next/link";
import React from "react";
import { IDinosaurio } from "../../../interfaz/IDinosaurio";
import { functions } from "../../../utils";
type Prop = {
  dinosaurio: IDinosaurio;
};

export const CardDinosaurio = ({ dinosaurio }: Prop) => {
  const { id, name, description, image, precio, descuento } = dinosaurio;
  return (
    <>
      <div className="img-dino" key={id}>
        <div className="mainn-1">
          <Link href={"/Juguete/" + id} passHref={true}>
            <img
              src={functions.pathImg(image)}
              height="200"
              className="dino-1"
            />
          </Link>

          <div className="text-dino">
            <span>{name}</span>
            <p>
              <strong>{description}</strong>
            </p>
          </div>
          <div className="almacen">
            <sup>s/.</sup>
            <span>{precio}</span>
            <sup>{precio}</sup>
            <div className="discount-offer">- {descuento}%</div>
          </div>
        </div>
      </div>
    </>
  );
};
