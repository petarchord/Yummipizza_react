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

export const orderApi = async (data) => {
  try {
    const response = await axios({
      method: "post",
      url: `${baseUrl}/order`,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  } catch (error) {
    console.log("error occurred", error);
  }
};
