import { url } from "../helpers/contants.js";
import { GetData } from "../helpers/peticiones.js";

const template = document.getElementById("template").content;
const containers = document.getElementById("ContainersCards");

document.addEventListener("DOMContentLoaded", async () => {
  const response = await GetData(url);

  let fragment = document.createDocumentFragment();
  //--------Pintar las Card-----------//
  response.forEach((item) => {
    const {
      id,
      Carrusel,
      Description,
      Poster,
      Title,
      Trailer,
      Type,
      Value,
      Year,
    } = item;
    console.log(Carrusel, Poster);
    template.querySelector("img").setAttribute("src", Poster);
    template.querySelector("img").setAttribute("alt", Type);
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });
  containers.appendChild(fragment);
});
