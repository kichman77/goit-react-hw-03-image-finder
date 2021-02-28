import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
  componentDidMount() {
    const { closeModal } = this.props;
    window.addEventListener("click", closeModal);
    window.addEventListener("keydown", closeModal);
  }
  componentDidUpdate() {
    const { closeModal } = this.props;
    window.addEventListener("click", closeModal);
    window.addEventListener("keydown", closeModal);
  }
  componentWillUnmount() {
    const { closeModal } = this.props;
    window.removeEventListener("click", closeModal);
    window.removeEventListener("keydown", closeModal);
  }
  render() {
    const { source } = this.props;
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={source} alt="img" />
        </div>
      </div>
    );
  }
}
export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  source: PropTypes.string.isRequired,
};
