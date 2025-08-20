import Navbar from "../components/navbar"
import Header from "./header"
import Comapany from "./companies"
import About from './about'
import Skill from './skill'
import My_projects from "./my_projects"
import My_workflow from "./my_workflow"
import Client from "./clients"
import Contact from "./Contact"
import Cooperate from "./cooperate"
import Footer from "../components/Footer"
const home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Comapany/>
        <About/>
        <Skill/>
        <My_projects/>
        <My_workflow/>
        <Client/>
        <Contact/>
        <Cooperate/>
        <Footer/>
    </>
  )
}
export default home