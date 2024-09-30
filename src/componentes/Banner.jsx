import css from "./Banner.module.css"

export default function Banner(){
    return(
        <div className={css.banner + ' w-100'}>
                <p className={css.titleBanner}>Descubra Novos Mundos!</p>
                <p className={css.subtitleBanner}>Encontre histórias incríveis, aprenda algo novo a cada dia e mergulhe
                    em
                    uma coleção diversa de livros que irão inspirar e transformar sua maneira de ver o mundo.</p>
                <button className={css.btnBanner}>Saiba Mais</button>
        </div>
    );
}
