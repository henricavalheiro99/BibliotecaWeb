import css from "./SecCriandoMemorias.module.css"
import Carrossel from "./Carrossel";

export default function SecCriandoMemorias(){
    return(
        <div>
            <p className={css.titleCriandoMemorias}>Criando memórias</p>
            <Carrossel></Carrossel>
            <div>

            </div>
        </div>
    )
}