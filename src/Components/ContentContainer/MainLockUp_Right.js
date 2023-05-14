import React from "react";
import "./MainLockUp_Right.css";
import { AiOutlineFieldTime } from "react-icons/ai";
import paypic from "../../asset/pay.jpg";
const MainLockUp_Right = () => {
  const input = [
    // {
    //   text: "12 Months Subscription",
    //   price: (
    //     <p>
    //       Total <span className="cost">&#8377;99</span> <br />
    //       <span>&#8377;8/mo</span>
    //     </p>
    //   ),
    // },
    // {
    //   text: "12 Months Subscription",
    //   price: (
    //     <p>
    //       Total <span className="cost">&#8377;179 </span>
    //       <br />
    //       <span>&#8377;15/mo</span>
    //     </p>
    //   ),
    // },
    {
      text: "6 Months Subscription",
      price: (
        <p>
          Total<span className="cost"> &#8377;149</span> <br />
          <span>&#8377;25/mo</span>
        </p>
      ),
    },
    {
      text: "3 Months Subscription",
      price: (
        <p>
          Total <span className="cost">&#8377;99</span> <br />
          <span>&#8377;33/mo</span>
        </p>
      ),
    },
  ];
  return (
    <div className="main_right">
      <div className="progress_bar">
        <p>
          <span>1</span>
          <br />
          Sign Up
        </p>
        <p>
          <span>2</span>
          <br />
          Subscribe
        </p>
      </div>

      <h3 className="head">Select your subscription plan</h3>

      <div className="input_container">
        <p id="expire">Offer expired</p>
        <p id="recommended">Recommended</p>
        <div className="input_container_1">
          <p className="text">
            <input type="radio" disabled /> 12 Months Subscription
          </p>
          <p>
            Total <span className="cost">&#8377;99</span> <br />
            <span>&#8377;8/mo</span>
          </p>
        </div>

        <div className="input_container_2">
          <p className="text">
            <input type="radio" defaultChecked /> 12 Months Subscription
          </p>
          <p>
            Total <span className="cost">&#8377;179</span> <br />
            <span>&#8377;12/mo</span>
          </p>
        </div>
        {input.map((item, index) => {
          return (
            <div className="input_info" key={index}>
              <p className="text">
                <input type="radio" /> {item.text}
              </p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>

      <hr style={{ margin: "5px 10px" }} />

      <div className="summary_container">
        <p id="Fee">
          Subscription Fee <span>&#8377; 18,500</span>
        </p>
        <div id="Offer">
          <p className="Offer_price">
            Limited time offer <span id="discount_fee">- &#8377;18,401</span>
          </p>
          <p className="Offer_date">
            <AiOutlineFieldTime />
            Offer valid till 25th mar 2023
          </p>
        </div>
        <p id="GST">
          <span style={{ color: "black", fontWeight: 600 }}> Total</span>{" "}
          (Incl.of 18% GST)
          <span style={{ color: "black", fontWeight: 600, fontSize: 18 }}>
            &#8377;149
          </span>
        </p>
      </div>

      <div className="buttons">
        <button id="cancel">Cancel</button>
        <button id="pay">Proceed To Pay</button>
      </div>

      <>
        <img src={paypic} width={100} id="paypic" alt="" />
      </>
    </div>
  );
};

export default MainLockUp_Right;
