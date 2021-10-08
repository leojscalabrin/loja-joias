const renderMenuDesktop = (menu) => {
  let structureMenu = ''
  const $containerMenu = document.querySelector(".main-menu__menu")

  menu.map((department) => {
    if(department.children === undefined){
      structureMenu += `
        <div class="main-menu__menu--wrapper">
          <a href=${department.url}> ${department.name} </a>
        </div>
      `;
    } else {
      structureMenu += `
        <div class="main-menu__menu--wrapper">
          <a href=${department.url}> ${department.name} </a>
            <div class="main-menu__menu--items">
              ${department.children.map((category) => {
                if(category.children === undefined) {
                  return `<a href=${category.url}>${category.name}</a>`
                } else {
                  return `
                  <div class="main-menu__menu--wrapper-items">
                    <a href=${category.url}>${category.name}</a>
                    <div class="main-menu__menu--sub-item">
                      ${category.children.map((subcategory) => {
                        return `<a href=${category.url}>${category.name}</a>`
                      })}
                    </div>
                  </div>
                  `;
                }
              })}
            </div>
        </div>
      `;
    }
  })

  $containerMenu.innerHTML = structureMenu
}

const requestMenuDesktop = () => {
  const menu = [];

  fetch("./src/script/menu/menu.json")
    .then((response) => response.json())
    .then((json) => {
      renderMenuDesktop(json.menu)
    })
}

const renderMenuFooter = (menu) => {
  let structureMenu = "";
  const $containerMenu = document.querySelector('.footer__links-list.menu')

  menu.map((department) => {
    structureMenu += `<li class="footer__links-list-item">
                        <a href="${department.url}" class="footer__links-link">${department.name}</a>
                      </li>`
  })

  $containerMenu.innerHTML = structureMenu
}

const requestShelfs= () => {
  fetch("./src/script/shelf/shelf.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
}

const bannerSwipper = () => {
    new Swiper(".container", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      })
}

const toggleFooter = () => {
  const titles = document.querySelectorAll('.footer__links-title')
  const listLinks = document.querySelectorAll('.footer__links-list')

  $titles.forEach((title, index) => {
    title.addEventListener('click', () => {
      title.classList.toggle('show-item');
      listLinks[index].classList.toggle("show-item");
    })
  })
}

requestMenuDesktop();
requestShelfs();
toggleFooter();
bannerSwipper();

const verifyMobile = document.body.clientWidth;

if (verifyMobile <= 1024) {
  toggleFooter();
}