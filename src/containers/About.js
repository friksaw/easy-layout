import React from "react";
import data from "../data";


const About = () => (
    <div className="About">
        <h2>
            О нас
        </h2>
        <div className="about-container">

            {
                data[0].about.map((about) =>
                    <div className="about-post1">
                        <img src={about.image} className="about-img1"/>
                        <div className="about-description-container">
                            <h3>
                                {about.title}
                            </h3>
                            <p className="h-s">
                                {about.description}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
)


export default About;