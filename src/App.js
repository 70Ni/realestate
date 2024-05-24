import logo from "./logo.svg";
import "./App.css";
import Banner from "./Components/Banners/Banner";
import Counties from "./Components/Cards/CountryCards/CountryCard/Counties";
import CountrySection from "./Components/Cards/CountryCards/CountrySection";
import Property from "./Components/Cards/PropertyCards/PropertyCards/Property";
import PropertySection from "./Components/Cards/PropertyCards/PropertySections/PropertySection";
import Footer from "./Components/Footer/Footer";
import BackImg02 from "./Components/Images/Banner02.png";
import BannerImg from "./Components/Images/BannerImage.png";
import Search from "./Components/Search/Search";
import Accordion from "./Components/Accordion/Accordion";
const search = "search";

function App() {
  return (
    <div className="App">
      <div className="Hero-wrapper">
        <Banner backImg={BannerImg} action={search}  />
         <CountrySection />
         <PropertySection />
        {/* <Banner backImg={ BackImg02 } /> */}
        {/* <Footer />  */}
      </div>
    </div>
  );
}

export default App;
