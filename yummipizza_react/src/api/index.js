import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/pizza`);
    return data;
  } catch (error) {
    console.log("error occurred", error);
  }
};
