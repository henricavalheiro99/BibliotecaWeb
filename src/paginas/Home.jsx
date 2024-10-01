import css from "./Home.module.css"
import Header from "../componentes/Header";
import Banner from "../componentes/Home/Banner";
import Footer from "../componentes/Home/Footer";
import SecPrincipaisLivros from "../componentes/Home/SecPrincipaisLivros";
import SecCriandoMemorias from "../componentes/Home/SecCriandoMemorias";

export default function Home(){
    return(
        <div className={css.main + ' container-fluid'}>
            <div style={{backgroundImage: `url(./background-teste.png)`}} className={css.blocoSec1}>
                <div className={css.details}>
                    <Header
                    redireciona1={"./Chat"}
                    redireciona2={"./Galeria"}
                    redireciona3={"./PaginaDeLivros"}
                    redireciona4={"./Perfil"}
                    icone1={"fa-comments"}
                    icone2={"fa-image"}
                    icone3={"fa-book"}
                    icone4={"fa-user"}
                    ></Header>
                    <Banner></Banner>
                </div>
            </div>
            <SecPrincipaisLivros></SecPrincipaisLivros>
            <SecCriandoMemorias></SecCriandoMemorias>
            <div style={{backgroundImage: `url(./background-teste.png)`}} className={css.blocoSec2}>
                <div className={css.details}>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}