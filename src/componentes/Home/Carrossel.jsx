export default function Carrossel(){
    return (
        <div id="carouselExample" className="carousel slide" style={{width: '65%', display: 'block', margin: '0 auto'}}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/carrossel1.png" className="d-block w-100 imgs" alt=""/>
                </div>
                <div className="carousel-item">
                    <img src="/carrossel2.png" className="d-block w-100 imgs" alt=""/>
                </div>
                <div className="carousel-item">
                    <img src="/carrossel3.png" className="d-block w-100 imgs" alt=""/>
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