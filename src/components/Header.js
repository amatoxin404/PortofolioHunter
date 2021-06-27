import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div id='main'>
            <Navbar/>
            <div className='name' >
                <div style={{textAlign:'left'}}>
                <h1 style={{marginTop:100}}>Become a hunter with <span>Rise Hunter</span></h1>
                <h3>Are you an nft collector? If so, welcome to Rise 
                    Hunter where you can HUNT for new NFTs to add to your 
                    collection or sell your collection to your fans.</h3>
                <h3>We are here aiming to create a platform so you can do 
                    that and there is something special for you loyal Rise Hunter holders</h3>
                    <p className='details'>The place you want to HUNT and RAISE your items!</p>
                </div>
                <a style={{marginBottom:10}} href='https://sites.google.com/view/comingsoonpcs/coming-soon' className='cv-btn'>Live Chart</a>
                <a href='https://sites.google.com/view/comingsoonpcs/coming-soon' className='cv-btn'>Buy Now</a>
            </div>
        </div>
    )
}

export default Header;
