import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

function Service(props) {
    const [text,setText] = useState({title:[],content:[]})
    useEffect(()=>{
        if (props.lang=="en") {
            setText({
                title:["Our expertise","Showcase site","E-commerce","Web application","Native application","Business tool","Data annotation"],
                content:[
                    "Allowing you to highlight your products, your services, your realizations and much more, a professional showcase is essential to optimize your business.",
                    "Selling online is an excellent way for several businesses to grow and earn more through a faster buying process.",
                    "We develop websites and much more efficient web applications to facilitate the communication and information exchange. Updates will be centrally applied.",
                    "We also develop any application for a particular device or a specific mobile operating system such as Apple iOS or Android OS.",
                    "Using the appropriate tools help your business grow faster and help you manage your work, for a best productivity. ",
                    "We offer high-quality data annotation services to help your machine learning solution or application to be more accurate and relevant. We provide data annotation customized to your machine learning needs. "
                ]
            })
        } else {
            setText({
                title:["Notre expertise","Site vitrine","E-commerce","Application web","Application native","Outil d'affaires","Annotation de données"],
                content:[
                    "Vous permettant de mettre en valeur vos produits, vos services, vos réalisations et bien encore plus, un site vitrine professionnel est essentiel pour optimiser votre business.",
                    "La vente en ligne est une excellente manière de développer ses projets et de gagner plus grâce à un processus d'achat plus rapide.",
                    "Nous développons des sites web et des applications web plus performantes pour faciliter la communication et l'échange d'informations. Des mises à jour seront effectuées.",
                    "Nous développons également des applications pour un appareil ou un système d'exploitation mobile comme Apple iOS ou Android OS.",
                    "Utiliser l'outil de développement web approprié améliore la croissance de votre business et vous aide à gérer vos différentes tâches pour une meilleure productivité.",
                    "Nous offrons des services d'annotation de haute qualité afin d'optimiser votre apprentissage automatique ou votre application pour une meilleure précision et pertinence."

                ]
            })
        }

    },[props.lang])
    return(
        <div class="service p-4">
                <div class="">
                    <div class="mb-4">
                        <p className="text-center section-title fs-3 h3">{text.title[0]}</p>
                    </div>
                    <div class="row d-flex justify-content-evenly">
                        
                        <div class="card col-md-3 d-flex align-items-stretch m-1 p-1" data-aos="zoom-in">
                            <div class="icon-box icon-box-pink">
                            <div class="icon"><i class="bx bxl-dribbble"></i></div>
                            <h5 class="title text-center"><Link to="/development">{text.title[1]}</Link></h5>
                            <p class="description text-center">{text.content[0]}</p>
                            </div>
                        </div>

                        <div class="card col-md-4 d-flex align-items-stretch m-1 p-1" data-aos="zoom-in">
                            <div class="icon-box icon-box-pink">
                            <div class="icon"><i class="bx bxl-dribbble"></i></div>
                            <h5 class="title text-center"><Link to="/development">{text.title[3]}</Link></h5>
                            <p class="description text-center">{text.content[2]}</p>
                            </div>
                        </div>

                        <div class="card col-md-3 d-flex align-items-stretch m-1 p-1"  data-aos="zoom-in">
                            <div class="icon-box icon-box-pink">
                            <div class="icon"><i class="bx bxl-dribbble"></i></div>
                            <h5 class="title text-center"><Link to="/development">{text.title[6]}</Link></h5>
                            <p class="description text-center">{text.content[5]}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="mt-5">
                    <div class="row d-flex justify-content-evenly">
                        <div class="card col-md-3 d-flex align-items-stretch m-1 p-1" data-aos="zoom-in">
                            <div class="icon-box icon-box-pink">
                            <div class="icon"><i class="bx bxl-dribbble"></i></div>
                            <h5 class="title text-center"><Link to="/development">{text.title[4]}</Link></h5>
                            <p class="description text-center">{text.content[3]}</p>
                            </div>
                        </div>

                        <div class="card col-md-4 d-flex align-items-stretch m-1 p-1" data-aos="zoom-in">
                            <div class="icon-box icon-box-pink">
                            <div class="icon"><i class="bx bxl-dribbble"></i></div>
                            <h5 class="title text-center"><Link to="/development">{text.title[5]}</Link></h5>
                            <p class="description text-center">{text.content[4]}</p>
                            </div>
                        </div>

                        <div class="card col-md-3 d-flex align-items-stretch m-1 p-1" data-aos="zoom-in">
                            <div class="icon-box icon-box-pink">
                            <div class="icon"><i class="bx bxl-dribbble"></i></div>
                            <h5 class="title text-center"><Link to="/annotation">{text.title[2]}</Link></h5>
                            <p class="description text-center">{text.content[1]}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Service