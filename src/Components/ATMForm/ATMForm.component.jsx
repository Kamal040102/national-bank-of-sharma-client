import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";

const ATMForm = () => {
  const dispatch = useDispatch();
  const [balance, setBalance] = useState(0);
  const money = useSelector((state) => state.moneyReducer);
  return (
    <div className="w-100 d-flex flex-column align-items-center mt-3">
      <div className="w-50">
        <input
          type="number"
          className="form-control"
          name="balance"
          id="balance"
          defaultValue={balance}
          onChange={(e) => {
            setBalance(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-50 row mt-5">
        <div className="col-12 col-md-6 my-2 my-md-0">
          <button
            className="btn btn-danger w-100"
            onClick={() => {
              balance === 0
                ? window.alert("Amount should be greater than 0")
                : balance > money
                ? alert("InSufficient account balance")
                : money === 0
                ? window.alert("Insufficient account balance")
                : dispatch(actions.withdrawMoney(balance));
            }}
          >
            WITHDRAW
          </button>
        </div>
        <div className="col-12 col-md-6 my-2 my-md-0">
          <button
            className="btn btn-success w-100"
            onClick={() => {
              balance === 0
                ? window.alert("Amount should be greater than 0")
                : dispatch(actions.depositMoney(balance));
            }}
          >
            DEPOSIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ATMForm;
