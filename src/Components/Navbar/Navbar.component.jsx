import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const money = useSelector((state) => state.moneyReducer);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          National Bank of Sharma
        </a>
        <div>
          <form className="d-flex" role="search">
            <button className="btn btn-success disabled">
              Balance (Rs.): {money}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
