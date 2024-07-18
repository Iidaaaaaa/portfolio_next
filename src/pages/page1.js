import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Page1() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/modern-css-reset/dist/reset.min.css"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Navbar />
      <main className="main">
        <div className="main__inner">
          <article className="work">
            <h2 className="work__work">WORK</h2>
            <p className="work__user">My Work</p>
            <div className="work__itemlist">
              <p className="work__item"></p>
              <p className="work__item"></p>
              <p className="work__item"></p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
