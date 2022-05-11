import React from "react";
import { Button, Container } from "react-bootstrap";

function SellerHome() {
  return (
    <div>
      <Container>
        <h2 className="createAccText">SELLER HOME PAGE</h2>
        <hr className="createAccHr" />
        <br />
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
          <a href="/ViewItems">
            <Button variant="danger" size="lg">
              View Items
            </Button>{" "}
          </a>{" "}
          <br />
          <br />
          <br />
        </center>
      </Container>
    </div>
  );
}

export default SellerHome;
