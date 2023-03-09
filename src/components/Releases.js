import { useState } from 'react';
import { allImages } from '../data/imagesMock';

function Releases() {
  const [imageSrc, setImageSrc] = useState(allImages);

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
