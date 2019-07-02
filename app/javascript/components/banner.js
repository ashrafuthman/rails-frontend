import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Because Le Wagon does not give any certificate to their graduates", "with this UI I have proved that I did", "Hope that I will make it!", "Have a nice a day"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };