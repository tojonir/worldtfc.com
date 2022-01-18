import { useEffect, useState } from "react"
import {Link, useRouteMatch} from "react-router-dom"

function Footer(props) {
    const [text,setText] = useState([])
    useEffect(()=>{
        if (props.lang=="en") {
            setText(["Useful Links","Home","About us","Data annotation","Software development","Our services"])
        } else {
            setText(["Liens utiles","Acceuil","A Propos","Annotation de donne","Creation logiciel","Notre service"])
        }
    },[props.lang])
    return(
        <div class="mt-5 footer pt-5">
            <div class="container">
                <div class="row d-flex justify-content-between">

                    <div class="col-lg-3 col-md-6 d-sm-flex justify-content-sm-center
">
                        <div class="footer-info">
                        <h3 className="footer-text">World TFC</h3>
                        <p className="footer-text">
                            10 bis Lazaina <br/>
                            Anosy Avaratra, Antananrivo<br/><br/>
                            <strong>Phone:</strong> +261 34 09 112 78<br/>
                            <strong>Email:</strong> contact@worldtfc.com<br/>
                        </p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                    <h4 className="footer-text">{text[0]}</h4>
                    <ul>
                        <li class="footer-link"> <Link to={`/${props.lang}/home`}>{text[1]}</Link></li>
                        <li class="footer-link"><Link to={`/${props.lang}/about`}>{text[2]}</Link></li>
                        <li class="footer-link"><Link to={`/${props.lang}/annotation`}>{text[3]}</Link></li>
                        <li class="footer-link"><Link to={`/${props.lang}/development`}>{text[4]}</Link></li>
                    </ul>
                </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                    <h4 className="footer-text">{text[5]}</h4>
                    <ul>
                    <li class="footer-link">Web Design</li>
                    <li class="footer-link">Web Development</li>
                    <li class="footer-link">Native application</li>
                    <li class="footer-link">Data annotation</li>
                    </ul>
                </div>

                </div>
            </div>

            <div class="container">
                <div class="text-center">
                    &copy; Copyright <strong><span>World TFC</span></strong>. All Rights Reserved
                </div>
                <div class="text-center">
                    Designed by <a href="https://worldtfc.com/">World TFC</a>
                </div>
            </div>
            </div>
    )
}


export default Footer