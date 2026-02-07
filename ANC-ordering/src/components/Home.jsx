import NavigationMenu from '../common/NavigationMenu';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="home">
      <NavigationMenu />
      <h1>Welcome to the Animal Nutrition Center Ordering System</h1>
      <p>Please choose your department</p>
      <ul>
        <li><Link to="/Antelope">Antelope</Link></li>
        <li><Link to="/BirdHouse">Bird House</Link></li>
        <li><Link to="/Carnivore">Carnivore</Link></li>
        <li><Link to="/Herpetarium">Herpetarium</Link></li>
        <li><Link to="/Insectarium">Insectarium</Link></li>
        <li><Link to="/JOTA">JOTA</Link></li>
        <li><Link to="/PenguinPuffin">Penguin and Puffin</Link></li>
        <li><Link to="/PrimateHouse">Primate House</Link></li>
        <li><Link to="/RiversEdge">River's Edge</Link></li>
        <li><Link to="/SeaLion">Sea Lion</Link></li>
      </ul>
    </div>
  )
}

export default Home;