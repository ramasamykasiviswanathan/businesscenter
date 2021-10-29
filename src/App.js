import logo from "./logo.svg";
import engagement from "./engagment.m4v";
import "./App.scss";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <section className="App">
      <header className="video-header">
        <video autoPlay loop playsInline muted>
          <source src={engagement} type="video/mp4" />
        </video>
        <div className="viewport-header">
          <h1>Big Day is on {Date("2022-02-07T00:00:00+0530")}</h1>
        </div>
      </header>
    </section>
  );
}

export default App;

/**
 * ns1095.ui-dns.de	IONOS Nameserver
ns1101.ui-dns.biz	IONOS Nameserver
ns1039.ui-dns.org	IONOS Nameserver
ns1096.ui-dns.com	IONOS Nameserver

rigid-bear-atn2t1ibxme6lxfwtefz7v6f.herokudns.com
_domainconnect.1and1.com

autodiscover.www   adsredir.ionos.info
 */
