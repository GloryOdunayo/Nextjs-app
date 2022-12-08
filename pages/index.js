import Head from "next/head";
import Image from "next/image";
import React from "react";
import NavBar from "../components/NavBar";
import style from "../styles/Index.module.css";
import styled from "styled-components";
import Index from "../components/Index";
import Footer from "../components/footer";

const Home = () => {
  const myStyle = {
    backgroundColor: "grey",
    color: "orange",
    fontFamily: "sans-serif",
    fontSize: "34px",
    fontWeight: "bold",
  };
  const Section = styled.div`
    background-color: white;
    color: orange;
  `;
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossorigin="anonymous"
        ></script>
        <title>Homepage</title>
      </Head>
      {/* <NavBar/> */}
      {/* <h1>Hello</h1> */}
      {/* <h2 className={style.myOwn}>How are you doing?</h2> */}
      {/* <p style={{color: 'green', backgroundColor: 'yellow'}}>Goal</p>
      <p style={myStyle}>Goat</p> */}
      {/* <p className='bg-info'>Go</p> */}
      {/* <Section>
        hello
      </Section> */}
      <img src="/avatar.png" alt="" width='200px'/>
      <Image src="/avatar.png" alt="" width='200' height='200'/>
      <Index />
    </>
  );
};

export default Home;
Home.getLayout = function pageLayout(page){
  return (
    <>
      {page}
      <Footer/>
    </>
  )
}

