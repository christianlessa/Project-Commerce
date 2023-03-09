import { headerImages } from "../data/imagesMock";

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
        <a href="http://www.google.com.br/">NEWS DA SEMANA</a>
        <a href="http://www.google.com.br/">LIQUIDAÇÃO</a>
        <a href="http://www.google.com.br/">COLEÇÃO FESTAS</a>
        <a href="http://www.google.com.br/">FEMININO</a>
        <a href="http://www.google.com.br/">CONTATO</a>
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
