import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faTelegram,
    faReddit
  } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <div id='contact'>
            <h3 style={{textAlign:'center', color:'#FFF', marginBottom:40}}> Join Our Community </h3>
            <div class="social-container">
                <a style={{ margin: "15px 20px", color: "#FFF"}} href="https://t.me/risehunterofficial"
                className="telegram social">
                <FontAwesomeIcon icon={faTelegram} size="2x" />
                </a>
                <a style={{ margin: "15px 20px", color: "#FFF"}} href="https://web.facebook.com/groups/4163226803771253"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a style={{ margin: "15px 20px", color: "#FFF"}} href="https://twitter.com/RiseHunter5"
                className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a style={{ margin: "15px 20px", color: "#FFF"}} href="https://www.instagram.com/risehunterofficial/"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a style={{ margin: "15px 20px", color: "#FFF"}} href="https://www.reddit.com/user/RiseHunterOfficial"
                className="reddit social">
                <FontAwesomeIcon icon={faReddit} size="2x" />
                </a>
            </div>
        </div>
    )
}

export default Contact;
