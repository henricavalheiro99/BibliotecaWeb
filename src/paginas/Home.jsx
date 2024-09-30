import css from "./Home.module.css"
import Header from "../componentes/Header";
import Banner from "../componentes/Banner";
import Footer from "../componentes/Footer";
import SecPrincipaisLivros from "../componentes/SecPrincipaisLivros";
import SecCriandoMemorias from "../componentes/SecCriandoMemorias";

export default function Home(){
    return(
        <div className={css.main + ' container-fluid'}>
            <div style={{backgroundImage: `url(./background-teste.png)`}} className={css.blocoSec1}>
                <div className={css.details}>
                    <Header></Header>
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