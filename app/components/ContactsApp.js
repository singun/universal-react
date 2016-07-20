import React, { Component, PropTypes} from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

class ContactsApp extends Component {
  constructore() {
    super(...arguments);
    this.state = {
      contacts: this.props.initinalData || [],
      filterText: ''
    }
  }

  handleUserInput(searchTerm) {
    this.setState({
      filterText: searchTerm
    })
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)} />
        <ContactList contacts={this.state.contacts}
          filterText={this.state.filterText} />
      </div>
    )
  }
}

ContactsApp.propTypes = {
  initinalData: PropTypes.any
};

export default ContactsApp;
