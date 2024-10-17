import axios from "axios";

export const axiosConfigure = async (method: string, uri: string, body?: any) => {
  const xAccessToken = JSON.parse(`${localStorage.getItem("token")}`);
  try {
    const headerConfig = {
      headers: {
        "x-access-token": xAccessToken,
        "Content-Type": "application/json",
      },
    };
    let data;
    if (method === "GET") {
      data = await axios.get(uri, headerConfig);
    } else if (method === "POST") {
      data = await axios.post(uri, body, headerConfig);
    } else if (method === "PUT") {
      data = await axios.put(uri, body, headerConfig);
    } else if (method === "PATCH") {
      data = await axios.patch(uri, body, headerConfig);
    } else if (method === "DELETE") {
      const config = {
        ...headerConfig,
        data: body,
      };
      data = await axios.delete(uri, config);
    } else {
      data = await axios.post(uri, body, headerConfig);
    }
    return data;
  } catch (error) {
    return error;
  }
};
