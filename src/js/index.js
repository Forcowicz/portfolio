"use strict";

import { disableBackdrop, enableBackdrop } from "./backdrop";
import { generateProjectHTML, generateProjectImages } from "./project";

// Initializing backdrop
const backdropDOM = document.querySelector(".backdrop");

backdropDOM.addEventListener("click", (e) => {
  if (e.target === backdropDOM) disableBackdrop();
});

// Generating projects

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    const data = {
      ...card.dataset,
    };

    const projectHTML = generateProjectHTML(data);
    enableBackdrop(projectHTML);

    const imgElements = generateProjectImages(data);
    document.querySelector(".project__img-container").append(imgElements[0], imgElements[1]);
  });
});
