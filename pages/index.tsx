import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CardDinosaurio } from "../components/ui/card-dino/CardDinosaurio";
import TaskLayout from "../components/layout/TaskLayouts";
import { Empty } from "../components/ui/empty/Empty";

export default function Home() {
  // const router = useRouter();
  const [dinosaurios, setDinosaurios] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const urlApi = process.env.API_URL || "http://localhost:3001/api/dino";
      const { data } = await axios.get(urlApi);
      setDinosaurios(data);
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
            {dinosaurios.length == 0 ? (
              <Empty></Empty>
            ) : (
              dinosaurios.map((element) => {
                return <CardDinosaurio dinosaurio={element}></CardDinosaurio>;
              })
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
