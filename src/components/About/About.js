import React from "react";
import "./About.scss";
import TopNav from "../Navbar/Navbar";

function About() {
    return (
        <div className="about-content float-right">
            <TopNav />
            <h1>About</h1>
            <div className="content ">
        JavaScript.com is a resource built by the javacript learner team for the JavaScript community.


        Because JavaScript is a great language for coding beginners, we've gathered some of the best learning resources around and built a JavaScript course to help new developers get up and running.

With the help of community members contributing content to the site, JavaScript.com aims to also keep more advanced developers up to date on news, frameworks, and libraries.

</div>
        </div>
    );
}

export default About;