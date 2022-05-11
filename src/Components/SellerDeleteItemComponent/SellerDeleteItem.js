import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import Axios from "axios";

function SellerDeleteItem() {
  const [uid, setuid] = useState("");

  function deleteuser(uid) {
    //alert(uid);
    Axios.delete(`http://localhost:9000/deleteitem/${uid}`)
      .then((res) => {
        alert(uid);

        alert("Item deleted succesfully");
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }

  return (
    <div>
      <Container>
        <h1>Delete a Item</h1>

        <br />

        <Form>
          <Form.Group>
            <Form.Label>Item ID</Form.Label>
            <Form.Control
              type="text"
              name="itemid"
              placeholder="Enter ID"
              onChange={(e) => {
                setuid(e.target.value);
              }}
            />
          </Form.Group>

          <br />

          <Button
            variant="danger"
            type="submit"
            onClick={() => {
              deleteuser();
            }}
          >
            Delete
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default SellerDeleteItem;
