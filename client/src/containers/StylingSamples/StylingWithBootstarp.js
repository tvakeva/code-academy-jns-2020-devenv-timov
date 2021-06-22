import React from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import {
  FaUser,
  FaEnvelope,
  FaRegAddressCard,
  FaUniversity,
} from "react-icons/fa";

function StylingWithBootsrap(props) {
  return (
    <Form>
      <Row>
        <Col>
          <h3>Billing Address</h3>
          <FormGroup>
            <Label for="fullname">
              <FaUser /> Full Name
            </Label>
            <Input type="text" name="fullname" placeholder="Maisa Mallikas" />
          </FormGroup>
          <FormGroup>
            <Label for="email">
              <FaEnvelope /> Email
            </Label>
            <Input
              type="text"
              name="email"
              placeholder="maisa.mallikas@example.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">
              <FaRegAddressCard /> Address
            </Label>
            <Input type="text" name="address" placeholder="Länsikatu 15" />
          </FormGroup>
          <Row>
            <Col>
              <FormGroup>
                <Label for="city">
                  <FaUniversity /> City
                </Label>
                <Input type="text" name="city" placeholder="Joensuu" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="zip">Zip</Label>
                <Input type="text" name="zip" placeholder="80110" />
              </FormGroup>
            </Col>
          </Row>
        </Col>

        <Col>
          <h3>Payment</h3>
          <FormGroup>
            <Label for="cardType">Select Card</Label>
            <Input type="select" name="cardType">
              <option value="visa">Visa</option>
              <option value="masterCard">Mastercard</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="cardName">Name on Card</Label>
            <Input type="text" name="cardName" placeholder="Maisa Mallikas" />
          </FormGroup>
          <FormGroup>
            <Label for="cardNumber">Credit card number</Label>
            <Input
              type="text"
              name="cardNumber"
              placeholder="1111-2222-3333-4444"
            />
          </FormGroup>
          <Row>
            <Col>
              <FormGroup>
                <Label for="cardExpMonth">Exp Month</Label>
                <Input type="number" name="cardExpMonth" placeholder="06" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="cardExpYear">Exp Year</Label>
                <Input type="number" name="cardExpYear" placeholder="2020" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="cardCvv">CVV</Label>
                <Input type="text" name="cardCvv" placeholder="123" />
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}

export default StylingWithBootsrap;
