const template = document.getElementById("template").content;
const template2 = document.getElementById("template2").content;

const containers = document.getElementById("ContainersCards");

export const ViewMovie = async (response) => {
  containers.innerHTML =""

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

    template.querySelector("img").setAttribute("src", Poster);
    template.querySelector("img").setAttribute("alt", Type);
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });
  containers.appendChild(fragment);
};


export const NoView = async (value) => {
  containers.innerHTML = "";
  let fragment = document.createDocumentFragment();

   template2
      .querySelector("img")
      .setAttribute(
        "src",
        "https://res.cloudinary.com/danimel/image/upload/v1702668661/Netflix/Frame_29_1_ysbk0d.png"
      );
        template2.querySelector("h1").textContent = `No se encontro resultados de: "${value}"`
    const clone = template2.cloneNode(true);
    fragment.appendChild(clone);

  containers.appendChild(fragment);
};
