import css from "./BaixoDaHome.module.css"

export default function BaixoDaHome({imagem1, imagem2}){
    return(
        <div className={css.BaixoTudo}>
            <div className={css.divBaixo}>
                <div>
                    <img className={css.imagemBaixo} src={imagem1}/>
                </div>
                <div className={css.divTextos}>
                    <p className={css.titleBaixo}>Conheça os rostos por trás do futuro</p>
                    <p className={css.subtitleBaixo}>Explore a nossa galeria de estudantes e descubra os rostos de quem
                        está moldando o amanhã. Cada jovem aqui representa um potencial inexplorado e uma história de
                        dedicação e criatividade, preparados para trazer inovações e transformar o mundo</p>
                </div>
            </div>

            <div className={css.divBaixo}>
                <div className={css.divTextos} style={{marginLeft: "50px", marginRight: "0px"}}>
                    <p className={css.titleBaixo}>Histórias e talentos em construção</p>
                    <p className={css.subtitleBaixo}>Navegue pela nossa galeria e conheça os talentos em ascensão que
                        estão em plena construção de suas histórias. Estes estudantes são os futuros líderes e agentes
                        de mudança, e cada imagem representa uma jornada de crescimento e conquistas</p>
                </div>
                <div>
                    <img className={css.imagemBaixo} src={imagem2} style={{marginRight: "50px", marginLeft: "0px"}}/>
                </div>
            </div>
        </div>
    )
}