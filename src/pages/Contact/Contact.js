import React from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col
} from 'reactstrap'

const Contact = () => {
  return (
    <>
    <Container>
      {/* <br></br>
      <h1>Contact</h1>
      <hr></hr> */}
      <Row>
        <Col xs="8">
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleMessage">Message</Label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Contact