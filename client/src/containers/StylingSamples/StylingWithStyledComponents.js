import React from "react";

function StylingWithStyledComponents(props) {
  return (
    <form>
      <div>
        <div>
          <h3>Billing Address</h3>
          <div>
            <label for="fullname">Full Name</label>
            <input type="text" name="fullname" placeholder="Maisa Mallikas" />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="maisa.mallikas@example.com"
            />
          </div>
          <div>
            <label for="address">Address</label>
            <input type="text" name="address" placeholder="Länsikatu 15" />
          </div>
          <div>
            <label for="city">City</label>
            <input type="text" name="city" placeholder="Joensuu" />
          </div>
          <div>
            <label for="zip">Zip</label>
            <input type="text" name="zip" placeholder="80110" />
          </div>
        </div>

        <div>
          <h3>Payment</h3>
          <div>
            <label for="cardType">Select Card</label>
            <select name="cardType">
              <option value="visa">Visa</option>
              <option value="masterCard">Mastercard</option>
            </select>
          </div>
          <div>
            <label for="cardName">Name on Card</label>
            <input type="text" name="cardName" placeholder="Maisa Mallikas" />
          </div>
          <div>
            <label for="cardNumber">Credit card number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1111-2222-3333-4444"
            />
          </div>
          <div>
            <div>
              <label for="cardExpMonth">Exp Month</label>
              <input type="number" name="cardExpMonth" placeholder="06" />
            </div>
            <div>
              <label for="cardExpYear">Exp Year</label>
              <input type="number" name="cardExpYear" placeholder="2020" />
            </div>
            <div>
              <label for="cardCvv">CVV</label>
              <input type="text" name="cardCvv" placeholder="123" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default StylingWithStyledComponents;
