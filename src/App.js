import './style.css';
import { Col } from 'reactstrap';
import Headshot from './components/Headshot';
import Header from './components/Header';

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
          <div className="col-8 d-flex justify-content-around mx-auto">
            <a href="" className='btn btn-dark'>hey click</a>
            <a href="" className='btn btn-info'>hey click</a>
          </div>


        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempore est eligendi iusto, architecto hic doloremque omnis aliquid et illum dolores voluptas! Officia omnis neque earum a recusandae veritatis. Vel, deserunt autem, totam officia nobis corporis quod quos dicta ea minima non! Modi officia, est excepturi dolorum unde animi quod quia autem enim exercitationem, non atque dicta natus corrupti accusamus sunt distinctio, impedit nostrum aliquid magnam aut? Deserunt aut veniam debitis eaque nam! Optio odio aut quos expedita? Exercitationem incidunt, et velit ipsa sed cum quibusdam. Delectus laborum minima ipsam fuga deserunt, quaerat quasi, esse nam a tempore aperiam eligendi.</p>
      </div>
    </div>
  );
}

export default App;
