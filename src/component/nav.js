import { useEffect, useState } from "react"
import {Link, useRouteMatch} from "react-router-dom"

function Nav(props) {
    const {path,url} = useRouteMatch()
    const [text,setText] = useState([])

    useEffect(()=>{
        window.scrollTo(0,0)
        if (props.lang=="en") {
            setText(["Home","About us","Services","Data annotation","Software development"])
        } else {
            setText(["Acceuil","A Propos","Service","Annotation de donne","Creation logiciel"])
        }
    },[props.lang])
    return(
        <header className="position-sticky top-0">
            <nav class="navbar navbar-expand-md pt-4">
            <div class="container-fluid">
                <div class="d-flex w-100 justify-content-between">
                        <h3 className="brand">
                            <a href="/">World TFC</a>
                        </h3>
                        <div class="">
                            <input type="image" src="../img/hum.png" class="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation"/>
                        </div>
                </div>
                
                <div class="w-75 collapse navbar-collapse" id="navbarToggler">
                    <ul class="navbar-nav me-auto d-flex justify-content-between w-100">
                        <li class="nav-item text-center">
                            <Link className="nav-link" to={`/${props.lang}/home`}>{text[0]}</Link>                 
                        </li>
                        <li class="nav-item text-center">
                            <Link className="nav-link" to={`/${props.lang}/about`}>{text[1]}</Link>                 
                        </li>
                        <li class="nav-item text-center">
                            <div className="service-menu">
                                <Link className="nav-link ">{text[2]}</Link>
                                <div className="sub-menu">
                                    <div className="d-flex flex-column">
                                        <Link className="sub-menu-item" to={`/${props.lang}/annotation`}>{text[3]}</Link> 
                                        <Link className="sub-menu-item" to={`/${props.lang}/development`}>{text[4]}</Link> 
                                    </div>
                                </div>
                                
                            </div>
                        </li>
                        
                        <li class="nav-item d-flex align-items-center justify-content-center">
                            <Link to="/fr/home"><img className="flag" src={`${process.env.PUBLIC_URL}/img/fr.png`}></img></Link> 
                        </li>
                        <li class="nav-item text-center d-flex align-items-center justify-content-center">
                            <Link to="/en/home"><img className="flag" src={`${process.env.PUBLIC_URL}/img/en.png`}></img></Link>
                        </li>
                    </ul>
                </div>
                
                
            </div>
        </nav>
        </header>
    )
}

export default Nav