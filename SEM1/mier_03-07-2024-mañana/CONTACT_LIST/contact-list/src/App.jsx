import React, { useState } from "react";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  function toogleModal() {
    setOpenModal(!openModal)

  }

  return (
    <>
    {!openModal ? // aqui usamos un operador ternario, se recomienda pero solo cuando son 2 condiciones
      <button onClick={toogleModal} className="openModal">Open Modal</button>
    
            :
            <div className="modal">
            <div className="modal_content">
              <h2>Soy un modal</h2>
              <button onClick={toogleModal} >&times;</button>
            </div>
          </div>
      
      }
      
    </>
  );
}
