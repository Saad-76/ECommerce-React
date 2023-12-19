import axios from "axios";
import { Base } from "./ApiConfig";

const AxiosInstance = axios.create({
  Base: Base,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;