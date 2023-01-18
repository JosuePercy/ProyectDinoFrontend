import Link from "next/link";

type Props = {
  children: React.ReactNode;
};
export default function TaskLayout({ children }: Props) {
  return (
    <>
      <div className="header">
        <div className="header-center">
          <div className="main-1">
            <Link href={"/"} passHref={true}>
              <img
                src="http://localhost:3000/assets/img/logo-realplaza.svg"
                alt=""
                className="img-1"
              />
            </Link>
            <div className="a-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 48 48"
                xmlSpace="preserve"
                height="48"
                width="48"
              >
                <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
              </svg>
              {/* <a href="#">Menú</a> */}
              <span>Menú</span>
            </div>
          </div>

          <div className="main-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 48 48"
              xmlSpace="preserve"
              height="48"
              width="48"
            >
              <path d="M33 34.958 22.208 24.167q-1.25 1.041-2.916 1.645-1.667.605-3.5.605-4.542 0-7.667-3.125T5 15.708q0-4.458 3.125-7.604t7.625-3.146q4.458 0 7.583 3.146t3.125 7.604q0 1.792-.583 3.438-.583 1.646-1.708 3.062L35 32.958ZM15.75 23.625q3.292 0 5.604-2.313 2.313-2.312 2.313-5.604 0-3.291-2.313-5.625Q19.042 7.75 15.75 7.75q-3.333 0-5.646 2.333-2.312 2.334-2.312 5.625 0 3.292 2.312 5.604 2.313 2.313 5.646 2.313Z" />
            </svg>
            <input
              className="input-1"
              type="text"
              placeholder="¿Qué estás buscando?"
            />
          </div>
          <div className="main-3">
            <img src="http://localhost:3000/assets/img/user.svg" alt="" />
            <span>Mi cuenta</span>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
