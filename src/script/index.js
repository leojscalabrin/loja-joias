
const bannerSwipper = () => {
    new Swiper(".container", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

bannerSwipper();