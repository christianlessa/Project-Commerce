import { useState } from "react";
import appContext from "../context/index";
import { allImages } from '../data/imagesMock';

function AppProvider({ children }) {
  const [imageSrc, setImageSrc] = useState(allImages);
  const [inputValue, setInputValue] = useState('');

  const value = {
    inputValue,
    setInputValue,
    imageSrc,
    setImageSrc,
  }

  return (
    <appContext.Provider value={ value }>
      {children}
    </appContext.Provider>
  );
}

export default AppProvider