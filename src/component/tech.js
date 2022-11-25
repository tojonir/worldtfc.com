import { useEffect, useState } from "react"

function Tech(props) {
    const [text,setText] = useState()
    useEffect(()=>{
        if (props.lang=="en") {
            setText("You are free to choose your technology, programming language,databases and plateform for your application")
        } else {
            setText("Vous êtes libre de choisir votre technologie, langage de programmation, bases de données et plateforme pour votre application")
        }
    },[props.lang])
    return(
        <div className="p-5">
            <p className="fs-3 section-title text-center h3">Technology</p>
            <p className="text-center">{text}</p>

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="d-flex justify-content-evenly tech-container">
                            <img src={`${process.env.PUBLIC_URL}/img/py.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/img/c++.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/img/kotlin.png`}></img>
                        </div>    
                    </div>
                    <div class="carousel-item">
                        <div className="d-flex justify-content-evenly tech-container">
                            <img src={`${process.env.PUBLIC_URL}/img/html.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/img/css.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/img/js.png`}></img>
                        </div>  
                    </div>
                    <div class="carousel-item">
                        <div className="d-flex justify-content-evenly tech-container">
                            <img src={`${process.env.PUBLIC_URL}/img/react.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/img/vue.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/img/laravel.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/img/angular.png`}></img>
                        </div>  
                    </div>

                    <div class="carousel-item">
                        <div className="d-flex justify-content-evenly tech-container">
                            <img src={`${process.env.PUBLIC_URL}/img/win.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/img/android.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/img/linux.png`}></img>
                        </div>  
                    </div>

                    <div class="carousel-item">
                        <div className="d-flex justify-content-evenly tech-container">
                            <img src={`${process.env.PUBLIC_URL}/img/chrome.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/img/opera.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/img/edge.png`}></img>
                        </div>  
                    </div>

                    <div class="carousel-item">
                        <div className="d-flex justify-content-evenly tech-container">
                            <img src={`${process.env.PUBLIC_URL}/img/mysql.png`}></img>
                            <img src={`${process.env.PUBLIC_URL}/img/mongodb.png`}></img>
                        </div>  
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </div>
        
    )
}

export default Tech