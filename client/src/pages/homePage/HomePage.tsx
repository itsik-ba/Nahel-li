import Login from "../../components/logOn/Login";
import './HomePage.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <div className="about-box">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita aliquam rerum molestias, ducimus totam quo vitae maiores tenetur facilis? Ipsa pariatur id aspernatur expedita velit in eum, libero vel magnam sed repellendus, possimus, ullam inventore dolor a exercitationem veniam aliquam eos! Repudiandae dolores repellat perspiciatis harum perferendis, ipsa assumenda, unde libero iure quis quam? Facilis unde, beatae doloribus quasi et, sit necessitatibus ipsa praesentium iure, porro qui? Reiciendis provident praesentium quisquam commodi dolorum odio similique ipsam soluta, maiores iure tempora modi aspernatur corporis! Ipsa nemo est non cupiditate maiores dicta quidem harum voluptates autem aliquam, enim impedit suscipit et quia aperiam eaque sit eum earum beatae? Voluptates perspiciatis accusantium obcaecati, fugiat voluptatibus deleniti ipsa numquam. Commodi cupiditate officiis ea, dolor adipisci voluptates nostrum repellendus eum autem facilis, iure accusamus rerum labore earum alias aspernatur est ipsa?
      </div>
      <div className="right-side">
        <div className="login-box">
          <Login />
        </div>
        <div className="connected-box">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li><FontAwesomeIcon icon={faPhone} /> +123 456 7890</li>
            <li><FontAwesomeIcon icon={faEnvelope} /> email@example.com</li>
            <li><FontAwesomeIcon icon={faFacebook} /> facebook.com/yourpage</li>
            <li><FontAwesomeIcon icon={faInstagram} /> instagram.com/yourpage</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;