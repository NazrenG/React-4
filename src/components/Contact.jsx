import { Component } from "react";
import Form from "./Form";
import styled from "./UI/Contact.module.css";

class Contact extends Component {
  state = {
    contactList: [],
  };
  addUser = (user) => {
    this.setState((prevState) => ({
      contactList: [...prevState.contactList, user],
    }));
  };
  removeButton = (index) => {
    this.setState((prevState) => ({
      contactList: prevState.contactList.filter((_, i) => i !== index),
    }));
  };
  render() {
    const { contactList } = this.state;
    return (
      <div className={styled.contactDiv}>
        <ul>
          {contactList.map((user, index) => (
            <li key={index} className={styled.contactLi}>
              <p>{user.userName}</p>
              <p>{user.phone}</p>
              <button onClick={() => this.removeButton(index)}>remove</button>
            </li>
          ))}
        </ul>

        <Form addUser={this.addUser} />
      </div>
    );
  }
}
export default Contact;
