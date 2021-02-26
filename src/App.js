import { React } from "react";
import LeftMain from "./components/MainContainer/LeftMain.jsx";
import Navdiv from "./components/NavContainer/Navdiv";
import RightMain from "./components/MainContainer/RightMain";
import Top from "./components/TopContainer/Topdiv";
import { Container} from "react-bootstrap";
import "./App.css";

function App(props) {
  const accordian = [
    "Search",
    "Browse",
    "Translation",
    "Quran",
    "Display Options",
  ];
  return (
    <div className="App">
      <Container className="ContainerApp">
        <Top></Top>
        <Navdiv></Navdiv>
        <div className="Main">
          <div className="row">
            {/* mainLeft css class is used in acccordian tab for line partation */}
            <div className=" col-lg-3 col-md-12 col-sm-12 ">
              {accordian.map((tabs, i) => (
                <LeftMain key={i} name={tabs}></LeftMain>
              ))}
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12">
              <RightMain></RightMain>
            </div>
          </div>
          <div id="footer">Marjan Ul Quran © 2020 - 2021</div>
        </div>
      </Container>
    </div>
  );
}

export default App;
