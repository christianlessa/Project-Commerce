import instagramImg from '../images/icons/instagram.svg'
import whatsappImg from '../images/icons/whatsapp.svg';
import facebookImg from '../images/icons/facebook.svg';
import phoneImg from '../images/icons/phone.svg';
import emailImg from '../images/icons/email.svg';
import serviceImg from '../images/icons/service.svg';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-contacts">
              <h3>Contatos</h3>
              <a href="https://api.whatsapp.com/message/KQLRPQEQDY5UB1?autoload=1&app_absent=0">
                <img src={whatsappImg} alt="whatsapp" />
              </a>
              <a href="https://instagram.com/donatonhamodafeminina?igshid=YmMyMTA2M2Y=" className="footer-links">
                <img src={instagramImg} alt="instagram" />
              </a>
              <a href="https://instagram.com/donatonhamodafeminina?igshid=YmMyMTA2M2Y=" className="footer-links">
                <img src={facebookImg} alt="instagramKids" />
              </a>
          </div>
          <ul>
            <li>
              <h3>Ajuda e suporte</h3>
            </li>
            <li>
              <a href="##">Rastrear pedido</a>
            </li>
            <li>
              <a href="##">Como comprar</a>
            </li>
            <li>
              <a href="##">Política de troca</a>
            </li>
            <li>
              <a href="##">Prazo de entrega</a>
            </li>
          </ul>
          <ul className="footer-service">
            <li>
              <h3>Atendimento</h3>
            </li>
            <li>
              <img src={phoneImg} alt="phone" />
              (21) 96672-6321
            </li>
            <li>
              <img src={emailImg} alt="email" />
              donatonhakids@gmail.com
            </li>
            <li>
              <img src={serviceImg} alt="service" />
              Atendimento de 09h ás 18h
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
