const generateProjectHTML = function (data) {
  const details = data.details.split(";");

  return `
      <div class="project">
        <div class="project__img-container">
        </div>

      <div class="project__content">
        <h5 class="project__heading">${data.name}</h5>

        <ul class="project__details">
          <li class="project__details-item">
            <i class="bi bi-calendar2-date-fill project__details-icon"></i>
            <span class="project__details-name">${details[0]}</span>
          </li>
          <li class="project__details-item">
            <i class="bi bi-hammer project__details-icon"></i>
            <span class="project__details-name">${details[1]}</span>
          </li>
          <li class="project__details-item">
            <i class="bi bi-phone-fill project__details-icon"></i>
            <span class="project__details-name">${details[2]}</span>
          </li>
        </ul>

        <p class="project__description">
          ${data.description}
        </p>

        <div class="project__buttons">
          <a href="${data.websiteUrl}" target="_blank" class="btn btn--primary btn--block"
            >See it by yourself!</a
          >
          <a
            href="${data.githubUrl}"
            target="_blank"
            class="btn btn--secondary btn--block"
          >
            <i class="bi bi-github"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  `;
};

const generateProjectImages = function (data) {
  const images = data.images.split(";");

  const img1 = new Image();
  img1.src = `../img/lart.jpg`;
  img1.src = require(`.././img/${images[0]}.png`);
  const img2 = new Image();
  img2.src = require(".././img/" + images[1] + ".png");
  img2.classList.add("project__img");

  return [img1, img2];
};

export { generateProjectHTML, generateProjectImages };
