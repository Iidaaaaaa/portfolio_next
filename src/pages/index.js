import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Works from "@/components/works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://iidaaa.secret.jp/portfolio/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="飯田のポートフォリオ" />
        <meta
          property="og:description"
          content="トライデントコンピュータ専門学校の学生、飯田智成のポートフォリオです。"
        />
        <meta property="og:site_name" content="名古屋　学生　ポートフォリオ" />
        <meta
          property="og:image"
          content="https://iidaaa.secret.jp/portfolio/thumbnail.JPG"
        />
        <title>iida Portfolio</title>
        <link rel="icon" href="/image/favicon.ico" />
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
          <Profile />
          <Skills />
          <Works />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
