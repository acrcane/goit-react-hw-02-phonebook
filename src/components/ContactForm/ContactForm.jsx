import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

import { FormStyle, Label, Input, Button } from "./ContactForm.styled";


class ContactForm extends React.Component{

    state = {
        name: '',
        number: '',
    }

    nameInputId = nanoid();

    handleSubmit  = event => {
        event.preventDefault();


        if (this.state.name === this.props.onSubmit(this.state)) {
            return;
        }

        this.reset();

    }

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value.trim() });
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

  render(){
        const { name, number } = this.state;

        return(
        <>
        <form onSubmit={this.handleSubmit}>
        <FormStyle>      
            <Label htmlFor={this.nameInputId}>
            Name 
            <Input
                type='text' 
                name='name'
                value={name} 
                onChange={this.handleChange}
                id={this.nameInputId}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required='Name required'
            />
            </Label> 

            <Label htmlFor={this.nameInputId}>
            Number 
            <Input
                type='tel' 
                name='number'
                value={number} 
                onChange={this.handleChange}
                id={this.nameInputId}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required='Phone number required'
            />
            </Label> 

            <Button type="submit" disabled={!name || !number} >Add contact</Button>
        </FormStyle>
        </form>
        </>
        )
  }

  






}

export default ContactForm;


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};