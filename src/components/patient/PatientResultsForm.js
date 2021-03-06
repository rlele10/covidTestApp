import React, { PureComponent } from 'react';
import { Container, Grid, Form} from 'semantic-ui-react';
import { SubmitButton } from '../styles/Button';
import { withRouter, NavLink } from 'react-router-dom';
import Disclaimer from '../shared/Disclaimer';
import OrcaLogo from '../images/OrcaLogo';

class PatientResultsForm extends PureComponent {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

    event.preventDefault();
    const userData = new FormData(event.target);
  
    let url = 'https://api.airtable.com/v0/appKhP0lyazMGCfUR/Tests/'+userData.get('test_id')+'/?api_key=keyKIECB3GLzSZLdQ'
    fetch(url)
      .then((resp) => resp.json())
      .then(data => {
        if(data.error)
         {
         alert("Test result not found. Please double check you access code (copy and paste from email), last name, and birth date. Ensure there are no spaces in entries.")
         }
        else{
         if(userData.get('last_name')== data.fields.Patient_Last_Name && Object.values(data.fields.Patient_DOB)==userData.get('birth_day')){  
      
          const { history } = this.props;
          if(history)
                {
                  history.push({ 
                    pathname: '/view-result',
                    state : data.fields
                  });
                }
            
         }
         else{

           alert("Record does not match. Please enter correct details")
         }
         }
      }).catch(err => {
       
        // Error :(
      });
  }

  render() {

    return (

    <Container>
        <NavLink to="/" >
          <OrcaLogo></OrcaLogo>
        </NavLink>
          <Grid centered >
              <Grid.Row >
                  <Grid.Column width={12}>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Field>
                              <Form.Input 
                                label="Access Code" 
                                placeholder="Email Access Code" 
                                name = "test_id"
                                required
                              />
                          </Form.Field>
                          <Form.Field>
                              <Form.Input 
                                label="Last Name" 
                                placeholder="Last Name" 
                                name = "last_name"
                                required
                              />
                          </Form.Field>
                          <Form.Field>
                              <Form.Input 
                                label="Date of Birth" 
                                placeholder="yyyy-mm-dd"
                                type="date" 
                                name = "birth_day"
                                required
                              />
                          </Form.Field>
                          <SubmitButton  type="submit" >View Result</SubmitButton>
                      </Form>
                  </Grid.Column>
              </Grid.Row>
              <Disclaimer></Disclaimer>
          </Grid>
    </Container>

      );
    }
  }
  
  
  export default withRouter(PatientResultsForm);


