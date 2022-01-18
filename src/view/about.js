import React, { useEffect, useState } from "react"
import Nav from "../component/nav"
import Footer from "../component/footer"

function About(props) {
    const [text,setText] = useState([])
    useEffect(()=>{
        if (props.lang=="en") {
            setText([
                "About us",
                "World TFC Story",
                "In 2020, 5 labelers and 2 developers built a great software development team. Then, they created World TFC in Madagascar in 2021. Today, World TFC is a team of experts of data processing and annotation for Artificial Intelligence (AI) and Machine learning. We also develop all personalized software to perform any activity. Knowing that AI and Machine learning bring innovations, our vision is to help humans improving their effectiveness and autonomy through AI. Contact us to be your trusted BPO partner.",
                "Name",
                "Founded"
            
            ])
        } else {
            setText([
                "À propos de nous",
                "Histoire du World TFC ",
                "En 2020, 5 étiqueteurs de données et 2 développeurs ont fait équipe pour développer des logiciels. Ensuite, ils ont créé World TFC à Madagascar en 2021. Actuellement, World TFC est une équipe d'experts en traitement d'informations et en annotation de données pour les projets d'Intelligence Artificielle (IA) et d'Apprentissage automatique. Aussi, nous développons des logiciels personnalisés pour une activité spécifique. Savoir que l'IA et l'Apprentissage automatique sont des projets innovants, notre vision consiste à aider l'humanité à améliorer leur efficacité et autonomie grâce à l'IA. Contactez-nous pour devenir votre fidèle partenaire en BPO.",
                "Nom",
                "Date de création"
            ])
        }
    },[props.lang])
    return(
        <React.StrictMode>
            <div className="about" 
                style={{
                    background:`url('${process.env.PUBLIC_URL}/img/bg.png')`,
                    backgroundRepeat:"no-repeat",
                    backgroundPositionX:"right",
                    backgroundSize:"cover"
                }} data-aos="zoom-out"> 
                <Nav lang={props.lang}></Nav>
                <div className="d-flex flex-column justify-content-center w-100 h-100 text-center p-5">
                    <p className="fs-2 text-light" data-aos="fade-up">World TFC</p>
                    <p data-aos="fade-up">{text[0]}</p>
                </div>
                
            </div>
            <div className="p-5">
                <h1 className="section-title text-start">{text[1]}</h1>
                <p className="text-start col-md-8">{text[2]}</p>

            </div>
            <div className="row d-flex justify-content-evenly p-3">
                <div className="col-md-4 text-center p-3">
                    <img className="w-75" src="/img/logo.png"></img>
                </div>
                <div className="col-md-4 d-flex justify-content-center p-3">  
                    <div className="mycard p-4 d-flex flex-row">
                        <div className="p-4">
                            <p><span className="fs-5">{text[3]}: </span> World TFC</p>
                            <p><span className="fs-5">{text[4]}: </span> 16/03/2021</p>
                            <p><span className="fs-5">RCS: </span>2021 B 00310</p>
                            <p><span className="fs-5">NIF: </span>2005485009</p>
                            <p><span className="fs-5">STAT: </span>62011112021010326</p>
                        </div>

                    </div>

                </div>
            </div>

            
            <Footer lang={props.lang}></Footer>
        </React.StrictMode>
        
    )
}

export default About