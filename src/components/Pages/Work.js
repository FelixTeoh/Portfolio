import React from "react";
import "./Work.css"
import {Card} from "react-bootstrap";

function Work () {
    return(
        <div>
            <h1 className="text-center mt-3">Work Experience</h1>
          <div className="container">
            <div className="row">
            <Card className="m-5 mx-auto col-md-6" style={{ width: '30rem', border: "2px solid black", borderRadius:"20px", height:"220px", boxShadow: "5px 5px 5px grey" }}>
            <Card.Body>
              <Card.Title className="mt-3"><b>CLOUDATIK</b></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><b>Position :</b> Frontend Developer / 2021 April - September</Card.Subtitle>
              <Card.Text className="mt-4" style={{color: "grey"}}>
                Industrial Attachment with Cloudatik Company as intern.
              </Card.Text>
              <Card.Link style={{textDecoration: "none", fontSize: "18px"}} href="https://www.cloudatik.com/" target="_blank">Cloudatik</Card.Link>
            </Card.Body>
          </Card>
          <Card className="m-5 mx-auto col-md-6" style={{ width: '30rem', border: "2px solid black", borderRadius:"20px", height:"220px", boxShadow: "5px 5px 5px grey" }}>
            <Card.Body>
              <Card.Title className="mt-3"><b>TSURUYA</b></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><b>Position :</b> Waiter / 2020 JAN - March</Card.Subtitle>
              <Card.Text className="mt-4" style={{color: "grey"}}>
                Work as a full time job to earn some pocket money.
              </Card.Text>
              <Card.Link  style={{textDecoration: "none", fontSize: "18px"}} href="https://m.facebook.com/profile.php?id=100063685625354&_rdr" target="_blank">Tsuruya</Card.Link>
            </Card.Body>
          </Card>
          </div>
          </div>

          <h1 className="text-center mt-3">Education</h1>
          <div className="container">
            <div className="row">
            <Card className="m-5 mx-auto col-md-6" style={{ width: '30rem', border: "2px solid black", borderRadius:"20px", height:"220px", boxShadow: "5px 5px 5px grey" }}>
            <Card.Body>
              <Card.Title className="mt-3"><b>SMJK HENG EE</b></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><b>Position :</b> Student / 2014-2019</Card.Subtitle>
              <Card.Text className="mt-4" style={{color: "grey"}}>
                Secondary School Studies.
              </Card.Text>
              <Card.Link style={{textDecoration: "none", fontSize: "18px"}} href="https://www.cloudatik.com/" target="_blank">Cloudatik</Card.Link>
            </Card.Body>
          </Card>
          <Card className="m-5 mx-auto col-md-6" style={{ width: '30rem', border: "2px solid black", borderRadius:"20px", height:"220px", boxShadow: "5px 5px 5px grey" }}>
            <Card.Body>
              <Card.Title className="mt-3"><b>FORWARD SCHOOL</b></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><b>Position :</b> Student / 2020 until now</Card.Subtitle>
              <Card.Text className="mt-4" style={{color: "grey"}}>
                Applied in Nitrodegree Software Engineering.
              </Card.Text>
              <Card.Link  style={{textDecoration: "none", fontSize: "18px"}} href="https://m.facebook.com/profile.php?id=100063685625354&_rdr" target="_blank">Tsuruya</Card.Link>
            </Card.Body>
          </Card>
          </div>
          </div>
        </div>
    )
}

export default Work;