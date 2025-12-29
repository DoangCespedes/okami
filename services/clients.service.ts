import api from "./axios";

export const getOkamiClients = async () => {
  const response = await api.get("/clients/okami-buyers");
  return response.data;
};
