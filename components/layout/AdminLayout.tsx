import React from "react";
type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="grouping-sectors">
      <div className="menu-dashboard">
        <div>
          <img
            src="http://localhost:3000/icons/imgdash/logo-dasboard.jpg"
            alt=""
            className="logdasboard"
          ></img>
        </div>
        <div className="wrapper-menu">
          <ul>
            <li className="menu-title">
              <span>Dashboard</span>
            </li>
            <li>
              <a href="#">
                <img
                  src="http://localhost:3000/icons/imgdash/arrow-right.svg"
                  alt=""
                />
                Dashboard
              </a>
            </li>

            <li className="menu-title">
              <span>Dashboard</span>
            </li>
            <li>
              <a href="#">
                <img
                  src="http://localhost:3000/icons/imgdash/arrow-right.svg"
                  alt=""
                />
                Dinosaurios
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="position-left-header-children left">
        <div className="header-dash">
          <input
            type={"text"}
            className="seeker-header"
            placeholder="Search here..."
          ></input>
          <button className="finder-header" type="submit">
            <img
              src="http://localhost:3000/icons/imgdash/buscador.svg"
              alt=""
            />
          </button>
          <img
            className="circular--square"
            src="http://localhost:3000/icons/imgdash/perfil-header.png"
          />
        </div>
        <div> {children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
