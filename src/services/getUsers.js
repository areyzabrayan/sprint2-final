import axios from "axios";

const endpoint = "https://back-sprint2.onrender.com/usuarios";

export const getUser = async ({ email, password }) => {
  try {
    const url = `${endpoint}?email=${email}&password=${password}`;
    const { data } = await axios.get(url);
    return data[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};
