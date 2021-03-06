import React, { useEffect, useState } from "react"
import Nav from "../component/nav"
import Contact from "../component/contact"
import Footer from "../component/footer"

function Annot(props) {
    const [text,setText] = useState({title:[],content:["","","","",[],[],[]]})
    useEffect(()=>{
        if (props.lang == "en") {
            setText({
                title:[
                    "Annotation services",
                    "Professional labeler",
                    "Quality assurance",
                    "Flexibility",
                    "Categorization, transcription",
                    "Segmentation"

                ],
                content:[
                    "2D Bounding box, Semantic segmentation, Instance segmentation, Image and video classification, Text processing and Audio processing",
                    "Even if data annotation process is time-consuming and tough, our professional labeler is perseverant and thorough in his work. Moreover, he is engaged to assure privacy and data security.",
                    "Beeing a high performing and productive team, we guarantee quality assurance for your website or application before it becomes available to real users. We provide data of a high-quality, accurate, revelant and consistent.",
                    "We can provide personalized annotation tools and services according to customer requirements. You are able tell us directly about your labeling rules and if you want to make some changes.",
                    [
                        "Categorization of data is based on a predetermined list of categories, and transcription is an important first step in data analysis.",
                        "We make image and video annotation and transcription to improve your computer vision and pattern recognition solutions with high-quality annotation of data. ",
                        "Furthermore, we categorize and annotate sentiment and intent in your text, voice, image and video data with quality human analysis. "
                    ],
                    [
                        "If your project requires image annotation, we can collect, create and annotate the data at the pixel perfect level it needs.",
                        "We use semantic segmentation as a powerful model to improve computer vision techniques. This process allows the identification of a single category of multiple objects. It provides accurate results for machines to understand complex images.",
                        "We also use instance segmentation which is a technique identifying the boundaries of each object appearing in an image at the detailed pixel level. It ensures accurate localization essential for detailed scene analysis."
                    ],
                    [
                        "Image annotation is an important step to create computer vision models. We use top annotation tools for labeling the two-dimensional (2D) and three-dimensional (3D) positions on 2D and 3D images. ",
                        "Our 2D bounding box annotation service aims to detect a precise object to make it fully recognizable through computer vision by the AI and Machine learning models, and to help in object classification.",
                        "3D bounding box makes the geometric appearance of an object easy to interact with and allows us to know its dimension, position and orientation. AI and Machine learning models can accurately perform object detection and recognition."
                    ]
                ]})
        } else {
            setText({
                title:[
                    "Services d'annotation",
                    "??tiqueteur professionnelle",
                    "Assurance qualit??",
                    "La flexibilit??",
                    "Cat??gorisation & Transcription",
                    "Segmentation"

                    
                ],
                content:[
                    "2D Bounding box, Segmentation s??mantique, Instance segmentation, Image and video classification, Text processing and Audio processing",
                    "M??me si le processus d'annotation de donn??es est long et difficile, notre ??tiqueteur de donn??es professionnel est non seulement pers??v??rant et minutieux dans son travail mais aussi il assure l'intimit?? et la s??curit?? des donn??es.",
                    "??tant une ??quipe performante et active, nous garantissons la meilleure qualit?? de votre site web ou application, avant son lancement. Nous traitons des donn??es de haute qualit??, pr??cises, compl??tes et consistantes.",
                    "Nous pouvons fournir des outils et des services d'annotation personnalis??s ?? la demande du client. Vous pouvez nous parler de vos conditions sur l'??tiquetage et nous dire si vous voulez changer certaines choses.",
                    [
                        "La cat??gorisation de donn??es se base sur une liste pr??d??termin??e de cat??gories. La transcription est une premi??re ??tape importante dans l'analyse des donn??es.",
                        "Nous effectuons l'annotation d'image et de vid??o, ainsi que la transcription pour am??liorer la vision par ordinateur et les solutions de reconnaissance d'image avec une tr??s bonne qualit?? d'annotation de donn??es. ",
                        "De plus, nous proc??dons ?? la cat??gorisation et annotation de sentiments et intention dans vos donn??es de textes, voix, image et vid??os avec une analyse de qualit?? performante. "
                    ],
                    [
                        "Si votre projet demande une annotation d'image, nous pouvons collecter, cr??er et annotater vos donn??es au parfait niveau de pixel.",
                        "Nous utilisons la segmentation s??mantique comme un mod??le puissant pour am??liorer les techniques de vision par ordinateur. Ce processus permet l'identification d'une seule cat??gorie pour plusieurs objets et donne des r??sultats appropri??s sur la compr??hension des images complexes par les machines.",
                        "Nous utilisons ??galement la segmentation d'instance pour identifier les limites de chaque objet sur une image ?? un niveau d??taill?? de pixel. Cette technique assure une localisation pr??cise qui est utile pour l'analyse d??taill??e de sc??ne."
                    ],
                    [
                        "L'annotation d'image est une importante ??tape de cr??ation des mod??les de vision de l'ordinateur. Nous nous servons d'outils d'annotation pour utiliser d'excellents outils d'annotation pour labeller les positions 2D et 3D sur des images en 2D ou 3D.",
                        "Notre service d'annotation de bo??te englobante 2D vise ?? d??tecter un objet pr??cis pour le rendre compl??tement reconnaissable dans la vision d'ordinateur par des mod??les d'IA et d'apprentissage automatique, et pour l'aider dans la classification d'objets.",
                        "La bo??te englobante 3D facilite la manipulation de l'apparence g??om??trique de l'objet et nous permet de conna??tre sa dimension, sa position et son orientation. Les mod??les d'IA et d'apprentissage automatique peuvent ex??cuter avec pr??cision la d??tection et la reconnaissance de l'objet."
                    ]
                ]})
        }
    },[props.lang])

    return(
        <React.StrictMode>
            <div className="annot" 
                style={{
                    background:`url('${process.env.PUBLIC_URL}/img/bounding.png')`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"100% 100%"
                }} data-aos="zoom-out">
                <Nav lang={props.lang} className="mb-5"></Nav>
                <div className="d-flex flex-column justify-content-center w-100 h-75 text-center p-5 mt-5">
                    <div>
                        <div data-aos="fade-up" className="annot-welcom-container d-inline-block p-4">
                            <p>{text.title[0]}</p>
                            <button className="" ><a href="#contact">request a demo</a></button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <p className="text-center h1 m-4 section-title">{text.title[0]}</p>
            <p className="text-center m-4">{text.content[0]}</p>
            <div className="row d-flex justify-content-evenly m-4 mb-5">
                <div className="card col-md-3 bg-secondary m-3" data-aos="flip-left">
                    <p className="text-center text-light fs-4">{text.title[1]}</p>
                    <p className="text-center"> {text.content[1]}</p>
                </div>

                <div className="card col-md-3 bg-secondary m-3" data-aos="flip-left">
                    <p className="text-center text-light fs-4">{text.title[2]}</p>
                    <p className="text-center">{text.content[2]}</p>
                </div>

                <div className="card col-md-3 bg-secondary m-3" data-aos="flip-left">
                    <p className="text-center text-light fs-4">{text.title[3]}</p>
                    <p className="text-center"> {text.content[3]}</p>
                </div>

            </div>
            <div className="row d-flex justify-content-evenly m-3 mt-5 bg-sep">
                <div className="col-md-4 p-5" data-aos="fade-left">
                    <img className="w-100"  src="/img/categ.PNG"></img>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center" data-aos="fade-left">
                    <p className="text-light h1">{text.title[4]}</p>
                    <p>{text.content[4][0]}</p>
                    <p>{text.content[4][1]}</p>
                    <p>{text.content[4][2]}</p>
                    <p>supported data
                        <img className="m-2" src="/icon/image.png" title="image"></img>
                        <img className="m-2" src="/icon/audio.png" title="audio"></img>
                        <img className="m-2" src="/icon/video.png" title="video"></img>
                    </p>
                </div>
                
            </div>

            <div className="row d-flex justify-content-evenly m-3 mt-5">
                
                <div className="col-md-6 d-flex flex-column justify-content-center" data-aos="fade-right">
                    <p className="text-light h1">{text.title[5]}</p>
                    <p>{text.content[5][0]}</p>
                    <p>{text.content[5][1]}</p>
                    <p>{text.content[5][2]}</p>
                    <p>supported data
                        <img className="m-2" src="/icon/image.png" title="image"></img>
                        <img className="m-2" src="/icon/audio.png" title="audio"></img>
                        <img className="m-2" src="/icon/video.png" title="video"></img>
                    </p>
                </div>

                <div className="col-md-4 p-5" data-aos="fade-right">
                    <img className="w-100"  src="/img/segm.png"></img>
                </div>
                
            </div>

            <div className="row d-flex justify-content-evenly m-3 mt-5 bg-sep">
                <div className="col-md-4 p-5" data-aos="fade-left">
                    <img className="w-100"  src="/img/bounding.png"></img>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center" data-aos="fade-left">
                    <p className="text-light h1">2d, 3d box</p>
                    <p>{text.content[6][0]}</p>
                    <p>{text.content[6][1]}</p>
                    <p>{text.content[6][2]}</p>
                    <p>supported data
                        <img className="m-2" src="/icon/image.png" title="image"></img>
                        <img className="m-2" src="/icon/audio.png" title="audio"></img>
                        <img className="m-2" src="/icon/video.png" title="video"></img>
                    </p>
                </div>
                
            </div>
            <Contact></Contact>
            <Footer lang={props.lang}></Footer>
        </React.StrictMode>
        
    )
}

export default Annot