import { headerImages } from "../data/imagesMock";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="background-header"
        style={{
          backgroundImage: `url(${headerImages.background})`,
        }}
      >
      <img 
        src={headerImages.tonha} alt="logo"
        className="image-logo"
      />
      </div>
      <header className="App-header">
        <Link to="/release">NEWS DA SEMANA</Link>
        <Link to="/saleof">LIQUIDAÇÃO</Link>
        <Link to="/collection">COLEÇÃO FESTAS</Link>
        <Link to="/feminine">FEMININO</Link>
        <Link to="/contact">CONTATO</Link>
        <label htmlFor="pesquisa" for="pesquisar">
          <input
            type="text"
            id="pesquisa"
            name="pesquisa"
            placeholder="Olá, oque procura?"
          />
          <button 
            type="button"
            id="pesquisar"
          >
            ir
          </button>
        </label>
      </header>
    </div>
  );
}

export default Header;
