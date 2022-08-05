import '../styles/globals.css'
import Head from 'next/head';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import { useState, useEffect } from "react";
import ProgressBar from '../components/layouts/ProgressBar';

function MyApp({ Component, pageProps }) {

  return (
    <div style={{ background: "white", overflowX: "hidden" }}>
      <ProgressBar />
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp






// import React from "react";

// class MyApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       scrolled: 0
//     };
//   }

//   componentDidMount() {
//     window.addEventListener("scroll", this.scrollProgress);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.scrollProgress);
//   }

//   scrollProgress = () => {
//     const scrollPx = document.documentElement.scrollTop;
//     const winHeightPx =
//       document.documentElement.scrollHeight -
//       document.documentElement.clientHeight;
//     const scrolled = `${scrollPx / winHeightPx * 100}%`;

//     console.log(scrolled);

//     this.setState({
//       scrolled: scrolled
//     });
//   };

//   render() {
//     const progressContainerStyle = {
//       background: "white",
//       height: "5px",
//       position: "fixed",
//       bottom: 10,
//       left: 0,
//       width: "100vw",
//       zIndex: 99
//     };

//     const progressBarStyle = {
//       height: "5px",
//       background: "black",
//       width: this.state.scrolled
//     };

//     return (
//       <div>
        
//         <div className="content">
//           <h1>
//             <div className="arrow-down" />
//           </h1>
//           <br />
//           <h1>S</h1>
//           <h1>C</h1>
//           <h1>R</h1>
//           <h1>O</h1>
//           <h1>L</h1>
//           <h1>L</h1>
//           <br />
//           <h1>O</h1>
//           <h1>N</h1>
//           <br />
//           <h1>
//             <div className="arrow-down" />
//           </h1>
//           <br />
//           <h1>S</h1>
//           <h1>C</h1>
//           <h1>R</h1>
//           <h1>O</h1>
//           <h1>L</h1>
//           <h1>L</h1>
//           <br />
//           <h1>O</h1>
//           <h1>N</h1>
//           <br />
//           <h1>
//             <div className="arrow-down" />
//           </h1>
//           <br />
//           <h1>S</h1>
//           <h1>C</h1>
//           <h1>R</h1>
//           <h1>O</h1>
//           <h1>L</h1>
//           <h1>L</h1>
//           <br />
//           <h1>O</h1>
//           <h1>N</h1>
//           <br />
//           <h1>
//             <div className="arrow-down" />
//           </h1>
//           <br />
//           <h1>T</h1>
//           <h1>H</h1>
//           <h1>E</h1>
//           <br />
//           <h1>E</h1>
//           <h1>N</h1>
//           <h1>D</h1>
//         </div>
//         <div className="progress-container" style={progressContainerStyle}>
//           <div className="progress-bar" style={progressBarStyle} />
//         </div>
//       </div>
//     );
//   }
// }

// export default MyApp
