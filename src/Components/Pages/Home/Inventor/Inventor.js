import React from "react";
import { Button, Card } from "react-bootstrap";
import './Inventor';

const Inventor = ({ item }) => {
  const { name, img, price, supplierName, description, quantity } = item;
  return (
    <div className="col-md-4 py-5">
      <Card>
        <Card.Img style={{height: '200px',objectFit:'cover'}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description.slice(0, 150)}
          </Card.Text>
          <Card.Title>Price:${price}</Card.Title>

          <Card.Title>Quantity:{quantity}</Card.Title>
          <Card.Title >Supplier Name: {supplierName}</Card.Title>

          <Button variant="primary">See More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Inventor;
