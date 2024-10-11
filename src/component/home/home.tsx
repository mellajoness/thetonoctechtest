import Footer from "../footer/footer";
import Landing from "../landing/landing";
import Numbers from "../numbers/numbers";
import Story from "../story/story";
import Team from "../team/team";
import Values from "../values/values";

const Home = () => {
    return ( 
        <div>
            <Landing/>
            <Story/>
            <Numbers/>
            <Team/>
            <Values/>
            <Footer/>
        </div>
     );
}
 
export default Home;