import React from "react";

import "./StylingWithCss.css";

function StylingWithCss(props) {
  return (
    <form id="StylingWithCss">
      <div className="sectionContainer">
        <div className="section">
          <h3>Billing Address</h3>
          <div className="inputGroup">
            <label for="fullname">Full Name</label>
            <input type="text" name="fullname" placeholder="Maisa Mallikas" />
          </div>
          <div className="inputGroup">
            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="maisa.mallikas@example.com"
            />
          </div>
          <div className="inputGroup">
            <label for="address">Address</label>
            <input type="text" name="address" placeholder="Länsikatu 15" />
          </div>
          <div className="sectionContainer">
            <div className="section">
              <div className="inputGroup">
                <label for="city">City</label>
                <input type="text" name="city" placeholder="Joensuu" />
              </div>
            </div>
            <div className="section">
              <div className="inputGroup">
                <label for="zip">Zip</label>
                <input type="text" name="zip" placeholder="80110" />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Payment</h3>
          <div className="inputGroup">
            <label for="cardType">Select Card</label>
            <select name="cardType">
              <option value="visa">Visa</option>
              <option value="masterCard">Mastercard</option>
            </select>
          </div>
          <div className="inputGroup">
            <label for="cardName">Name on Card</label>
            <input type="text" name="cardName" placeholder="Maisa Mallikas" />
          </div>
          <div className="inputGroup">
            <label for="cardNumber">Credit card number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1111-2222-3333-4444"
            />
          </div>
          <div className="sectionContainer">
            <div className="section">
              <div className="inputGroup">
                <label for="cardExpMonth">Exp Month</label>
                <input type="number" name="cardExpMonth" placeholder="06" />
              </div>
            </div>
            <div className="section">
              <div className="inputGroup">
                <label for="cardExpYear">Exp Year</label>
                <input type="number" name="cardExpYear" placeholder="2020" />
              </div>
            </div>
            <div className="section">
              <div className="inputGroup">
                <label for="cardCvv">CVV</label>
                <input type="text" name="cardCvv" placeholder="123" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default StylingWithCss;
