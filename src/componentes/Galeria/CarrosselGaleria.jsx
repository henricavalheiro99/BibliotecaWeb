import css from "./CarrosselGaleria.module.css"

export default function CarrosselGaleria(){
    return (
        <div id="carouselExample" className="carousel slide" style={{width: '65%', display: 'block', margin: '0 auto'}}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <p className={css.textoPreto}><span className={css.textoRoxo}>Curso: </span>Técnico em
                        desenvolvimento de sistemas</p>
                    <p className={css.textoPreto}><span className={css.textoRoxo}>Ano: </span>2023 e 2024</p>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <img src="/carrossel4.png" className="d-block imgs" alt="" style={{borderRadius: "10px", width: "70%"}}/>
                    </div>
                </div>
                <div className="carousel-item">
                    <p className={css.textoPreto}><span className={css.textoRoxo}>Curso: </span>Técnico em
                        eletromecânica</p>
                    <p className={css.textoPreto}><span className={css.textoRoxo}>Ano: </span>2023 e 2024</p>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <img src="/carrossel5.png" className="d-block imgs" alt="" style={{borderRadius: "10px", width: "70%"}}/>
                    </div>
                </div>
                <div className="carousel-item">
                    <p className={css.textoPreto}><span className={css.textoRoxo}>Curso: </span>Vendas</p>
                    <p className={css.textoPreto}><span className={css.textoRoxo}>Ano: </span>2023 e 2024</p>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <img src="/carrossel6.png" className="d-block imgs" alt="" style={{borderRadius: "10px", width: "70%"}}/>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="prev" style={{position: 'absolute', left: '-150px'}}>
                        <span aria-hidden="true" style={{
                            backgroundColor: '#6A3CF7',
                            borderRadius: '360px',
                            padding: '10px',
                            width: '80px',
                            height: '80px',
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }}><i
                            className="fa-solid fa-arrow-left" style={{fontSize: "40px"}}></i></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="next" style={{position: 'absolute', right: '-150px'}}>
                        <span aria-hidden="true" style={{
                            backgroundColor: '#6A3CF7',
                            borderRadius: '360px',
                            padding: '10px',
                            width: '80px',
                            height: '80px',
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }}><i
                            className="fa-solid fa-arrow-right" style={{fontSize: "40px"}}></i></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}