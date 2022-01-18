import { useEffect, useState } from "react"

function Process(props) {
    const [text,setText] = useState({title:"",content:[]})
    useEffect(()=>{
        if (props.lang=="en") {
            setText({
                title:"How to work with us",
                content:[
                    "A pre-application meeting is required prior to plannification and analysis of the purpose of the application or the website, who will use it and what information is useful to the user.",
                    "We will build its design and development processes, using the appropriate type of application or website layout and the design layout.",
                    "A testing process will be useful to assure that the application or the website is responsive and compatible with the mobile operating system before launching."
                ]
            })
        } else {
            setText({
                title:"Comment collaborer avec nous",
                content:[
                    "Une rencontre au préalable permettra de planifier et d'analyser le but de l'application ou du site web à créer, pour savoir qui sera l'utilisateur et quelles informations lui seront utiles.",
                    "Nous procéderons à la conception de son design et à son développement, en utilisant la configuration appropriée pour l'application ou le site web ainsi que pour son design. ",
                    "Un test sera nécessaire afin d'assurer que l'application ou le site web marche correctement et est compatible avec le système d'exploitation mobile choisi avant de le lancement."
                ]
            })
        }
    },[props.lang])
    return(
        <div className="mt-5">
            <p className="fs-3 h3 section-title text-center">{text.title}</p>

            <div className="row mt-4 p-5 d-flex justify-content-evenly">
                
                <div className="step step-1 col-md-3 p-4 m-3" data-aos="fade-right" data-aos-offset="100">
                    <div className="d-flex justify-content-center">
                        <p className="fs-3 step-index step-index-1">1</p>
                    </div>
                    <p>{text.content[0]}</p>
                </div>

                <div className="step step-2 col-md-3 p-4 m-3" data-aos="fade-right" data-aos-offset="200">
                    <div className="d-flex justify-content-center">
                        <p className="fs-3 step-index step-index-2">2</p>
                    </div>
                    <p>{text.content[1]}</p>
                </div>

                <div className="step step-3 col-md-3 p-4 m-3" data-aos="fade-right" data-aos-offset="300">
                    <div className="d-flex justify-content-center">
                        <p className="fs-3 step-index step-index-3">3</p>
                    </div>
                    <p>{text.content[2]}</p>
                </div>

            </div>
            

        </div>
    )
}

export default Process