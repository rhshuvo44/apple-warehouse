import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Inventor';

const Inventor = ({ item }) => {
  const navigate=useNavigate()
  const {_id, name, img, price, supplierName, description, quantity } = item;
 const detailsHandle=(id)=>{
  navigate(`/inventors/${id}`)
 }
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

          <Button onClick={()=>detailsHandle(_id)} variant="primary">See More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Inventor;
