import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useInventor from "../../../hook/useInventor";
import team1 from '../../../img/team-1.jpg';
import team2 from '../../../img/team-2.jpg';
import team3 from '../../../img/team-3.jpg';
import Banner from "../Banner/Banner";
import Inventor from "../Inventor/Inventor";

const Home = () => {
  const [items] = useInventor([]);
  const navigate = useNavigate();
  return (
    <div>
      <Banner />

      <div className="container py-5">
        <h1 className="text-center">Items</h1>
        <div className="row">
          {items.slice(0, 6).map((item) => (
            <Inventor key={item._id} item={item} />
          ))}{" "}
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate("/inventors")}
            className="btn btn-primary"
          >
            All Items
          </button>
        </div>
      </div>
      <div className="container py-5">
        <h1 className="text-center">Hot Items</h1>
        <div className="row">
          {items.slice(6, 9).map((item) => (
            <Inventor key={item._id} item={item} />
          ))}{" "}
        </div>
      </div>
      <div className="container py-5">
        <h1 className="text-center mb-5">Our Team Members</h1>
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={team1} />
              <Card.Body>
                <Card.Title>Elizabeth Bannet</Card.Title>
                <Card.Text>Logistic Maneger</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={team2} />
              <Card.Body>
                <Card.Title>Johnthan Rok</Card.Title>
                <Card.Text>Packeging Maneger</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={team3} />
              <Card.Body>
                <Card.Title>Simon D’soza</Card.Title>
                <Card.Text>Logistic Maneger</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
