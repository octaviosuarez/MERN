import { useEffect, useState } from "react";
import api from "../../api/api";
import Clients from "./Clients";

const ClientsWrapper = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const result = await api.getArticulos();
    setClients(result);
    console.log(result);
  };

  return <Clients data={clients} />;
};

export default ClientsWrapper;
