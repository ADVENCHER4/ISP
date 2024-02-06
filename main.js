const modal = document.getElementById("modal");
const modalBg = document.getElementById("modal-bg");
const openButton = document.getElementById("open-modal");

openButton.addEventListener("click", () => {
  open();
});

modalBg.addEventListener("click", () => {
  close();
});

modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

const close = () => {
  modalBg.className = "modal";
};

const open = () => {
  modalBg.className = "modal active";
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddens = document.querySelectorAll(".hidden");
hiddens.forEach((el) => observer.observe(el));
