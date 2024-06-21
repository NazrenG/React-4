import { Component } from "react";

import styled from "./UI/Contact.module.css";

class Form extends Component {
  state = {
    userName: "",
    phone: "",
  };
  handleNameChange = (event) => {
    this.setState({ userName: event.target.value });
  };
  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.userName.trim() && this.state.phone.trim()) {
      this.props.addUser({
        userName: this.state.userName,
        phone: this.state.phone,
      });
      this.setState({ userName: "", phone: "" });
    }
  };

  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styled.contactForm}>
        <label>
          Name:
          <input
            type="text"
            className={styled.Inputs}
            placeholder="Enter your name..."
            value={name}
            onChange={this.handleNameChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            className={styled.Inputs}
            placeholder="Enter your phone..."
            value={phone}
            onChange={this.handlePhoneChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}
export default Form;
