import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ getFetchData }) => {
  return (
    <button onClick={getFetchData} className={styles.btn} type="button">
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  getFetchData: PropTypes.func.isRequired,
};
