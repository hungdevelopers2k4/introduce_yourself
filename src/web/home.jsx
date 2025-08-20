import Navbar from "../components/navbar.jsx"
import Header from "./header.jsx"
import Comapany from "./companies.jsx"
import About from './about.jsx'
import Skill from './skill.jsx'
import My_projects from "./my_projects.jsx"
import My_workflow from "./my_workflow.jsx"
import Client from "./clients"
import Contact from "./Contact.jsx"
import Cooperate from "./cooperate.jsx"
import Footer from "../components/Footer.jsx"
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