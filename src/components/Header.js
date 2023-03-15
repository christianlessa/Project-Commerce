import { useContext } from "react";
import { headerImages } from "../data/imagesMock";
import { Link } from "react-router-dom";
import searchIcon from "../images/icons/searchIcon.svg"
import appContext from "../context/index";

function Header() {
  const { setInputValue } = useContext(appContext);

  function handleInput({ target: { value }}) {
    setInputValue(value)
  }

  return (
    <div>
      <div className="background-header"
        style={{
          backgroundImage: `url(${headerImages.background})`,
        }}
      >
      <Link to="/" className="">
        <img 
          src={headerImages.newLogoTonha} alt="logo"
          className="image-logo"
        />
      </Link>
      </div>
      <header className="App-header">
        <Link to="/release">NEWS DA SEMANA</Link>
        <Link to="/saleof">LIQUIDAÇÃO</Link>
        <Link to="/collection">COLEÇÃO FESTAS</Link>
        <Link to="/feminine">FEMININO</Link>
        <Link to="/contact">CONTATO</Link>
        <label htmlFor="pesquisa" for="pesquisar" className="label-input-button">
          <input
            type="text"
            id="pesquisa"
            name="pesquisa"
            placeholder="Olá, oque procura?"
            onChange={ handleInput }
            />
          <button 
            type="button"
            id="pesquisar"
          >
            <img src={searchIcon} alt="iconi procurar" />
          </button>
        </label>
      </header>
    </div>
  );
}

export default Header;
