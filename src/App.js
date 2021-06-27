import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Persentation from './components/Persentation';
import Contact from './components/Contact';
import aboutimage from './images/about.png';
import aboutimage1 from './images/download.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutimage} 
      title='Why invest in Rise Hunter?' 
      content='We have a unique tekonomics and have a different use case with other coins. 
                in the future we will make an mobile app that resembles Instagram 
                but there are special features that are owned by holders 
                who have more than 1T coin Rise Hunter and webiste online marketplace for
                creators and fans to buy, sell, collect content NFTs ' 
      button='Buy Now'/>
      <Persentation />
      <About image={aboutimage1} 
      title='Why should i be sure about Rise Hunter?'
      content='Rise Hunter Protocol is a community driven, fair launched DeFi Token.' 
      button='Buy Now'/>
      <Contact/>
    </div>
  );
}

export default App;
