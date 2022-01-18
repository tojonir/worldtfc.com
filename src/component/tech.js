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
                            <img src="/img/py.png"></img>
                            <img src="/img/c++.png"></img>
                            <img src="/img/kotlin.png"></img>
                        </div>    
                    </div>
                    <div class="carousel-item">
                        <div className="d-flex justify-content-evenly tech-container">
                            <img src="/img/html.png"></img>
                            <img src="/img/css.png"></img>
                            <img src="/img/js.png"></img>
                        </div>  
                    </div>
                    <div class="carousel-item">
                        <div className="d-flex justify-content-evenly tech-container">
                            <img src="/img/react.png"></img>
                            <img src="/img/vue.png"></img>
                            <img src="/img/laravel.png"></img>
                            <img src="/img/angular.png"></img>
                        </div>  
                    </div>

                    <div class="carousel-item">
                        <div className="d-flex justify-content-evenly tech-container">
                            <img src="/img/win.png"></img>
                            <img src="/img/android.png"></img>
                            <img src="/img/linux.png"></img>
                        </div>  
                    </div>

                    <div class="carousel-item">
                        <div className="d-flex justify-content-evenly tech-container">
                            <img src="/img/chrome.png"></img>
                            <img src="/img/opera.png"></img>
                            <img src="/img/edge.png"></img>
                        </div>  
                    </div>

                    <div class="carousel-item">
                        <div className="d-flex justify-content-evenly tech-container">
                            <img src="/img/mysql.png"></img>
                            <img src="/img/mongodb.png"></img>
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