import React, { useEffect, useState } from "react"
import Nav from "../component/nav"
import Service from "../component/service"
import Tech from "../component/tech"
import Contact from "../component/contact"
import Process from "../component/process"
import Footer from "../component/footer"
import { Link } from "react-router-dom"

function Home(props) {
    const [text,setText] = useState({welcome:[],about:[]})
    useEffect(()=>{
        if (props.lang=="en") {
            setText({
                welcome:[
                    "We build technology for success",
                    "We are a team of technical specialists, developers and labeler.",
                    "Contact us"
                ],
                about:[
                    "Who we are?",
                    "We are a team of technical specialists, developers and designers. Knowing that a perfect platform is essential to scale up your business, we use our skills for web development and content strategy to help you achieve your growth goals. We collaborate with businesses across a wide range of industries. Our success is evaluated by your success."
                ]
            })
        } else {
            setText({
                welcome:[
                    "We build technology for success",
                    "Nous sommes une équipe d'experts techniques, de développeurs web et étiqueteur",
                    "Contacter nous"
                ],
                about:[
                    "Qui nous sommes?",
                    "Nous sommes une équipe d'experts techniques, de développeurs web et de designers. Nous savons qu'une plate-forme idéale est essentielle pour assurer l'avancement de votre projet. Alors nous utilisons nos compétences pour le développement web et la stratégie de contenu, afin de vous aider à atteindre vos objectifs de croissance économique. Nous collaborons avec toute entreprise de tout secteur d'activité. Notre succès est évalué par votre succès."
                ]
            })
            
        }
    },[props.lang])
    return(
        <React.StrictMode>
            <Nav lang={props.lang}></Nav>
            <div class="p-5">
                <div class="row">
                    <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <div className="welcome-text " data-aos="fade-up">
                        <h1>{text.welcome[0]}</h1>
                        <h4>{text.welcome[1]}</h4>
                        <a href="#contact" className="btn btn-outline-warning btn-sm col-md-5">{text.welcome[2]}</a>
                    </div>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
                        <img data-aos="fade-left" src="../img/welcome.png" class="img-fluid w-75 welcome-image" alt=""/>
                    </div>
                </div>
            </div>
            <div className="mt-5 p-5 text-about d-flex flex-column justify-content-center align-items-center">
                <h3 className="text-center section-title">{text.about[0]}</h3>
                <div className="col-md-10">
                    <p className="text-center w-100">
                        {text.about[1]}
                    </p>
                </div>
            </div>
            <Service lang={props.lang}></Service>
            <Process lang={props.lang}></Process>
            <Tech lang={props.lang}></Tech>
            <Contact lang={props.lang}></Contact>
            <Footer lang={props.lang}></Footer>
        </React.StrictMode>
    )
}

export default Home