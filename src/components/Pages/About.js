import React from "react";
import "./About.css"
import BingMapsReact from "bingmaps-react";


function About () {
    return(
        <div>
        <div className="container">
            <div className="row mx-auto m-4">
                <div className="col-md-6 d-flex justify-content-center">
                <img src="./assets/me.PNG" className="about-img" style={{boxShadow: "5px 5px 5px grey"}}/>
                </div>
                <div className="contents col-md-6 p-3" style={{boxShadow: "5px 5px 5px grey"}}>
                    <h2 className="about-intro p-1">Hi,I'm</h2>
                    <h1 className="about-name p-1">Felix</h1>
                    <h2 className="about-box p-2">Software Engineer</h2>
                 </div>
                </div>
                 <div className="context row col-md-10" style={{padding: "15px", boxShadow: "5px 5px 5px grey"}}> 
                    <h2 style={{color: "white", backgroundColor: "purple", width: "170px", borderRadius: "20px", padding: "10px"}}>About Me</h2><br/>
                    <p><b>Career Summary :</b> I'm intrested about UI/UX and like to explore more stuff.Work as a freelancer in Cloudatik</p><br/><hr/><br/>
                    <p><b>Philosophy Statement :</b> I belive that students must have access to hands-on activities and also should be able to have choices and let their curiosity direct their learning.</p><br/><hr/><br/>
                    <p><b>Short biography :</b> I'm 19,Student in Foward School, born and raised in Penang & I like to play vedio games</p><br/><hr/><br/>
                    <p><b>Github :<a href="https://github.com/FelixTeoh" target="_blank" style={{ textDecoration: "none"}}> https://github.com/FelixTeoh</a></b></p>
                    <h2 style={{color: "white", backgroundColor: "purple", width: "180px", borderRadius: "20px", padding: "10px"}}>Hometown</h2>
                    <BingMapsReact bingMapsKey="your bing maps API key goes here" height="500px" mapOptions={{ navigationBarMode: "square", }} width="100%" viewOptions={{   center: { latitude: 5.29493, longitude: 100.230018 },   mapTypeId: "grayscale", }}  />
                 </div>
            </div>
        </div>
    )
}

export default About;