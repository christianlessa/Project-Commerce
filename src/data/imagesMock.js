import imgPink1 from '../images/clothes/imgPink1.jpeg';
import imgPink2 from '../images/clothes/imgPink2.jpeg';
import imgGrey1 from '../images/clothes/imgGrey1.jpeg';
import imgGrey2 from '../images/clothes/imgGrey2.jpeg';
import imgViolet1 from '../images/clothes/imgViolet1.jpeg';
import imgViolet2 from '../images/clothes/imgViolet2.jpeg';
import imgOrange1 from '../images/clothes/imgOrange1.jpeg';
import imgOrange2 from '../images/clothes/imgOrange2.jpeg';

import logo from '../images/header/logo.jpeg';
import logoTonha from '../images/header/logoTonha.jpeg';
import background from '../images/header/fundo.jpeg';
import newLogoTonha from '../images/header/newLogoTonha.jpeg';


const allImages = [
  {
    id: 1,
    title: "Roupa Rosa",
    price: "R$:129,99",
    img: imgPink1,
    imgOver: imgPink2,
    imgOut: imgPink1,
  },
  {
    id: 2,
    title: "Roupa Cinza",
    price: "R$:149,99",
    img: imgGrey1,
    imgOver: imgGrey2,
    imgOut: imgGrey1,
  },
  {
    id: 3,
    title: "Roupa Violeta",
    price: "R$:139,99",
    img: imgViolet1,
    imgOver: imgViolet2,
    imgOut: imgViolet1,
  },
  {
    id: 4,
    title: "Roupa Laranja",
    price: "R$:119,99",
    img: imgOrange1,
    imgOver: imgOrange2,
    imgOut: imgOrange1,
  },
];

const headerImages = {
  id: 1,
  logo: logo,
  tonha: logoTonha,
  newLogoTonha: newLogoTonha,
  background: background,
};

export { allImages, headerImages };
