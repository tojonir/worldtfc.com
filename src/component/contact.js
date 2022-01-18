import { Modal } from "bootstrap"
import { useEffect, useState } from "react"

function Contact(props) {
    const [text,setText] = useState([])
    const [name,setName] = useState("")
    const [mail,setMail] = useState("")
    const [message,setMessage] = useState("")
    useEffect(()=>{
        if (props.lang=="en") {
            setText([
                "Name",
                "Mesage sent! We will get back to you soon!",
                "Thanks for your mail"
            ])
        }else{
            setText([
                "Nom",
                "Message envoyé ! Nous reviendrons vers vous bientôt!",
                "Merci pour votre mail"
            ])
        }
    },[props.lang])

    const sendMail = ()=>{
        if (name!="" && mail!="" && message!="") {
            let data = "name=" + name + ",mail=" + mail + ",message=" + message
            let a = document.createElement("a")
            a.setAttribute("href","mailto:contact@worldtfc.com?subject=message from site&body="+ data)
            a.click()
            let modal = new Modal(document.getElementById("thanksModal"))
            modal.show()
        }else{
            alert("Provide required data!")
        }
        
    }
    
    return(
        <div id="contact" className="d-sm-flex flex-sm-column d-md-flex flex-md-row justify-content-evenly w-100 mt-5">
            <div className="col-lg-4 p-4">
                <div>
                    <p><img src="/icon/location.png" alt="..."></img>
                    Location:<br/> 10 Bis Anosy Avaratra</p> 
                </div>
                <div className="">
                    <p><img src="/icon/mail.png" alt="..."></img>
                    Email:<br/> contact@worldtfc.com</p> 
                </div>
                <div>
                    <p><img src="/icon/phone.png" alt="..."></img>
                    Call:<br/> +261 34 09 112 78</p> 
                </div>
            </div>

            <div className="col-lg-4 p-4">
                <div className="d-flex flex-column">
                    <div className="d-md-flex flex-md-row justify-content-between mb-4">
                        <input value={name} onChange={(e)=>setName(e.target.value)} className="input-contact col-sm-4 text-light" type="text" placeholder={text[0]}></input>
                        <input value={mail} onChange={(e)=>setMail(e.target.value)} className="input-contact col-sm-6 text-light" type="text" placeholder="email"></input>  
                    </div>
                    <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="mb-4 text-contact text-light" placeholder="message...."></textarea> 
                    <button className="btn btn-sm btn-primary" onClick={()=>sendMail()}>Send</button>
                </div>
                <div className="d-flex w-100 justify-content-evenly mt-4">
                    <a target="blank" href="https://web.facebook.com/World-TFC-100269498787246"><img className="icon-contact" alt="..." src="/icon/fb.png"></img></a>
                    <a target="blank" href="https://www.linkedin.com/in/world-tfc-262272207/"><img className="icon-contact" alt="..." src="/icon/linkedin.png"></img></a>
                    <a target="blank" href="https://join.skype.com/invite/DvuDPdWRhER8"><img className="icon-contact" alt="..." src="/icon/skype.png"></img></a>
                </div>
            </div>

            <div class="modal fade" id="thanksModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{text[2]}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {text[1]}
                    </div>
                    <div class="modal-footer">
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact