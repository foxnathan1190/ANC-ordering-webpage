import NavigationMenu from '../common/NavigationMenu';

const Home = () => {
  return (
    <div className="home">
      <NavigationMenu />
      <h1>Welcome to the Animal Nutrition Center Ordering System</h1>
      <p>Please choose your department</p>
      <ul>
        <li>Antelope</li>
        <li>Bird House</li>
        <li>Carnivore</li>
        <li>Herpetarium</li>
        <li>Insectarium</li>
        <li>JOTA</li>
        <li>Penguin and Puffin</li>
        <li>Primate House</li>
        <li>River's Edge</li>
        <li>Sea Lion</li>
      </ul>
    </div>
  )
}

export default Home;