export const GetData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

export const PostData = async (url, datos) => {
  await axios.post(url, datos);
  console.log("Se registro");
};
