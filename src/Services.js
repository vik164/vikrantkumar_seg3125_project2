import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServicesPage = () => {
    return ( 
        <div className="services">
            <h1 className="text-center" style={{fontFamily:"serif", marginTop:15}}><strong> Our Services </strong></h1>
           
            <Container fluid style={{fontFamily:"serif"}} >
                <Row className='bg-dark' md={true} style={{marginBottom:15, padding:20}}>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '50rem'}}>
                            <Card.Img src={require("./Images/wed.jpg")} variant='top' style={{width: '49.9rem', height:'33rem'}}></Card.Img>
                            <Card.Body>
                                <Card.Title> Weddings </Card.Title>
                                <Card.Text>
                                    Dextra quod regio triones cum usu mentes iussit animalibus tegi praebebat terris aethera campos persidaque ventis adhuc ignotas permisit satus regna grandia iunctarum cepit igni ulla volucres cesserunt erat: exemit declivia terrae lumina aequalis duris undae tuba ardentior siccis tempora origo bracchia caligine norant auroram.
                                </Card.Text>
                                <Button href="/Reserve"> RESERVE NOW</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '50rem'}}>
                            <Card.Img src={require("./Images/grad.jpg")} variant='top' style={{width: '49.9rem', height:'33rem'}}></Card.Img>
                            <Card.Body>
                                <Card.Title> Graduation and Prom </Card.Title>
                                <Card.Text>
                                    Dextra quod regio triones cum usu mentes iussit animalibus tegi praebebat terris aethera campos persidaque ventis adhuc ignotas permisit satus regna grandia iunctarum cepit igni ulla volucres cesserunt erat: exemit declivia terrae lumina aequalis duris undae tuba ardentior siccis tempora origo bracchia caligine norant auroram.
                                </Card.Text>
                                <Button href="/Reserve"> RESERVE NOW</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <Row md={true} className='bg-dark' style={{marginTop:15, padding:20}}>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '50rem'}}>
                            <Card.Img src={require("./Images/ads.jpg")} variant='top'></Card.Img>
                            <Card.Body>
                                <Card.Title> Cinema and Advertisements </Card.Title>
                                <Card.Text>
                                    Dextra quod regio triones cum usu mentes iussit animalibus tegi praebebat terris aethera campos persidaque ventis adhuc ignotas permisit satus regna grandia iunctarum cepit igni ulla volucres cesserunt erat: exemit declivia terrae lumina aequalis duris undae tuba ardentior siccis tempora origo bracchia caligine norant auroram.
                                </Card.Text>
                                <Button href="/Reserve"> RESERVE NOW</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={true} className='d-flex align-items-center justify-content-center'>
                        <Card style={{width: '50rem'}}>
                            <Card.Img src={require("./Images/cor.jpg")} variant='top' style={{height: 450}}></Card.Img>
                            <Card.Body>
                                <Card.Title> Corparate </Card.Title>
                                <Card.Text>
                                    Dextra quod regio triones cum usu mentes iussit animalibus tegi praebebat terris aethera campos persidaque ventis adhuc ignotas permisit satus regna grandia iunctarum cepit igni ulla volucres cesserunt erat: exemit declivia terrae lumina aequalis duris undae tuba ardentior siccis tempora origo bracchia caligine norant auroram.
                                </Card.Text>
                                <Button href="/Reserve"> RESERVE NOW</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default ServicesPage;