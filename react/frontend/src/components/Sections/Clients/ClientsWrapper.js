import { useEffect, useState } from "react";
import api from "../../api/api";
import Clients from "./Clients";
import Modal from "../../Modal/Modal";
import ABMmodal from "../../Modal/ABMmodal";

const ClientsWrapper = () => {
  const [clients, setClients] = useState([]);
  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
  const [isModalOpenPost, setIsModalOpenPost] = useState(false);
  const [dataToSendModal, setDataToSendModal] = useState(false);

  useEffect(() => {
    getArticles();
  }, []);

  const closeModal = () => {
    setIsModalOpenUpdate(false);
    setIsModalOpenPost(false);
  };

  const updateClient = (evt, data) => {
    evt.preventDefault();
    setDataToSendModal(data);
    setIsModalOpenUpdate(true);
  };

  const openModalPost = (evt) => {
    evt.preventDefault();
    setIsModalOpenPost(true);
  };

  /* *******************LLAMADOS A LA API*********************** */

  const deleteClient = async (evt, data) => {
    evt.preventDefault();
    await api.delete(data._id);
  };

  const save = async (data) => {
    await api.post(data);
  };

  const getArticles = async () => {
    const result = await api.getArticulos();
    setClients(result);
  };

  const update = async (data) => {
    await api.update(dataToSendModal._id, data);
  };
  /* *******************FIN LLAMADOS A LA API*********************** */

  return (
    <div className="bg-[#F1F5F9] w-full py-[2rem] px-[3rem]">
      <Clients
        data={clients}
        updateClient={updateClient}
        deleteClient={deleteClient}
        postClient={openModalPost}
      />
      {isModalOpenUpdate && (
        <Modal isOpen={true} onClose={closeModal} titulo={"Actualizar"}>
          <ABMmodal isUpdate={true} data={dataToSendModal} update={update} />
        </Modal>
      )}
      {isModalOpenPost && (
        <Modal isOpen={true} onClose={closeModal} titulo={"Agregar"}>
          <ABMmodal isPost={true} data={null} save={save} />
        </Modal>
      )}
    </div>
  );
};

export default ClientsWrapper;
