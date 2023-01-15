import React from "react";
import { useSelector } from "react-redux";
import ATMForm from "../ATMForm/ATMForm.component";

const ATM = () => {
  const money = useSelector((state) => state.moneyReducer);
  return (
    <div className="container-fluid h-100 bg-dark text-light d-flex flex-column justify-content-center align-items-center">
      <h1>Balance (Rs.): {money}</h1>
      <ATMForm />
    </div>
  );
};

export default ATM;
