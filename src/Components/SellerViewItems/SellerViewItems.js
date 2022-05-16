import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import axios from "axios";

function SellerViewItems() {
  const [itemData, setItemData] = useState();
  useEffect(() => {
    axios
      .get("http://34.124.140.157:5000/itemDetails/")
      .then((res) => {
        console.log(res.data);
        setItemData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteBtn = (id) => {
    console.log(id);
    axios
      .delete(`http://34.124.140.157:5000/itemDetails/${id}`)
      .then((res) => {
        alert("Item deleted successfully");
        window.location = `/ViewItems`;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      {itemData?.map((item, index) => (
        <div style={{ marginTop: "2%" }} key={index}>
          <center>
            <Card style={{ width: "50%" }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text> {item.description}</Card.Text>
                <Card.Text>Price - {item.price}</Card.Text>
                <Button onClick={() => deleteBtn(item._id)} variant="danger">
                  Delete Item
                </Button>
              </Card.Body>
            </Card>
          </center>
        </div>
      ))}
      <div></div>
    </Container>
  );
}
export default SellerViewItems;
