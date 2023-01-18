import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import TaskLayout from "../components/layout/TaskLayouts";
import { functions } from "../utils";

export default function Home() {
  // const router = useRouter();
  const [task, setTask] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const urlApi = process.env.API_URL || "http://localhost:3001/api/Dino";
      const { data } = await axios.get(urlApi);

      console.log("data ==> ", data);

      setTask(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <TaskLayout>
        <div className="wrapper">
          <div className="name-title">
            <h1>JURASSIC WORLD</h1>
          </div>
          <div className="searchs">
            {task !== undefined ? (
              task.map((element) => {
                const { id, name, description, image, precio, descuento } =
                  element;
                return (
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
                        <sup>{precio}</sup>
                        <span>{precio}</span>
                        <sup>{precio}</sup>
                        <div className="discount-offer">{descuento}</div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No se encontraron resultados</p>
            )}
          </div>
        </div>
      </TaskLayout>
    </>
  );
}
{
  /* <img src="projectDino\task\img" alt="" /> */
}
