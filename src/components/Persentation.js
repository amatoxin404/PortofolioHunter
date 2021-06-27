import React from 'react'
import ProgressBar from "./ProgressBar";

const testData = [
    {title:"Burn Before Launch", bgcolor: "#FFB732", completed: 20 },
    {title:"Distributed to Holders", bgcolor: "#FFB732", completed: 2 },
    {title:"Distribute to Buyback Sistem / Marketing", bgcolor: "#FFB732", completed: 5 },
    {title:"Automaticlly add LP", bgcolor: "#FFB732", completed: 5 },
  ];

function Persentation() {
    return (
        <div id="tekonomic">
            <h1>Our Tekonomics</h1>
            <h3>1 Quadrillion Initial Supply and Tax 12%</h3>
            <hr style={{marginLeft:20, marginRight:20, marginBottom:40}}></hr>
            {testData.map((item, idx) => (
            <ProgressBar title={item.title} key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            ))}
        </div>
    )
}

export default Persentation
