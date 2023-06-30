import React, { useEffect, useState } from "react";

const ABMmodal = ({ data, isUpdate, isPost, save, update, cancelChanges }) => {
  const [nombre, setNombre] = useState(isUpdate ? data.title : "");
  const [contenido, setContenido] = useState(isUpdate ? data.content : "");
  const [author, setAuthor] = useState(isUpdate ? data.author : "");

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);

  const saveChanges = () => {
    isUpdate
      ? update({
          title: nombre,
          content: contenido,
          author: author,
        })
      : save({
          title: nombre,
          content: contenido,
          author: author,
        });
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex">
          <div className="w-[50%]">
            <label>Nombre</label>
          </div>
          <input
            type="text"
            onBlur={(e) => setNombre(e.target.value)}
            defaultValue={nombre}
            className="w-full border border-gray-80"
          />
        </div>
        <div className="flex">
          <div className="w-[50%]">
            <label>Contenido</label>
          </div>
          <input
            type="text"
            onBlur={(e) => setContenido(e.target.value)}
            defaultValue={isUpdate ? data.content : contenido}
            className="w-full border border-gray-80"
          />
        </div>
        <div className="flex ">
          <div className="w-[50%]">
            <label>Autor</label>
          </div>
          <input
            type="text"
            onBlur={(e) => setAuthor(e.target.value)}
            defaultValue={isUpdate ? data.author : author}
            className="w-full border border-gray-80"
          />
        </div>
        {/* <div className="flex">
          <div className="w-[50%]">
            <label>Fecha</label>
          </div>
          <input
            type="text"
            defaultValue={isUpdate ? data.date : ""}
            className="w-full border border-gray-80"
          />
        </div> */}
      </div>
      <div className="flex mt-10 float-right">
        <button
          type="button"
          onClick={cancelChanges}
          class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-normal text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={saveChanges}
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Aceptar
        </button>
      </div>
    </>
  );
};

export default ABMmodal;
