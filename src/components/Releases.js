import { useState } from 'react';
import { allImages } from '../data/imagesMock';

function Releases() {
  const [imageSrc, setImageSrc] = useState(allImages);

  function handleMouseOver(imageId, imageOver) {
    const updatedImage = imageSrc.map((image) => {
      if (image.id === imageId) {
        return { ...image, img: imageOver }
      }
      return image;
    });
    setImageSrc(updatedImage);
    console.log("entrou id é: ", imageId, "estado: ", imageSrc)
  }

  function handleMouseOut(imageId, imageOut) {
    const updatedImage = imageSrc.map((image) => {
      if (image.id === imageId) {
        return { ...image, img: imageOut }
      }
      return image;
    });
    setImageSrc(updatedImage);
    console.log("saiu id é: ", imageId, "estado: ", imageSrc)
  }

  return (
    <>
      <h1 className="release">Lançamentos</h1>
      <div className="container-release">
        {
          imageSrc.map((image) => {
            return (
              <div className="release-img-button">
                <img
                  src={image.img}
                  alt={image.title}
                  className="release-image"
                  onMouseOver={ () => handleMouseOver(image.id, image.imgOver) }
                  onMouseOut={ () => handleMouseOut(image.id, image.imgOut) }
                />
                <h3>{image.title}</h3>
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
