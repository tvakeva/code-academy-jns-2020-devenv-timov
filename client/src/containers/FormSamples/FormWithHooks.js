import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import {
  FaUser,
  FaEnvelope,
  FaRegAddressCard,
  FaUniversity,
} from "react-icons/fa";
import AutoSuggestInput from "../../components/AutoSuggestInput";

function FormWithHooks(props) {
  const [formData, setFormData] = useState({ cardType: "visa" });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const onChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col>
          <h3>Billing Address</h3>
          <FormGroup>
            <Label for="fullname">
              <FaUser /> Full Name
            </Label>
            <Input
              type="text"
              name="fullname"
              placeholder="Maisa Mallikas"
              value={formData.fullname || ""}
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">
              <FaEnvelope /> Email
            </Label>
            <Input
              type="text"
              name="email"
              placeholder="maisa.mallikas@example.com"
              value={formData.email || ""}
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">
              <FaRegAddressCard /> Address
            </Label>
            <Input
              type="text"
              name="address"
              placeholder="Länsikatu 15"
              value={formData.address || ""}
              onChange={onChange}
            />
          </FormGroup>
          <Row>
            <Col>
              <FormGroup>
                <Label for="city">
                  <FaUniversity /> City
                </Label>
                <AutoSuggestInput
                  suggestions={["Joensuu", "Helsinki", "Lahti", "Jyväskylä"]}
                  name="city"
                  placeholder="Type a city"
                  value={formData.city || ""}
                  onChange={onChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="zip">Zip</Label>
                <Input
                  type="text"
                  name="zip"
                  placeholder="80110"
                  value={formData.zip || ""}
                  onChange={onChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col>
          <h3>Payment</h3>
          <FormGroup>
            <Label for="cardType">Select Card</Label>
            <Input
              type="select"
              name="cardType"
              onChange={onChange}
              value={formData.cardType || ""}
            >
              <option value="visa">Visa</option>
              <option value="masterCard">Mastercard</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="cardName">Name on Card</Label>
            <Input
              type="text"
              name="cardName"
              placeholder="Maisa Mallikas"
              value={formData.cardName || ""}
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="cardNumber">Credit card number</Label>
            <Input
              type="text"
              name="cardNumber"
              placeholder="1111-2222-3333-4444"
              value={formData.cardNumber || ""}
              onChange={onChange}
            />
          </FormGroup>
          <Row>
            <Col>
              <FormGroup>
                <Label for="cardExpMonth">Exp Month</Label>
                <Input
                  type="number"
                  name="cardExpMonth"
                  placeholder="06"
                  value={formData.cardExpMonth || ""}
                  onChange={onChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="cardExpYear">Exp Year</Label>
                <Input
                  type="number"
                  name="cardExpYear"
                  placeholder="2020"
                  value={formData.cardExpYear || ""}
                  onChange={onChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="cardCvv">CVV</Label>
                <Input
                  type="text"
                  name="cardCvv"
                  placeholder="123"
                  value={formData.cardCvv || ""}
                  onChange={onChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
      <Button type="submit">Send</Button>
    </Form>
  );
}

export default FormWithHooks;
