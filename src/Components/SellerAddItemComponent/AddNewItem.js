import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Axios from "axios";

function AddNewItem() {
  const [title, setItemName] = useState("");
  const [price, setItemPrice] = useState("");
  const [description, setDescription] = useState("");

  function btnsub(e) {
    e.preventDefault();
    const itemDetails = {
      title,
      price,
      description,
    };
    Axios.post(`http://localhost:5000/itemDetails`, itemDetails)
      .then((res) => {
        console.log(res.data);
        alert("Entered successfully !");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  return (
    <div>
      <Container>
        <h1>Add a item</h1>
        <br /> <br />
        <Form>
          <Form.Group>
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) => {
                setItemName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Item Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Price"
              onChange={(e) => {
                setItemPrice(e.target.value);
              }}
            />
          </Form.Group>

          <br />

          <Form.Group>
            <Form.Label>Item Description</Form.Label>
            <textarea
              className="form-control"
              type="text"
              rows="5"
              cols="50"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>

          <br />

          <Button variant="danger" type="submit" onClick={btnsub}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddNewItem;
