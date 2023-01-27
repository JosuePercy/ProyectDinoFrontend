import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { IDinosaurio } from "../../interfaz/IDinosaurio";
import { IJuguete } from "../Juguete/[id]";

import Login from "../authentication/login";

interface IJugueteDino {
  id: string;
  name: string;
  image: string;
  precio: string;
  stock: number;
  status: number;
  dateregister: string;
}

const dinosaurio = () => {
  const [dinosaurios, setDinosaurios] = useState<IJugueteDino[]>([]);

  /*
    Trayendo listado de dinosaurios
  */
  useEffect(() => {
    fetch("http://localhost:3001/api/asd")
      .then((response) => {
        return response.json();
      })
      .then((response: any) => {
        console.log("dddddd==>", response);
        setDinosaurios(response);
      });
  });

  return (
    <>
      <AdminLayout>
        <div className="finder-toysdino">
          <p className="table-name">Table</p>
          <div className="scroll-left">
            <div className="orden-search">
              <button className="search-dinos" type="submit">
                <img src="http://localhost:3000/icons/imgdash/search-dinos.png"></img>
              </button>
              <input
                className="dino-table-seeker"
                type={"text"}
                placeholder="Search content here..."
              />
              <a className="button-search-dino" href="#">
                Add New
              </a>
            </div>
          </div>
        </div>
        <div className="table-box">
          <table className="customers">
            <tbody>
              <tr className="line-dinos">
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Dateregister</th>
                <th>Controles</th>
              </tr>
              {dinosaurios.map((element) => {
                return (
                  <tr className="information-toys">
                    <td>{element.id}</td>

                    <td>{element.name}</td>
                    <td>
                      <img src="/image/products/dino6.jpg"></img>
                    </td>
                    <td>{element.precio}</td>
                    <td>{element.stock}</td>
                    <td>
                      <a href="#">{element.status}</a>
                    </td>
                    <td>{element.dateregister}</td>
                    <td>
                      <a href={"/admin/editar"}>editar</a>
                      <button>eliminar</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* creacion de botones dirrecionales  */}
          <div className="">
            <a></a>
            <span>
              <a></a>
              <a></a>
            </span>
            <a></a>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};
export default dinosaurio;
