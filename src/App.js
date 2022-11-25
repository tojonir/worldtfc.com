import { useEffect } from "react"
import Home from "./view/home"
import About from "./view/about"
import Dev from "./view/dev"
import Annot from "./view/annot"
import AOS from "aos/dist/aos"
import { Route , BrowserRouter, useParams, Redirect, Link} from "react-router-dom"

function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, [])
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/">
            <Redirect to="en/home"></Redirect>
          </Route>
          <Route path="/:lang/:nav">
              <RouteHandler></RouteHandler>
          </Route>
        </div>
    </BrowserRouter>
    
  )
}

function RouteHandler() {
  let {lang,nav} = useParams()
  if (lang=="en" || lang=="fr") {
    if (nav=="home") {
      return(
        <Home lang={lang}></Home>
      )
    }else if (nav=="about") {
      return(
        <About lang={lang}></About>
      )
    }else if (nav=="annotation") {
      return(
        <Annot lang={lang}></Annot>
      )
    }else if (nav=="development") {
      return(
        <Dev lang={lang}></Dev>
      )
    } else {
      return(
        <div className="m-5">
          <p className="text-center fs-1 fw-bold">404</p>
          <p className="text-center">Page not found</p>
          <p className="text-center"><Link to="/en/home">Home</Link></p>
          
        </div>
      )
      
    }
  } else {

    return(
      <Redirect to="/en/home"></Redirect>
    )
    
  }
  
  
}

export default App;
