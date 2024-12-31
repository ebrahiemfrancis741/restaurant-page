
import homeImg from "./img/home1.jpg";

export function loadHome(){

  let contentContainer = document.querySelector("#content");

  let homeContainer = document.createElement("div");
  homeContainer.classList = "home-tab";
  contentContainer.appendChild(homeContainer);

  let tagline = document.createElement("p");
  tagline.textContent = "Where elegance meets comfort.";
  homeContainer.appendChild(tagline);

  let container1 = document.createElement("div");
  homeContainer.appendChild(container1);

  let img1 = document.createElement("img");
  img1.src = homeImg;
  container1.appendChild(img1);

  let p1 = document.createElement("p");
  p1.textContent = 
  `
    The Gilded Willow is a fine-dining restaurant that blends
    the mystique of an enchanted forest with a luxurious dining
    experience. Nestled in the heart of a bustling city,
    it offers a sanctuary for those seeking exquisite cuisine
    paired with an immersive ambiance. The restaurant prides itself
    on its farm-to-table philosophy, ensuring the freshest ingredients
    are used to craft dishes inspired by both traditional and contemporary
    culinary arts.
  `;

  container1.appendChild(p1);

}