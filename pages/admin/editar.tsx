import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";

export default function editar() {
  return (
    <>
      <AdminLayout>
        <div className="edit-record">
          <div className="editing">
            <div>
              <h3>register edition</h3>
              <span>
                A registration group layout for entering updated information.
              </span>
            </div>
            <div>
              <div className="name">
                <p>Name</p>
                <input type={"text"} />
              </div>
              <div className="name">
                <p>image</p>
                <input type={"text"} />
              </div>
              <div className="name">
                <p>Precio</p>
                <input type={"text"} />
              </div>
              <div className="name">
                <p>Stock</p>
                <input type={"text"} />
              </div>
              <div className="name">
                <p>Status</p>
                <input type={"text"} />
              </div>
              <div className="name">
                <p>Dataregister</p>
                <input type={"text"} />
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
