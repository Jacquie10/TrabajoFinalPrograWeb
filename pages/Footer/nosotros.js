const NosotrosPag = () => {
    return <div>
        <h2 className="mt-2">Integrantes Grupo San Valentín</h2>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF5n4wTJzCToA/profile-displayphoto-shrink_800_800/0/1619389595255?e=1650499200&v=beta&t=Zx8RVds_EbPT1P5egsifR_36UWo27tBz4EAv3l0KPqc" class="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Jacquie Dueñas</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQE8MBwhLSL_rw/profile-displayphoto-shrink_800_800/0/1620424104448?e=1650499200&v=beta&t=yhpN5MKh7FLuv7sB6Lpj446JFTd4NzWdjRahRvZh8Nw" class="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Alisson Gallardo</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHmf-k6Ul-ibw/profile-displayphoto-shrink_800_800/0/1619368246192?e=1650499200&v=beta&t=EP3chllPiN4X8V5eW3TawsrXyMrGQnW551-zFAvoiq8" class="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Jhon Ipanaque</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFbbcKw9V3gSQ/profile-displayphoto-shrink_800_800/0/1619375260534?e=1650499200&v=beta&t=GouJK4tPE1_XxvlYlsu6w57wsNZ5wEr1Kz7PQlnhfJg" class="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Rodrigo Loli</h5>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        <div className="mt-4">
            <a href="/" class="btn btn-primary" role="button" >Regresar</a>

        </div>

    </div>
}
export default NosotrosPag