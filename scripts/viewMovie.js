import { url } from "../helpers/contants.js";
import { GetData, PostData } from "../helpers/peticiones.js";

const template = document.getElementById("template").content;
const template2 = document.getElementById("template2").content;
const templateMovie = document.getElementById("templateMovie").content;

const containers = document.getElementById("ContainersCards");

export const ViewMovie = async (response) => {
  containers.innerHTML = "";

  let fragment = document.createDocumentFragment();
  //--------Pintar las Card-----------//
  response.forEach((item) => {
    const { id, Poster, Type, Value } = item;

    template.querySelector("img").setAttribute("src", Poster);
    template.querySelector("img").setAttribute("alt", Type);
    template.querySelector("img").setAttribute("id", id);
    if (Value >= 8) {
      template.querySelector("button").setAttribute("class", "btnValor");
    } else {
      template.querySelector("button").setAttribute("class", "btnValor2");
    }
    template.querySelector("button").textContent = Value;
    template.querySelector("button").setAttribute("id", id);
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });
  containers.appendChild(fragment);
  containers.addEventListener("click", async (e) => {
    Details(e.target.id);
  });
};
// ====================Details movies===============================//

const Details = async (id) => {
  const response = await GetData(url);
  const movie = response?.find((fi) => fi.id === id);
  const { Carrusel, Description, Title, Trailer, Type, Year } = movie;
  console.log(movie);

  containers.innerHTML = "";
  let fragment = document.createDocumentFragment();

  templateMovie.querySelector("img").setAttribute("src", Carrusel);
  templateMovie.querySelector("img").setAttribute("alt", Type);
  templateMovie.querySelector("iframe").setAttribute("src", Trailer);
  templateMovie.querySelector("h5").textContent = Title;
  templateMovie.querySelector(
    "p"
  ).textContent = `Año: ${Year} - Tipo: ${Type} - ${Description}`;
  const clone = templateMovie.cloneNode(true);
  fragment.appendChild(clone);
  containers.appendChild(fragment);
};

// =====================No se encuentra una movies===============================//
export const NoView = async (value) => {
  containers.innerHTML = "";
  let fragment = document.createDocumentFragment();

  template2
    .querySelector("img")
    .setAttribute(
      "src",
      "https://res.cloudinary.com/danimel/image/upload/v1702668661/Netflix/Frame_29_1_ysbk0d.png"
    );
  template2.querySelector(
    "h1"
  ).textContent = `No se encontro resultados de: "${value}"`;
  const clone = template2.cloneNode(true);
  fragment.appendChild(clone);

  containers.appendChild(fragment);
};

// ====================Mostrar el Formulario de Registro============================//
export const RegisterMovie = async () => {
  containers.innerHTML = "";
  containers.innerHTML += `
         <form class="formMovie">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Url Carrusel</label>
          <input type="text" class="form-control" id="carrusel" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text"></div>
        </div>
          <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Url Poster</label>
          <input type="text" class="form-control" id="poster" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Url Trailer</label>
          <input type="text" class="form-control" id="trailer">
        </div>
          <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Title</label>
          <input type="text" class="form-control" id="title">
        </div>
          <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Descripción</label>
          <input type="text" class="form-control" id="descripcion">
        </div>
          <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Año</label>
          <input type="text" class="form-control" id="year">
        </div>
          <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Tipo</label>
          <input type="text" class="form-control" id="tipo">
        </div>
         <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Valor</label>
          <input type="text" class="form-control" id="valor">
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
     `;
};

// ====================Capturar la información del Formulario===========================//
containers.addEventListener("submit", async (event) => {
  event.preventDefault();

  let Title = document.getElementById("title").value;
  let Carrusel = document.getElementById("carrusel").value;
  let Poster = document.getElementById("poster").value;
  let Description = document.getElementById("descripcion").value;
  let Trailer = document.getElementById("trailer").value;
  let Year = document.getElementById("year").value;
  let Value = document.getElementById("valor").value;
  let Type = document.getElementById("tipo").value;

  let obj = {
    Title,
    Carrusel,
    Value: Number.parseFloat(Value),
    Poster,
    Description,
    Type,
    Year,
    Trailer,
    id: Math.round(Math.random() * (1000 - 1) + 1).toString(),
  };

  await PostData(url, obj);

  document.getElementById("title").value = "";
  document.getElementById("carrusel").value = "";
  document.getElementById("poster").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("trailer").value = "";
  document.getElementById("year").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("tipo").value = "";
});
