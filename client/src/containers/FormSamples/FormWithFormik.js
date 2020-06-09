import React from "react";
import { FormGroup, Label, Row, Col, Input, Button } from "reactstrap";
import { Formik, Form, Field } from "formik";
import {
  FaUser,
  FaEnvelope,
  FaRegAddressCard,
  FaUniversity,
} from "react-icons/fa";

function FormWithFormik(props) {
  const onSubmit = (formData, { setSubmitting }) => {
    console.log(formData);
    setTimeout(() => setSubmitting(false), 5000);
  };
  return (
    <Formik
      initialValues={{
        address: "",
        cardCvv: "",
        cardExpMonth: "",
        cardExpYear: "",
        cardName: "",
        cardNumber: "",
        cardType: "visa",
        city: "",
        email: "",
        fullname: "",
        zip: "",
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Row>
            <Col>
              <h3>Billing Address</h3>
              <FormGroup>
                <Label for="fullname">
                  <FaUser /> Full Name
                </Label>
                <Field
                  as={Input}
                  type="text"
                  name="fullname"
                  placeholder="Maisa Mallikas"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">
                  <FaEnvelope /> Email
                </Label>
                <Field
                  as={Input}
                  type="text"
                  name="email"
                  placeholder="maisa.mallikas@example.com"
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">
                  <FaRegAddressCard /> Address
                </Label>
                <Field
                  as={Input}
                  type="text"
                  name="address"
                  placeholder="Länsikatu 15"
                />
              </FormGroup>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="city">
                      <FaUniversity /> City
                    </Label>
                    <Field
                      as={Input}
                      type="text"
                      name="city"
                      placeholder="Joensuu"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="zip">Zip</Label>
                    <Field
                      as={Input}
                      type="text"
                      name="zip"
                      placeholder="80110"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Col>
            <Col>
              <h3>Payment</h3>
              <FormGroup>
                <Label for="cardType">Select Card</Label>
                <Field as={Input} type="select" name="cardType">
                  <option value="visa">Visa</option>
                  <option value="masterCard">Mastercard</option>
                </Field>
              </FormGroup>
              <FormGroup>
                <Label for="cardName">Name on Card</Label>
                <Field
                  as={Input}
                  type="text"
                  name="cardName"
                  placeholder="Maisa Mallikas"
                />
              </FormGroup>
              <FormGroup>
                <Label for="cardNumber">Credit card number</Label>
                <Field
                  as={Input}
                  type="text"
                  name="cardNumber"
                  placeholder="1111-2222-3333-4444"
                />
              </FormGroup>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="cardExpMonth">Exp Month</Label>
                    <Field
                      as={Input}
                      type="number"
                      name="cardExpMonth"
                      placeholder="06"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="cardExpYear">Exp Year</Label>
                    <Field
                      as={Input}
                      type="number"
                      name="cardExpYear"
                      placeholder="2020"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="cardCvv">CVV</Label>
                    <Field
                      as={Input}
                      type="text"
                      name="cardCvv"
                      placeholder="123"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>
          <Button disabled={isSubmitting} type="submit">
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormWithFormik;
