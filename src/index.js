import "./styles.css";
import { loadHome } from "./home.js"
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

loadHome();
// loadMenu();

(function setupEventListeners(){
  let contentContainer = document.querySelector("#content");

  let homeBtn = document.querySelector("#homeBtn");
  homeBtn.addEventListener("click", ()=>{
    contentContainer.replaceChildren();
    loadHome();
  });

  let menuBtn = document.querySelector("#menuBtn");
  menuBtn.addEventListener("click", ()=>{
    contentContainer.replaceChildren();
    loadMenu();
  });

  let contactBtn = document.querySelector("#contactBtn");
  contactBtn.addEventListener("click", ()=>{
    contentContainer.replaceChildren();
    loadContact();
  });

})();