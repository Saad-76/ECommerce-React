import AxiosInstance from "./AxiosInstance";
import handleApiError from "./ApiError";

export const ApiPostRequest = async (url, data) => {
  return await AxiosInstance.post(url, data).catch(handleApiError);
};

export const ApiPutRequest = async (url, data) => {
  return await AxiosInstance.put(url, data).catch(handleApiError);
};

export const ApiGetRequest = async (url) => {
  return await AxiosInstance.get(url).catch(handleApiError);
};
export const ApiDeleteRequest = async (url, data) => {
  return await AxiosInstance.delete(url, data).catch(handleApiError);
};