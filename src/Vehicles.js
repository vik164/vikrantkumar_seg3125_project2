import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const VehiclesPage = () => {
    return ( 
        <div className="vehicles">
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Our Vehicles </strong></h1>
            <div className='text-end'>
                <Button className='bg-info' size='lg' href="/Reserve" style={{fontFamily:"serif", marginTop:4, marginRight:40}}> Filter </Button>
                <hr></hr>
            </div>
            
            <Container fluid style={{fontFamily:"serif", textAlign:'center'}}>
                <Row md={true} style={{marginTop:15, marginBottom:15}}>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Lamborghini Countach </strong></Card.Header>
                            <Card.Img src={require("./Images/v1.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>

                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Ferrari F40 </strong></Card.Header>
                            <Card.Img src={require("./Images/v2.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>

                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Porsche 918 Spyder </strong></Card.Header>
                            <Card.Img src={require("./Images/v3.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>

                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Lamborghini Murcielago </strong></Card.Header>
                            <Card.Img src={require("./Images/v4.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row md={true} style={{marginTop:15, marginBottom:15}}>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Porsche Carrera GT </strong></Card.Header>
                            <Card.Img src={require("./Images/v5.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>

                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Mercedes Benz SLS AMG Black Series </strong></Card.Header>
                            <Card.Img src={require("./Images/v6.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>

                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Bugatti Chiron </strong></Card.Header>
                            <Card.Img src={require("./Images/v7.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>

                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Bugatti Veyron </strong></Card.Header>
                            <Card.Img src={require("./Images/v8.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row md={true} style={{marginTop:15, marginBottom:15}}>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Lamborghini Aventador SVJ </strong></Card.Header>
                            <Card.Img src={require("./Images/v9.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>
                    
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Lamborghini Veneno </strong></Card.Header>
                            <Card.Img src={require("./Images/v10.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>

                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Lexus LFA </strong></Card.Header>
                            <Card.Img src={require("./Images/v11.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>

                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> McLaren Senna </strong></Card.Header>
                            <Card.Img src={require("./Images/v12.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row md={true} style={{marginTop:15, marginBottom:15}}>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Dodge Viper ACR </strong></Card.Header>
                            <Card.Img src={require("./Images/v13.jpg")} variant='top' style={{width: '24.9rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>

                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Chevrolet Corvette C7 ZR1 </strong></Card.Header>
                            <Card.Img src={require("./Images/v1444.jpg")} variant='top' style={{width: '24.9rem', height:'16rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>

                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Ferrari F50 </strong></Card.Header>
                            <Card.Img src={require("./Images/v15.jpg")} variant='top' style={{width: '24.9rem', height:'16rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More </Button>
                        </Card>
                    </Col>

                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '25rem'}} text='light' bg='dark'>
                            <Card.Header><strong> Pagani Huayra BC </strong></Card.Header>
                            <Card.Img src={require("./Images/v16.jpg")} variant='top' style={{width: '24.9rem', height:'16rem', margin:0, padding:0}}></Card.Img>
                            <Button size='md' href="/Reserve" style={{marginTop:4}}> Learn More</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default VehiclesPage;