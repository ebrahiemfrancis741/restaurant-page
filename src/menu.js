
let menu  = [
  // signature dishes
  {
    category: "Signature Dishes",
    menuItems: [
      {
        name: "Golden Beet Tartare",
        description: 
        `
        Thinly sliced golden beets paired with goat cheese, avocado, 
        and a touch of lemon zest, drizzled with a balsamic reduction.
        `
      },
      {
        name: "Willow-Smoked Duck Breast",
        description: 
        `
        Tender duck breast smoked with willow branches, served with a cherry compote, 
        roasted root vegetables, and a rich, creamy parsnip puree.
        `
      },
      {
        name: "Crispy Duck Fat Fries",
        description: 
        `
        Golden fries seasoned with rosemary and sea salt, served with a house-made aioli.
        `
      },
      {
        name: "Seared Scallops with Lemon-Ginger Butter",
        description: 
        `
        Fresh scallops seared to perfection, served with sautéed spinach and a tangy 
        lemon-ginger butter sauce.
        `
      }
    ]
  },
  // drinks
  {
    category: "Drinks",
    menuItems: [
      {
        name: "The Willow's Embrace",
        description: 
        `
        A signature cocktail made with lavender-infused gin, elderflower liqueur, 
        and a hint of citrus, served with a sprig of fresh rosemary.
        `
      },
      {
        name: "Amber Nights",
        description: 
        `
        A rich bourbon-based cocktail with a touch of smoked maple syrup and a dash of 
        bitters, garnished with an orange peel twist.
        `
      }
    ]
  },
  // deserts
  {
    category: "Dessert",
    menuItems: [
      {
        name: "Lavender Honey Cheesecake",
        description: 
        `
       A delicate, velvety cheesecake made with local honey and a hint of lavender, 
       served with fresh berries and a drizzle of honey.
        `
      },
      {
        name: "Willow Tree Chocolate Mousse",
        description: 
        `
        Decadent dark chocolate mousse topped with whipped cream and edible gold leaf.
        `
      }
    ]
  }
]

export function loadMenu(){
  let contentContainer = document.querySelector("#content");
  let menuTab = document.createElement("div");
  menuTab.classList = "menu-tab";
  contentContainer.appendChild(menuTab);

  let menuCategory, menuList, menuItem;
  let menuItemName, menuItemDescription;

  for(let i = 0; i < menu.length; i++){
    menuCategory = document.createElement("h2");
    menuCategory.textContent = menu[i].category;
    menuCategory.classList = "menu-category"
    menuTab.appendChild(menuCategory);

    menuList = document.createElement("div");
    menuList.classList = "menu-list";
    menuTab.appendChild(menuList);

    for(let j = 0; j < menu[i].menuItems.length; j++){
      menuItem = document.createElement("div");
      menuItem.classList = "menu-item";
      menuList.appendChild(menuItem);

      menuItemName = document.createElement("h3");
      menuItemName.textContent = menu[i].menuItems[j].name;
      menuItem.appendChild(menuItemName);

      menuItemDescription = document.createElement("p");
      menuItemDescription.textContent = menu[i].menuItems[j].description;
      menuItem.appendChild(menuItemDescription);
    }
  }
}