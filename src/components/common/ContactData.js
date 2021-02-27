import React from 'react';
import { contactData } from '../../utils/data';

const ContactData = ({ className }) => {
  return (
    <div className={className}>
      <span>{contactData.email}</span>
      <span>tel. {contactData.phone}</span>
      <span>{contactData.address}</span>
      <span>Czynne: {contactData.open}</span>
    </div>
  );
}

export default ContactData;
