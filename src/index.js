import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// Main component. Renders a SearchBar and a ContactList
class ContactsApp extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ContactList contacts={this.props.contacts} />
      </div>
    );
  }
}
ContactsApp.PropTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
};

class SearchBar extends Component {
  render() {
    return <input type="search" placeholder="search" />;
  }
}

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <ContactItem
            key={contact.email}
            name={contact.name}
            email={contact.email}
          />
        ))}
      </ul>
    );
  }
}
ContactList.PropTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
};

class ContactItem extends Component {
  render() {
    return (
      <li>
        {this.props.name} - {this.props.email}
      </li>
    );
  }
}
ContactItem.PropTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

let contacts = [
  { name: "Cassio Zen", email: "cassiozen@gmail.com" },
  { name: "Dan Abramov", email: "gaearon@somewhere.com" },
  { name: "Pete Hunt", email: "floydophone@somewhere.com" },
  { name: "Paul O'Shannessy", email: "zpao@somewhere.com" },
  { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
  { name: "Sebastian Markbage", email: "sebmarkbage@somewhere.com" }
];

render(<ContactsApp contacts={contacts} />, document.getElementById("root"));
registerServiceWorker();
