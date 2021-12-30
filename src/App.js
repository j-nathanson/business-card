import './style.css';
import { Col } from 'reactstrap';
import Headshot from './components/Headshot';
import Header from './components/Header';
import ButtonBox from './components/ButtonBox';

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
        <div className="row ">
          <ButtonBox />
        </div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla officia error, suscipit animi atque explicabo vel vitae? Earum, reprehenderit numquam error optio aspernatur repellat impedit!</p>
        <h2>Interests</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla officia error, suscipit animi atque explicabo vel vitae? Earum, reprehenderit numquam error optio aspernatur repellat impedit!</p>
      </div>
    </div>
  );
}

export default App;
