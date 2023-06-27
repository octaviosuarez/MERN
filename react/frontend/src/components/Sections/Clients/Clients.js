import { useEffect } from "react";
import { GrUpdate, GrTrash } from "react-icons/gr";
import { AiOutlineUserAdd } from "react-icons/ai";

const Clients = ({ data, updateClient, deleteClient, postClient }) => {
  // useEffect(() => {
  //   console.log("data", data);
  // }, [data]);

  return (
    <div className="bg-[#F1F5F9]">
      <p className="font-semibold text-2xl">Clients</p>

      <div className=" h-[90%] py-[2rem] px-[4rem] mt-2 rounded-sm bg-white shadow-md">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={(evt) => postClient(evt)}
            class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <div className="flex gap-2">
              <div className="pt-1">
                <AiOutlineUserAdd />
              </div>
              <p>Agregar</p>
            </div>
          </button>
        </div>
        <div class=" mt-10 relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" class="px-6 py-3">
                  Contenido
                </th>
                <th scope="col" class="px-6 py-3">
                  Autor
                </th>
                <th scope="col" class="px-6 py-3">
                  Fecha
                </th>
                <th scope="col" class="px-6 py-3">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((i, index) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4">{i.title}</td>
                    <td class="px-6 py-4">{i.content}</td>
                    <td class="px-6 py-4">{i.author}</td>
                    <td class="px-6 py-4">{i.date}</td>
                    <td class="px-6 py-4">
                      <div className="flex space-x-4">
                        <i
                          className="cursor-pointer"
                          onClick={(evt) => updateClient(evt, i)}
                        >
                          <GrUpdate />
                        </i>
                        <i
                          className="cursor-pointer"
                          onClick={(evt) => deleteClient(evt, i)}
                        >
                          <GrTrash />
                        </i>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>{" "}
      </div>
    </div>
  );
};

export default Clients;
