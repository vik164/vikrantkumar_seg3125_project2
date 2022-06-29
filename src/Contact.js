import {Container, Row, Col, Button, Form, FloatingLabel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ContactPage = () => {
    return ( 
        <div className="contact">
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Contact Us </strong></h1>
            <Container fluid>
                <Row className='d-flex align-items-center justify-content-center'>
                    <Col md={4}>
                            <FloatingLabel label="First Name">
                                <Form.Control size="lg" type="fname"/>
                            </FloatingLabel>
                    </Col>
                    <Col md={4}>
                        <Form>
                            <FloatingLabel label="Last Name">
                                <Form.Control size="lg" type="lname"/>
                            </FloatingLabel>
                        </Form>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-center' style={{marginTop:20}}>
                    <Col md={4}>
                        <Form>
                            <FloatingLabel label="Phone Number">
                                <Form.Control size="lg" type="phoneNum"/>
                            </FloatingLabel>
                        </Form>
                    </Col>

                    <Col md={4}>
                        <Form>
                            <FloatingLabel label="How did you hear about us?" >
                                <Form.Select type="lname">
                                    <option value="0" selected disabled>Select One</option>
                                    <option value="1">Internet</option>
                                    <option value="2">Newspaper</option>
                                    <option value="3">Friend</option>
                                    <option value="4">Other</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-center' style={{marginTop:20}}>
                    <Col md={8}>
                        <Form>
                            <FloatingLabel label="Email">
                                <Form.Control type="email"/>
                            </FloatingLabel>
                        </Form>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-center' style={{marginTop:20, marginBottom:-10}}>
                    <Col md={8}>
                        <Form>
                            <FloatingLabel label="Comments">
                                <Form.Control type="comment" style={{height:100}}/>
                            </FloatingLabel>
                        </Form>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-center' style={{marginTop:20}}>
                    <Col md={8}>
                        <Button size='lg' style={{width:'100%'}}> Submit </Button>
                    </Col>
                </Row>


                <Row className='bg-dark align-items-center justify-content-around' style={{marginTop:20}}>
                    <Col md={2} >
                        <img src={require("./Images/contact3.png")} alt="cars1" style={{height: '100%', width:' 100%', objectFit: 'scale-down'}}/>
                        <p style={{color:'white', textAlign:'center'}}>
                            588  Parkway Rd.<br></br> 
                            Ottawa, Ontario, K9N 0Y1 
                        </p>
                    </Col>

                    <Col md={2}>
                        <img src={require("./Images/contact1.png")} alt="cars1" style={{height: '100%', width:' 100%', objectFit: 'scale-down'}}/>
                        <p style={{color:'white', textAlign:'center'}}>
                            Phone Number: 613-765-0912<br></br> 
                            Fax Number:  613-896-2347
                        </p>
                    </Col>

                    <Col md={2}>
                        <img src={require("./Images/contact2.png")} alt="cars1" style={{height: '100%', width:' 100%', objectFit: 'scale-down'}}/>
                        <p style={{color:'white', textAlign:'center', marginBottom:40}}>
                            exotic.drives@gmail.com<br></br> 
                        </p>
                    </Col>
                </Row>


            </Container>
            
        </div>
     );
}
 
export default ContactPage;