import { useEffect, useState } from "react";
import api from "../../api/api";
import Clients from "./Clients";
import Modal from "../../Modal/Modal";
import ABMmodal from "../../Modal/ABMmodal";

const ClientsWrapper = () => {
  const [clients, setClients] = useState([]);
  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
  const [isModalOpenPost, setIsModalOpenPost] = useState(false);
  const [dataToSendModal, setDataToSendModal] = useState(null);
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    getArticles();
  }, [updateCount]);

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
    try {
      await api.delete(data._id);
      setUpdateCount((prevCount) => prevCount + 1); //actualizamos el estado cuando hacemos abm generamos nuevo renderizado para visualizar los datos en vivo, debe de haber otra forma
    } catch (e) {
      console.log(e);
    } finally {
      closeModal();
    }
  };

  const save = async (data) => {
    try {
      await api.post(data);
      setUpdateCount((prevCount) => prevCount + 1); //actualizamos el estado cuando hacemos abm generamos nuevo renderizado para visualizar los datos en vivo, debe de haber otra forma
    } catch (es) {
      console.log(es);
    } finally {
      closeModal();
    }
  };

  const getArticles = async () => {
    const result = await api.getArticulos();
    setClients(result);
  };

  const update = async (data) => {
    try {
      await api.update(dataToSendModal?._id, data);
      setUpdateCount((prevCount) => prevCount + 1); //actualizamos el estado cuando hacemos abm generamos nuevo renderizado para visualizar los datos en vivo, debe de haber otra forma
    } catch (e) {
      console.log(e);
    } finally {
      closeModal();
    }
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
        <Modal
          isOpen={isModalOpenUpdate}
          onClose={closeModal}
          titulo={"Actualizar"}
        >
          <ABMmodal isUpdate={true} data={dataToSendModal} update={update} />
        </Modal>
      )}
      {isModalOpenPost && (
        <Modal isOpen={isModalOpenPost} onClose={closeModal} titulo={"Agregar"}>
          <ABMmodal
            isPost={true}
            data={null}
            save={save}
            cancelChanges={closeModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default ClientsWrapper;
