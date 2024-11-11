import css from "./SecPrincipaisLivros.module.css"
import CardLivro from "../CardLivro";
import BotoesHome from "./BotoesHome";
export default function SecPrincipaisLivros(){
    return(
      <div>
          <p className={css.titlePrincipaisLivros}>Principais livros</p>
          <div className={css.divCardsLivros}>
              <a href={"/livroespecifico/12"}>
                  <CardLivro
                      nome={"Era uma vez um coração partido"}
                      genero={"Romance"}
                      autor={"Stephanie Garber"}
                      imagem={`url(./livro1.png)`}
                  ></CardLivro>
              </a>
              <a href={"/livroespecifico/11"}>
                  <CardLivro
                      nome={"Viagem ao centro da terra"}
                      genero={"Aventura"}
                      autor={"Jules Verne"}
                      imagem={`url(./livro2.png)`}
                  ></CardLivro>
              </a>
              <a href={"/livroespecifico/1"}>
                  <CardLivro
                      nome={"O cemitério de gigantes"}
                      genero={"Terror"}
                      autor={"Malu Costacurta"}
                      imagem={`url(./livro3.png)`}
                  ></CardLivro>
              </a>
          </div>
          <BotoesHome nome={"Mais livros"} link={"../../paginas/PaginaDeLivros"}></BotoesHome>
      </div>
    );
}