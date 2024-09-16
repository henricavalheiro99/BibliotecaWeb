import css from "./Home.module.css"
import Header from "../componentes/Header";

export default function Home(){
    return(
        <div className={css.main + ' container-fluid m-0'}>
            <Header></Header>
        </div>
    );
}