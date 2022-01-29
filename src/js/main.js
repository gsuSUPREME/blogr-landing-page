const titles = document.querySelectorAll(".item-group-title");
titles.forEach((title) => {
  title.addEventListener("click", () => {
    title.classList.toggle("active");
    title.parentElement.classList.toggle("active");
    const others = document.querySelectorAll(".item-group-title");
    others.forEach((other) => {
      if (other !== title) {
        other.classList.remove("active");
        other.parentElement.classList.remove("active");
      }
    });
  });
});
window.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("item-group") ||
    e.target.classList.contains("item-group-title")
  ) {
    return;
  }
  titles.forEach((title) => {
    title.classList.remove("active");
    title.parentElement.classList.remove("active");
  });
});
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menu.src = "src/img/icon-hamburger.svg";
  } else {
    menu.classList.add("active");
    menu.src = "src/img/icon-close.svg";
  }
  document
    .getElementsByClassName("mobile-menu")[0]
    .classList.toggle("active");
});
const img2 = document.getElementById("illustration-laptop");
const links = document.querySelectorAll(".links-group");
const nav = document.getElementById("nav");
const arrow = document.createElement("span");
const arrows = document.querySelectorAll(".arrow");

window.addEventListener("load", () => {
  if (window.innerWidth > 768) {
    if (document.getElementById("mobile-menu")) {
      nav.appendChild(links);
      document.getElementById("mobile-menu").remove();
    }
    arrows.forEach((arrow) => {
      "src/img/icon-arrow-light.svg"
    });
    
    img.src = "src/img/illustration-editor-desktop.svg";
    img2.src = "src/img/illustration-laptop-desktop.svg";
  } else {
    if (!document.getElementById("mobile-menu")) {
      const parent = document.createElement("div");
      parent.id = "mobile-menu";
      parent.classList.add("mobile-menu");
      links.forEach((link) => {
        parent.appendChild(link);
      });
      nav.appendChild(parent);
    }
    arrows.forEach((arrow) => {
      arrow.src = "src/img/icon-arrow-dark.svg";
    });
    img.src = "src/img/illustration-editor-mobile.svg";
    img2.src = "src/img/illustration-laptop-mobile.svg";
  }
});
const img = document.getElementById("illustration-editor");
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    if (document.getElementById("mobile-menu")) {
      nav.appendChild(links);
      document.getElementById("mobile-menu").remove();
    }
    arrows.forEach((arrow) => {
      arrow.src = "src/img/icon-arrow-light.svg";
    });
    img.src = "src/img/illustration-editor-desktop.svg";
    img2.src = "src/img/illustration-laptop-desktop.svg";
  } else {
    if (!(document.getElementById("mobile-menu"))) {
      const parent = document.createElement("div");
      parent.classList.add("mobile-menu");
      parent.id = "mobile-menu";
      links.forEach((link) => {
        parent.appendChild(link);
      });
      nav.appendChild(parent);
    }
    arrows.forEach((arrow) => {
      arrow.src = "src/img/icon-arrow-dark.svg";
    });
    img.src = "src/img/illustration-editor-mobile.svg";
    img2.src = "src/img/illustration-laptop-mobile.svg";
  }
});