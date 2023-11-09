import React from "react";
import { nanoid } from "nanoid";
import { Notify } from "notiflix";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/filter";


export class App extends React.Component {

    state = {
      contacts: [],
      filter: '',
    }

    addContact = ({name, number}) => {
      const newContact = {
        name,
        number,
        id: nanoid(), 
      }
        
      if (this.chekName(newContact.name) || this.chekNumber(newContact.number)) {
        Notify.failure(`${newContact.name} is already in contacts`, Notify.init({
          clickToClose: true,
          position: 'center-top',
        }));
        return newContact.name;
      }

      
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));


    }

      chekName = newName => {

        return this.state.contacts.find(({ name }) => name.toLowerCase() === newName.toLowerCase());
      };
      chekNumber = newNumber => {
    
        return this.state.contacts.find(({ number }) => number === newNumber);
      };

      changeFilter = event => {
        this.setState({ filter: event.currentTarget.value });
      };
    
      deleteContact = contactId => {
        this.setState(prevState => ({
          contacts: prevState.contacts.filter(contact => contact.id !== contactId),
        }));
      };


    render() {
      const { contacts, filter } = this.state;    
      const normalizedFilter = filter.toLowerCase();
      const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter));

      return (
        <>
        <div>             
          <h1>Phonebook</h1>
          <ContactForm onSubmit = {this.addContact}/>
        </div>

        <div>  
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList 
          contacts={visibleContacts} 
          onDelete={this.deleteContact} 
          />        
        </div> 
      </>
      );
    }
  
};
