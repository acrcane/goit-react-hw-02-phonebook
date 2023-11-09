import PropTypes from "prop-types";
import {SearchList, ContactItem, Text, Button} from './ContactListItem.styled';

const ContactListItem = ({renderListItem: {id, name, number}, onDeleteContact }) => {

    return ( 
        <ContactItem key={id}>
        <SearchList>
            <Text>{name}:</Text>
            <Text>{number}</Text>
        </SearchList>
        <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
        </Button>
        </ContactItem> 
        
    );
};


ContactListItem.propTypes = {
    renderListItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        }).isRequired,

    onDeleteContact: PropTypes.func.isRequired,
};


export default ContactListItem;