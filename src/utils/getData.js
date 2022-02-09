const API = process.env.API || "https://randomuser.me/api/";
const axios =require ('axios');
const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  try {
    const response = await axios.get(apiURl);
    const data = await response.data;
    return data.results[0];
  } catch (error) {
    console.log('Fetch Error', error);
    return []
  };
};

export default getData;