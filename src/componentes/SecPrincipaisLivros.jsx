import css from "./SecPrincipaisLivros.module.css"
import CardLivro from "./CardLivro";

export default function SecPrincipaisLivros(){
    return(
      <div>
          <p className={css.titlePrincipaisLivros}>Principais livros</p>
          <div className={css.divCardsLivros}>
                  <CardLivro
                      nome={"Era uma vez um coração partido"}
                      genero={"Romance"}
                      autor={"Stephanie Garber"}
                      imagem={`url(./livro1.png)`}
                  ></CardLivro>
                  <CardLivro
                      nome={"Viagem ao centro da terra"}
                      genero={"Aventura"}
                      autor={"Jules Verne"}
                      imagem={`url(./livro2.png)`}
                  ></CardLivro>
                  <CardLivro
                      nome={"O cemitério de gigantes"}
                      genero={"Terror"}
                      autor={"Malu Costacurta"}
                      imagem={`url(./livro3.png)`}
                  ></CardLivro>
          </div>
      </div>
    );
}