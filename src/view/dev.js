import React, { useEffect, useState } from "react"
import Nav from "../component/nav"
import Contact from "../component/contact"
import Footer from "../component/footer"

function Dev(props) {
    const [text,setText] = useState({title:[],content:["",[],[],[]]})
    useEffect(()=>{
        if (props.lang == "en") {
            setText({
                title:[
                    "Do you have any project to develop?",
                    "Contact us today",
                    "Development services",
                    "World Web",
                    "Native application",
                    "Business tool"


                ],
                content:[
                    "Our web development services mainly concern Mobile application, Web application and Desktop application.",
                    [
                        "Thanks to the web, it is easier to get information, share and communicate. It is more important in time of crisis.",
                        "Website allows you to make a very good and strong impression for your projects, so it will help showcase your expertise.",
                        "Websites we create are protected against attacks, hackers and SPAM. They are created with 2 basic languages: French and English, in order to get a good positioning on the search engines."
                    ],
                    [
                        "We can create native mobile application development to meet your specific business needs.",
                        "We provide responsive, very fast, more secure and much more efficient native applications.",
                        "Applications we develop are build with programming languages and tools that are specific to the platform of your choice."
                    ],
                    [
                        "Communication tools, Social media marketing tools, Accounting tools, Project and task management tools, etc.",
                        "We operate with different business tools that are suitable for teamwork and collaboration you need to manage your business. ",
                        "It is efficient to use the appropriate tool in order to boost website views and to increase the relevance of marketing campaigns. "
                    ]
                ]
            })
        } else {
            setText({
                title:[
                    "Avez-vous un projet à développer?",
                    "Contactez-nous maintenant",
                    "Services de développement",
                    "Le monde du Web",
                    "Application native",
                    "Outil commercial"

                ],
                content:[
                    "Nos services de développement web concernent principalement l'application mobile, l'application web et l'application d'ordinateur.",
                    [
                        "Grâce au web, il est plus facile d'obtenir des informations, de partager et de communiquer. Il trouve plus d'importance en période de crises.",
                        "Un site web vous donne une très bonne et puissante impression de vos projets, alors il vous aidera à exposer votre expertise. ",
                        "Les sites web que nous développons sont protégés contre les attaques, les hackers et les SPAM. Ils sont créés en 2 langues: le français et l'anglais, pour être en bonne position sur les moteurs de recherche."
                    ],
                    [
                        "Nous pouvons développer une application native mobile qui correspond à vos besoins pour le business.",
                        "Nous vous offrons des applications natives qui sont délicates, plus sécurisées et plus efficaces, fonctionnant plus rapidement.",
                        "Les applications que nous concevons sont optimisées par des langages de programmation appropriés et des outils spécifiques au plate-forme de votre choix."
                    ],
                    [
                        "Outils de communication, outils de marketing sur les réseaux sociaux, outils comptables, outils de gestion de projets et de tâches, etc.",
                        "Nous exploitons différents outils commerciaux qui sont convenables au travail d'équipe et à la collaboration dont vous avez besoin pour gérer votre business. ",
                        "Il est efficace d'utiliser l'outil approprié afin de booster le nombre de vues du site web et d'augmenter la pertinence les campagnes de marketing. "
                    ]
                ]
            })
        }
    },[props.lang])
    return(
        <React.StrictMode>
            <div className="annot" 
                style={{
                    background:`url('${process.env.PUBLIC_URL}/img/code.jpeg')`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"100% 100%"
                }} data-aos="zoom-out">
                <Nav lang={props.lang}></Nav>
                <div className="d-flex flex-column justify-content-center w-100 h-75 text-center p-5 mt-5">
                    <div data-aos="fade-up" className="d-inline-block p-4">
                        <p className="text-light fs-1">{text.title[0]}</p>
                        <button className="btn btn-warning" ><a href="#contact">{text.title[1]}</a></button>
                    </div>
                    
                </div>
                
            </div>
            <p className="text-center h1 m-4 section-title mt-5"> {text.title[2]}</p>
            <p className="text-center m-4"> {text.content[0]} </p>
            <div className="row d-flex justify-content-evenly m-3 mt-5 bg-sep">
                <div className="col-md-4 p-5" data-aos="fade-left">
                    <img className="w-100"  src={`${process.env.PUBLIC_URL}/img/web.png`}></img>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center" data-aos="fade-left">
                    <p className="text-light h1">{text.title[3]}</p>
                    <p>{text.content[1][0]}</p>
                    <p>{text.content[1][1]}</p>
                    <p>{text.content[1][2]}</p>
                </div>
                
            </div>

            <div className="row d-flex justify-content-evenly m-3 mt-5">
                
                <div className="col-md-6 d-flex flex-column justify-content-center" data-aos="fade-right">
                    <p className="text-light h1">{text.title[4]}</p>
                    <p>{text.content[2][0]}</p>
                    <p>{text.content[2][1]}</p>
                    <p>{text.content[2][2]}</p>
                </div>

                <div className="col-md-4 p-5" data-aos="fade-right">
                    <img className="w-100"  src={`${process.env.PUBLIC_URL}/img/native.png`}></img>
                </div>
                
            </div>

            <div className="row d-flex justify-content-evenly m-3 mt-5 bg-sep">
                <div className="col-md-4 p-5" data-aos="fade-left">
                    <img className="w-100"  src={`${process.env.PUBLIC_URL}/img/business.jpg`}></img>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center" data-aos="fade-left">
                    <p className="text-light h1">{text.title[5]}</p>
                    <p>{text.content[3][0]}</p>
                    <p>{text.content[3][1]}</p>
                    <p>{text.content[3][2]}</p>    
                </div>
                
            </div>
            <Contact></Contact>
            <Footer lang={props.lang}></Footer>
        </React.StrictMode>
    )
}

export default Dev