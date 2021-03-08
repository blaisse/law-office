import React from 'react';
import { contactData } from '../../utils/data';

const ContactData = ({ className }) => {
  return (
    <div className={className}>
      {/* <span>{contactData.email}</span> */}
      <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
      <a href={`tel:${contactData.phone}`}>tel. {contactData.phone}</a>
      <span>{contactData.address}</span>
      <span>Czynne: {contactData.open}</span>
    </div>
  );
}

export default ContactData;
