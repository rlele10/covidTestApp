import React from 'react';
import OrcaLogo from '../images/OrcaLogo';
import {  Header } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";


const PatientIntakeForm = props => {
  console.log(props)
 
    return (
      <>
        <NavLink to="/" >
          <OrcaLogo></OrcaLogo>
        </NavLink>
        <Header as='h2' textAlign='center'>Patient Intake Form</Header>
          <div style={{textAlign: 'center'}}>
            <iframe 
              title="Patient Form" src="https://airtable.com/embed/shrEeksweHw0CKsEj?backgroundColor=purple" frameborder="0" onmousewheel="" width="75%" height="1000" style={{marginBottom: '4em'}}>
            </iframe>
          </div>
      </>
    );
};

export default PatientIntakeForm;

