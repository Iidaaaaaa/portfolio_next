import React from "react";
import Image from "next/image";

const Skills = () => {
  const skills = [
    { src: "/image/htmlsvg.svg", text: "HTML" },
    { src: "/image/csssvg.svg", text: "CSS" },
    { src: "/image/javascript.webp", text: "JavaScript" },
    { src: "/image/firebase.webp", text: "Firebase" },
    { src: "/image/bem.webp", text: "BEM" },
    { src: "/image/sass.webp", text: "SASS" },
    { src: "/image/Figma.webp", text: "Figma" },
    { src: "/image/wordpress.webp", text: "WordPress" },
    { src: "/image/php.png", text: "PHP" },
  ];

  return (
    <section id="skill" className="skill">
      <h2 className="skill__title">SKILL</h2>
      <p className="skill__user">Technique</p>
      <div className="skill__content">
        {skills.map((skill, index) => (
          <div className="skill__item" key={index}>
            <Image
              width={50}
              height={50}
              className="skill__image"
              src={skill.src}
              alt={`${skill.text}_image`}
            />
            <p className="skill__text">{skill.text}</p>
          </div>
        ))}
      </div>
      <p className="skill__content_other">その他</p>
      <p className="skill__text_other">Photoshop</p>
      <p className="skill__text_other">Illustrator</p>
      <div className="skill__textflex">
        <a href="https://github.com/Iidaaaaaa">github</a>
        <Image
          width={50}
          height={50}
          className="skill__icon2"
          src="./image/newlink.svg"
          alt="icon2"
        />
      </div>
    </section>
  );
};

export default Skills;
