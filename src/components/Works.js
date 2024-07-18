import React from "react";
import Image from "next/image";

const works = [
  {
    href: "page1.html",
    imgSrc: "/image/work2.webp",
    title: "進級制作：Whiteboard",
    category: "アプリ開発",
  },
  {
    href: "page4.html",
    imgSrc: "/image/work4.png",
    title: "ポートフォリオ",
    category: "Webサイト制作",
  },
  {
    href: "page5.html",
    imgSrc: "/image/work5.jpg",
    title: "合同制作：OddBallTalk",
    category: "Webアプリ制作",
  },
  {
    href: "page2.html",
    imgSrc: "/image/work3.webp",
    title: "Blog:Iida's Blog",
    category: "Webサイト制作",
  },
  {
    href: "page3.html",
    imgSrc: "/image/work.webp",
    title: "漫画ランチ",
    category: "UIデザイン",
  },
];

export const Works = () => {
  return (
    <section id="work" className="work">
      <h2 className="work__title">WORK</h2>
      <p className="work__user">Design</p>
      <div className="work__content">
        {works.map((work, index) => (
          <div className="card" key={index}>
            <a href={work.href}>
              <div className="card__imagemask">
                <Image
                  width={50}
                  height={50}
                  className="card__image"
                  src={work.imgSrc}
                  alt={`${work.title}の画像`}
                />
              </div>
              <div className="card__text">
                <h3 className="card__title">{work.title}</h3>
                <p className="card__category">{work.category}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
