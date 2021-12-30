import './style.css';
import { Col } from 'reactstrap';
import Headshot from './components/Headshot';
import Header from './components/Header';
import ButtonBox from './components/ButtonBox';
import TextSection from './components/TextSection';

function App() {
  return (
    <div className="container-fluid shell pt-4 pb-4">
      <div className="container content">
        <div className="row justify-content-center">
          <Headshot />
        </div>
        <div className="row justify-content-center text-center">
          <Header />
        </div>
        <div className="row mb-3">
          <ButtonBox />
        </div>
        <div className="row">
          <TextSection />
        </div>
      </div>
    </div>
  );
}

export default App;
