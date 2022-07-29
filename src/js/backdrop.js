const backdropDOM = document.querySelector(".backdrop");

const enableBackdrop = function (HTMLToInject = "") {
  backdropDOM.insertAdjacentHTML("afterbegin", HTMLToInject);

  backdropDOM.classList.remove("hidden");
};

const disableBackdrop = function () {
  backdropDOM.classList.add("hidden");

  backdropDOM.innerHTML = "";
};

export { enableBackdrop, disableBackdrop };
