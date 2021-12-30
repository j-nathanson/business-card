import './style.css';
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
        <div className="row footer justify-content-center">
          <footer>
            <a href="#" className="btn footer--btn"><i class="fa fa-twitter-square" ></i></a>
            <a href="#" className="btn footer--btn"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="#" className="btn footer--btn">
              <i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#" className="btn footer--btn"><i class="fa fa-github-square" aria-hidden="true"></i></a>
          </footer></div>
      </div>
    </div>
  );
}

export default App;
