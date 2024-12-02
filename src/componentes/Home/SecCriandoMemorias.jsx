import css from "./SecCriandoMemorias.module.css"
import Carrossel from "./Carrossel";
import ImagensHover from "./ImagensHover";
import BaixoDaHome from "./BaixoDaHome";
import BotoesHome from "./BotoesHome";

export default function SecCriandoMemorias(){
    return(
        <div>
            <p className={css.titleCriandoMemorias}>Criando memórias</p>
            <Carrossel></Carrossel>
            <div className={css.divImagensHover}>
                <ImagensHover imagem={`url(./hover1.png)`} descricao={"A leitura abre portas para novos mundos e o conhecimento constrói as chaves para desbravá-los"}></ImagensHover>
                <ImagensHover imagem={`url(./hover2.png)`} descricao={"Investir em leitura é investir em crescimento pessoal: o conhecimento adquirido hoje é a base do sucesso de amanhã"}></ImagensHover>
                <ImagensHover imagem={`url(./hover3.png)`} descricao={"Cada página lida é um passo dado em direção à sabedoria: o conhecimento transforma a mente e o mundo ao seu redor"}></ImagensHover>
            </div>
            <BaixoDaHome imagem1={'./baixoHome1.png'} imagem2={'./baixoHome2.png'}></BaixoDaHome>
            <BotoesHome nome={"Galeria"}  link={"/galeriaindividual"}></BotoesHome>
        </div>
    )
}