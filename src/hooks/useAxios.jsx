import axios from "axios";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../config/firebase.config";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});
const auth = getAuth(app);
const useAxios = () => {
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        signOut(auth);
      }
    }
  );
  return instance;
};

export default useAxios;
