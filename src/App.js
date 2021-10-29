import logo from './logo.svg';
import './App.scss';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Row className="mx-0">
  <Button as={Col} variant="primary">Button #1</Button>
  <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
  <Button as={Col} variant="success">Button #3</Button>
</Row>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
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