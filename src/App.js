import engagement from "./engagment.m4v";
import "./App.scss";
import React, { useState, useEffect } from "react";

function App() {
  const [eventdate, setEventDate] = useState(
    new Date("2022-02-07T09:45:00.000+05:30")
  );
  return (
    <section className="App">
      <header className="video-header">
        <video autoPlay loop playsInline muted>
          <source src={engagement} type="video/mp4" />
        </video>
        <div className="viewport-header">
          <iframe
            title="YouTube video player"
            className="youtube-player"
            type="text/html"
            width="75%"
            height="90%"
            src="https://www.youtube.com/embed/Rl6AI4cYpyI?rel=0&autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
