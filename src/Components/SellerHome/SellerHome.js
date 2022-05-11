import React from "react";
import { Button, Container } from "react-bootstrap";

function SellerHome() {
  return (
    <div>
      <Container>
        <h1 style={{ marginTop: 2 + "%" }}>Seller Home Page</h1>

        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
          <a href="/AddNewItem">
            <Button variant="danger" size="lg">
              {" "}
              Add a Item
            </Button>
          </a>
          <br />
          <br />
          <br />
        </center>
        <center>
          <a href="/ViewList">
            <Button variant="danger" size="lg">
              View Items
            </Button>{" "}
          </a>{" "}
          <br />
          <br />
          <br />
        </center>
        <center>
          <a href="/DeleteItem">
            {" "}
            <Button variant="danger" size="lg">
              Delete Item
            </Button>{" "}
          </a>
        </center>
      </Container>
    </div>
  );
}

export default SellerHome;
