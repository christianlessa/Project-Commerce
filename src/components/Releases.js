import { useContext } from "react";
import appContext from '../context';
import { Link } from 'react-router-dom';

import Header from './Header';

function Releases() {
  const { imageSrc, setImageSrc } = useContext(appContext);

  function handleMouseOver(imageId, imageOver) {
    const updatedImage = imageSrc.map((image) => {
      if (image.id === imageId) {
        return { ...image, img: imageOver }
      }
      return image;
    });
    setImageSrc(updatedImage);
  }

  function handleMouseOut(imageId, imageOut) {
    const updatedImage = imageSrc.map((image) => {
      if (image.id === imageId) {
        return { ...image, img: imageOut }
      }
      return image;
    });
    setImageSrc(updatedImage);
  }

  return (
    <>
      <Header />
      <h1 className="release">Lançamentos</h1>
      <div className="container-release">
        {
          imageSrc.map((image) => {
            return (
              <div className="release-box">
                <Link to="/description">
                  <img
                    src={image.img}
                    alt={image.title}
                    className="release-image"
                    onMouseOver={ () => handleMouseOver(image.id, image.imgOver) }
                    onMouseOut={ () => handleMouseOut(image.id, image.imgOut) }
                  />
                </Link>
                <h3>{image.title}</h3>
                <p>{image.price}</p>
                <button
                  type="button"
                >
                  Comprar
                </button>  
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default Releases;
