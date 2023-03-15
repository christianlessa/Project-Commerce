import transportImg from '../images/icons/delivery.svg';
import cardImg from '../images/icons/card.svg';
import protectedImg from '../images/icons/protected.svg';
import qrCodeImg from '../images/icons/qrcode.svg';

function Banner() {
  return (
    <main className="banner-container">
      <div className="banner-img-text">
        <div className="banner-back-img">
          <img src={transportImg} alt="delivery" />
        </div>
        <div className="banner-text">
          <h3>Entregamos</h3>
          <p>Para todo o Brasil</p>
        </div>
      </div>
      <div className="banner-img-text">
        <div className="banner-back-img">
          <img src={cardImg} alt="card" />
        </div>  
        <div className="banner-text">
          <h3>Parcele suas compras</h3>
          <p>em até 3x sem juros</p>
        </div>  
      </div>
      <div className="banner-img-text">
        <div className="banner-back-img">
          <img src={protectedImg} alt="card" />
        </div> 
        <div className="banner-text">
          <h3>Loja Segura</h3>
          <p>ambiente verificado</p>
        </div>
      </div>
      <div className="banner-img-text">
        <div className="banner-back-img">
          <img src={qrCodeImg} alt="card" />
        </div>
        <div className="banner-text">
          <h3>Compre por Pix</h3>
          <p>através do nosso site</p>
        </div>
      </div>
    </main>
  );
};

export default Banner;
