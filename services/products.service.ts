import api from "./axios";

export const getProductsByBrand = async () => {
  const response = await api.get("/products/brand-51");
  return response.data;
};
