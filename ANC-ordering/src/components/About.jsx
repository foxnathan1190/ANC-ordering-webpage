import Footer from "../common/Footer";
import Header from "../common/Header";
import NavigationMenu from "../common/NavigationMenu";

const About = () => {
    return (
        <div>
            <Header />
            <NavigationMenu />
            <h1>About the Animal Nutrition Center</h1>
            <p>The Animal Nutrition Center (ANC) is a state-of-the-art facility dedicated to providing optimal nutrition for a wide variety of animals. Our mission is to ensure the health and well-being of our animal residents by offering a diverse range of high-quality food options tailored to their specific dietary needs.</p>
            <p>At ANC, we understand that each animal has unique nutritional requirements based on their species, age, and health status. Our team of experienced nutritionists and veterinarians work closely together to develop customized meal plans that promote the overall health and longevity of our animals.</p>
            <p>We are committed to sustainability and ethical sourcing, ensuring that all of our food products are responsibly obtained and environmentally friendly. Our state-of-the-art ordering system allows for efficient management of inventory and ensures that our animals receive fresh, nutritious meals every day.</p>
            <p>Thank you for your interest in the Animal Nutrition Center. We are dedicated to providing the best care for our animal residents and are proud to be a part of their health and happiness.</p>
            <Footer />
        </div>
    )
}
export default About;