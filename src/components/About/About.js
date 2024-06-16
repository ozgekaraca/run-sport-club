import React from "react";
import "./About.css";
import about2 from "../../assets/images/about2.jpg";
import about from "../../assets/images/about.jpg";
import about4 from "../../assets/images/about4.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="grid-container">
        <div className="grid-item image-container">
          <img src={about2} alt="" />
        </div>

        <div className="grid-item text-container">
          <p>
            <h6 className="title">
              GET CLOSER TO YOUR GOALS WITH A PERSONAL TRAINER
            </h6>
            Whether you are someone who wants to gain a new sports habit or an
            advanced athlete preparing to compete; An instructor is at your side
            who will help you do the training specifically prepared for you and
            your goals in the most accurate way. Your Personal Trainer will
            guide you not only during training but also throughout the rest of
            the day, supporting you to improve your whole life performance with
            the right rest and nutrition.
          </p>
        </div>

        <div className="grid-item text-container">
          <p>
            <h6 className="title">
              CUSTOMIZED STUDIO AND PROGRAMS ACCORDING TO YOUR NEEDS
            </h6>
            In the constantly updated group lessons held under the supervision
            of an instructor, you will feel how fun sports done correctly is and
            that sports and entertainment are an inseparable duo. Moreover,
            thanks to the Turkish virtual group lessons offered for the first
            time and only by Mars Athletic in Turkey, you will be able to find a
            group lesson at any time the club is open.
          </p>
        </div>

        <div className="grid-item image-container">
          <img src={about} alt="" />
        </div>

        <div className="grid-item image-container">
          <img src={about4} alt="" />
        </div>

        <div className="grid-item text-container">
          <p>
            <h6 className="title">
              GET A FIT BODY WITH GFX (GYM FLOOR EXERCISE)
            </h6>
            How about attending a cardio-effective class that works all muscle
            groups in just 30 minutes? Thanks to the 7 different themes offered
            by GFX, you can choose a high-intensity (HIIT) series that focuses
            on the area you want to focus on, and regardless of your performance
            level, you can participate in the class by making the appropriate
            variation of the movements with the guidance of the instructor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
