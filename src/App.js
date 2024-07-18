import Contact from "./Components/Contact";
import FAQS from "./Components/FAQS";
import FooterSection from "./Components/FooterSection";
import LogoSection from "./Components/LogoSection";
import Offers from "./Components/Offers";
import Subscribers from "./Components/Subscribers";
import Users from "./Components/Users";
import Works from "./Components/Works";
import Header from "./Components/header/Header";
import './GlobalStyle.scss';
import './Responsive.scss';
function App() {
  return (
    <>
    <Header/>
    <LogoSection/>
    <Users/>
    <Works/>
    <Subscribers/>
    <Contact/>
    <FAQS/>
    <Offers/>
    <FooterSection/>
    </>
  );
}

export default App;
