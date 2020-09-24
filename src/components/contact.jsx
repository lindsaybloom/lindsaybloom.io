import React from 'react';
import {
  Box,
  Heading,
  Text,
  Anchor,
  ResponsiveContext,
  Form,
  FormField,
  TextInput,
  TextArea,
  Button,
} from 'grommet';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  border-radius: 20px;
  border: 2px solid;
`;

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const Contact = (props) => {
  const size = React.useContext(ResponsiveContext);
  const boxMarginBottom = size === 'xsmall' || size === 'small' ? 'xlarge' : '0';
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => alert('Your submission has been received. Thank you for reaching out!'))
      .catch((error) => alert(error));
  };

  return (
    <section id="contact">
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box margin={{ top: 'large', bottom: boxMarginBottom }} align="center">
            <Heading>Get in touch with me!</Heading>
            <Text>
              Please email me directly at
              {' '}
              <Anchor href="mailto: lindsaybloomdev@gmail.com">lindsaybloomdev@gmail.com</Anchor>
              .
            </Text>

            <Anchor margin={{ top: 'large' }} href="mailto: lindsaybloomdev@gmail.com">
              <StyledBox height="80px" width="150px" align="center" justify="center">
                <Text>Email me!</Text>
              </StyledBox>
            </Anchor>

            <Text margin={{ top: 'large', bottom: 'large' }}>Or, fill out this form!</Text>

            <Form
              id="contact-form"
              onSubmit={(e) => {
                e.target.reset();
                alert('Your submission has been received. Thank you for reaching out!');
              }}
              method="post"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <Box direction="row">
                <FormField
                  name="firstname"
                  htmlfor="input-firstname"
                  label="First Name"
                  margin={{ right: 'large' }}
                >
                  <TextInput id="input-firstname" name="firstname" onChange={handleChange} />
                </FormField>
                <FormField name="lastname" htmlfor="input-lastname" label="Last Name">
                  <TextInput id="input-lastname" name="lastname" onChange={handleChange} />
                </FormField>
              </Box>
              <FormField name="email" htmlfor="input-email" label="Email">
                <TextInput id="input-email" name="email" onChange={handleChange} />
              </FormField>
              <FormField name="message" htmlfor="input-message" label="Message">
                <TextArea id="input-message" name="message" onChange={handleChange} />
              </FormField>
              <Box margin={{ top: 'large' }} direction="row" gap="medium">
                <Button type="submit" primary label="Submit" />
              </Box>
            </Form>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </section>
  );
};

export default Contact;
