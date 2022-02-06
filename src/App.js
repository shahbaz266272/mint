import "./App.css";
import "./MediaQuries.css";
import DPLogo from "../src/Images/DPLogo.png";
import MINTNOW from "../src/Images/MINTNOW.png";
import PirateCard from "../src/Images/PirateCard.png";
import community from "../src/Images/community.png";
import { Row, Col, Container } from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
function App() {
  return (
    <div className="App">
      <div className="forBG">
        <Container fluid>
          <center>
            <div className="TopImage">
              <div className="Twoimages">
                <img src={DPLogo} alt="DPLogo.png" className="DPLogo" />
              </div>
            </div>
            <div className="position-absolute forPosition">
              <img src={MINTNOW} alt="MINTNOW.png" className="MINTNOW" />
              <img
                src={PirateCard}
                alt="PirateCard.png"
                className="PirateCard"
              />
            </div>
          </center>
          <div className="ForCenter py-5">
            <div className="content">
              {/* <Container> */}
              <Row className="left">
                <Col lg={6} md={6} sm={12}>
                  <div>
                    <div className="text-white">
                      <h4 className="forBrownBG px-2 py-1">INSTRUCTIONS</h4>
                    </div>
                    <div className="ms-5 Lorem">
                      <h4 className="Lorem">Lorem ispum</h4>
                      <h4 className="Lorem">Lorem ispum</h4>
                      <h4 className="Lorem">Lorem ispum</h4>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div className="Right">
                    <div className="text-white">
                      <img
                        src={community}
                        alt="community.png"
                        className="community"
                      />
                    </div>
                    <div className="amountflex d-flex justify-content-evenly">
                      <h5 className="foramount mt-4 fw-bolder">AMOUNT</h5>
                      <div className="mt-4 fw-bolder px-2 text-white ForBGCOLOR me-5">
                        <FontAwesomeIcon className="icons" icon={faPlus} />
                        <input
                          type="text"
                          className="forinput mx-1"
                          placeholder="Mint"
                        />

                        <FontAwesomeIcon className="icons" icon={faMinus} />
                      </div>
                    </div>
                    <div className="TotalETH d-flex justify-content-evenly me-5 my-2">
                      <h3 className="fw-bolder for425 ETH">Total</h3>
                      <h3 className="fw-bolder ETH">0 ETH</h3>
                    </div>
                    <div className="text-center text-white">
                      <button className="forBrownBGX px-3 py-1 mb-4">
                        MINT NOW
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
              {/* </Container> */}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
