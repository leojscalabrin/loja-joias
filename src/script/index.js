const renderMenuDesktop = (menu) => {
  let structureMenu = ''
  const $containerMenu = document.querySelector(".header-menu")

  menu.map((department) => {
    if(department.children === undefined){
      structureMenu += `
        <div class="header-menu-wrapper">
          <a href=${department.url}> ${department.name} </a>
        </div>
      `;
    } else {
      structureMenu += `
        <div class="header-menu--wrapper">
          <a href=${department.url}> ${department.name} </a>
            <div class="header-menu--items">
              ${department.children.map((category) => {
                if(category.children === undefined) {
                  return `<a href=${category.url}>${category.name}</a>`
                } else {
                  return `
                  <div class="header-menu--wrapper-items">
                    <a href=${category.url}>${category.name}</a>
                    <div class="header-menu--sub-item">
                      ${category.children.map((subcategory) => {
                        return `<a href=${category.url}>${category.name}</a>`
                      })}
                    </div>
                  </div>
                  `
                }
              })}
            </div>
        </div>
      `;
    }
  });

  $containerMenu.innerHTML = structureMenu
};

const requestMenuDesktop = () => {
  const menu = [];

  fetch("./src/script/menu/menu.json")
    .then((response) => response.json())
    .then((json) => {
      renderMenuDesktop(json.menu)
    });
};

requestMenuDesktop();

const bannerSwipper = () => {
    new Swiper(".container", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

bannerSwipper();