export const GetData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

export const PostData = async (url, datos) => {
  try {
    await axios.post(url, datos);
    alert("Pelicula Guardada Exitosamente");
  } catch (error) {
    console.error;
  }
};

//=====================//
export const putData = async (url, datos) => {
  try {
    await axios.put(url, datos);
    alert("Pelicula Editada Exitosamente");
  } catch (error) {
    console.error;
  }
};


export const deleteData = async (url) => {
  try {
    await axios.delete(url, datos);
    alert("Se Borro  Exitosamente");
  } catch (error) {
    console.error;
  }
};