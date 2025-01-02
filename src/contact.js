
export function loadContact(){
  let contentContainer = document.querySelector("#content");
  let contactTab = document.createElement("div");
  contactTab.classList = "contact-tab";
  contentContainer.appendChild(contactTab);

  let container = document.createElement("div");
  contactTab.appendChild(container);

  let header = document.createElement("h2");
  header.textContent = "Opening Hours";
  container.appendChild(header);

  let content = document.createElement("p");
  content.textContent = "Monday to Thursday: 5PM - 10PM";
  container.appendChild(content);
  content = document.createElement("p");
  content.textContent = "Friday to Sunday: 5PM - 11PM";
  container.appendChild(content);
  content = document.createElement("p");
  content.textContent = "Sunday - Closed for private events";
  container.appendChild(content);

  // 2nd section
  container = document.createElement("div");
  contactTab.appendChild(container);
  header = document.createElement("h2");
  header.textContent = "Address:";
  container.appendChild(header);
  content = document.createElement("p");
  content.textContent = "123 Willow Way, Enchanted Springs, USA";
  container.appendChild(content);

  // 3rd section
  container = document.createElement("div");
  contactTab.appendChild(container);
  header = document.createElement("h2");
  header.textContent = "Social Media Handles:";
  container.appendChild(header);
  content = document.createElement("p");
  content.textContent = "Instagram: @TheGildedWillow";
  container.appendChild(content);
  content = document.createElement("p");
  content.textContent = "Facebook: The Gilded Willow Restaurant";
  container.appendChild(content);
  content = document.createElement("p");
  content.textContent = "Twitter: @GildedWillow";
  container.appendChild(content);

}