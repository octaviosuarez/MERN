import { useEffect } from "react";

const Clients = ({ data }) => {
  // useEffect(() => {
  //   console.log("data", data);
  // }, [data]);

  return (
    <div className="bg-[#F1F5F9] w-full py-[2rem] px-[3rem]">
      <p className="font-semibold text-2xl">Clients</p>
      <div className="h-[90%] py-[2rem] px-[4rem] mt-2 rounded-sm bg-white shadow-md">
        <div class="relative overflow-x-auto">
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
