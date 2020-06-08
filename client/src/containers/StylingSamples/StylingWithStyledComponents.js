import React from "react";
import styled from "styled-components";

const Label = styled.label`
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  padding: 6px 12px;
`;
const Select = styled.select`
  width: 100%;
  padding: 6px 12px;
`;

const SectionContainer = styled.div`
  display: flex;
  margin: 0 -15px;
`;

const Section = styled.div`
  padding: 0 15px;
  flex: 1;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

function StylingWithStyledComponents(props) {
  return (
    <form>
      <SectionContainer>
        <Section>
          <h3>Billing Address</h3>
          <InputGroup>
            <Label for="fullname">Full Name</Label>
            <Input type="text" name="fullname" placeholder="Maisa Mallikas" />
          </InputGroup>
          <InputGroup>
            <Label for="email">Email</Label>
            <Input
              type="text"
              name="email"
              placeholder="maisa.mallikas@example.com"
            />
          </InputGroup>
          <InputGroup>
            <Label for="address">Address</Label>
            <Input type="text" name="address" placeholder="Länsikatu 15" />
          </InputGroup>
          <SectionContainer>
            <Section>
              <InputGroup>
                <Label for="city">City</Label>
                <Input type="text" name="city" placeholder="Joensuu" />
              </InputGroup>
            </Section>
            <Section>
              <InputGroup>
                <Label for="zip">Zip</Label>
                <Input type="text" name="zip" placeholder="80110" />
              </InputGroup>
            </Section>
          </SectionContainer>
        </Section>

        <Section>
          <h3>Payment</h3>
          <InputGroup>
            <Label for="cardType">Select Card</Label>
            <Select name="cardType">
              <option value="visa">Visa</option>
              <option value="masterCard">Mastercard</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label for="cardName">Name on Card</Label>
            <Input type="text" name="cardName" placeholder="Maisa Mallikas" />
          </InputGroup>
          <InputGroup>
            <Label for="cardNumber">Credit card number</Label>
            <Input
              type="text"
              name="cardNumber"
              placeholder="1111-2222-3333-4444"
            />
          </InputGroup>
          <SectionContainer>
            <Section>
              <InputGroup>
                <Label for="cardExpMonth">Exp Month</Label>
                <Input type="number" name="cardExpMonth" placeholder="06" />
              </InputGroup>
            </Section>
            <Section>
              <InputGroup>
                <Label for="cardExpYear">Exp Year</Label>
                <Input type="number" name="cardExpYear" placeholder="2020" />
              </InputGroup>
            </Section>
            <Section>
              <InputGroup>
                <Label for="cardCvv">CVV</Label>
                <Input type="text" name="cardCvv" placeholder="123" />
              </InputGroup>
            </Section>
          </SectionContainer>
        </Section>
      </SectionContainer>
    </form>
  );
}

export default StylingWithStyledComponents;
