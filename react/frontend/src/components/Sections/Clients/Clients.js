import { useEffect } from "react";
import { GrUpdate, GrTrash } from "react-icons/gr";
import { AiOutlineUserAdd } from "react-icons/ai";

const Clients = ({ data, updateClient, deleteClient, postClient }) => {
  // useEffect(() => {
  //   console.log("data", data);
  // }, [data]);\

  const searchBarAndAddButtonClient = () => {
    return (
      <div className="flex gap-3">
        <form className="flex-grow">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-sm  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar clientes"
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buscar
            </button>
          </div>
        </form>
        <form className="flex-shrink pt-2">
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
        </form>
      </div>
    );
  };

  return (
    <div className="bg-[#F1F5F9]">
      <p className="font-semibold">Todos los clientes</p>

      <div className=" h-[90%] py-[2rem] px-[4rem] mt-2 rounded-sm bg-white shadow-md">
        {searchBarAndAddButtonClient()}
        <div class=" mt-10 relative overflow-x-auto min-h-[500px]">
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
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <td class="px-6 py-4">{i.title}</td>
                    <td class="px-6 py-4">{i.content}</td>
                    <td class="px-6 py-4">{i.author}</td>
                    <td class="px-6 py-4">{i.date}</td>
                    <td class="px-6 py-4">
                      <div className="flex space-x-4">
                        <button
                          className="cursor-pointer hover:text-white-700"
                          onClick={(evt) => updateClient(evt, i)}
                        >
                          <GrUpdate />
                        </button>
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
