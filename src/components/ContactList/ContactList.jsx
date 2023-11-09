import PropTypes from "prop-types";
import ContactListItem from "components/ContactListItem/ContactListItem";
import { List } from "./ContactList.styled";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
    <List>    
        {contacts.map(contact => (
            <ContactListItem
            key={contact.id}
            renderListItem={contact}
            onDeleteContact={onDelete}
            />            
            )
        )}    
    </List>  
    </> 
  );
};


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};


export default ContactList;