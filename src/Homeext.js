import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import client1 from './assets/Homeext/client1.png'
import client2 from './assets/Homeext/client2.png'
import client3 from './assets/Homeext/client3.png'
import client4 from './assets/Homeext/client4.png'
import client5 from './assets/Homeext/client5.png'
import './Homeext.css';
import React, { Component } from 'react';
import axios from 'axios';

class Homeext extends Component {
    constructor() {
        super();
        this.state = {
            individual: true,
            type: "",
            email: "",
            phone_number: "",
            firstName: "",
            lastName: "",
            visaType: "",
            specilization: "",
            introduceYourself: "",
            emirates: "",
            Bemail: "",
            Bname: "",
            BcontactNumber: "",
            contactPerson: "",
            Ospecilization: "",
            OintroduceYourself: "",
            city: ""
        }
    }

    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state)
    }

    get_state = (x) => {
        var curr_state;
        if (x == "1") {
            curr_state = {
                type: 1,
                email: this.state.email,
                phone_number: this.state.phone_number,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                visaType: this.state.visaType,
                specilization: this.state.specilization,
                introduceYourself: this.state.introduceYourself,
                emirates: this.state.emirates,
            }
        }
        else {
            curr_state = {
                type: 2,
                Bemail: this.state.Bemail,
                Bname: this.state.Bname,
                BcontactNumber: this.state.BcontactNumber,
                contactPerson: this.state.contactPerson,
                Ospecilization: this.state.Ospecilization,
                OintroduceYourself: this.state.OintroduceYourself,
                city: this.state.city
            }
        }
        return curr_state;
    }

    valid = (curr_state) => {
        if (curr_state.type == 1) {
            const {
                email,
                phone_number,
                firstName,
                lastName,
                visaType,
                specilization,
                introduceYourself,
                emirates } = curr_state;
            if (email.length == 0 || phone_number.length == 0 || firstName.length == 0 || lastName.length == 0 || emirates.length == 0 || visaType.length == 0 || specilization.length == 0 || introduceYourself.length == 0 || introduceYourself.length == 0) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            const {
                Bemail,
                Bname,
                BcontactNumber,
                contactPerson,
                Ospecilization,
                OintroduceYourself,
                city
            } = curr_state
            if (Bemail.length == 0 || Bname.length == 0 || BcontactNumber.length == 0 || contactPerson.length == 0 || Ospecilization.length == 0
                || OintroduceYourself.length == 0 || city.length == 0) {
                return false;
            }
            else {
                return true;
            }
        }
    }

    onsubmit1 = (event, x) => {
        event.preventDefault();
        const curr_state = this.get_state(x)
        console.log(curr_state + "*******");
        console.log(x + "*******");
        if (!this.valid(curr_state)) {
            alert("Please fill complete details");
            return;
        }
        axios.post('http://eventstan.com:3001/user/professionalContactUs',
            curr_state
        )
            .then((resp) => {
                console.log("Response**");
                alert("Submitted successfully");
            })
            .catch((err) => {
                console.log(err);
                alert("Please fill complete details");
            });
    }

    toggle_form = () => {
        this.setState({
            individual: false
        });
    }
    toggle_form2 = () => {
        this.setState({
            individual: true
        });
    }
    render() {
        return (
            <div className="homeext">
                <div className="upper_part">
                    <div className="mob" style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '15px', paddingRight: '15px', maxWidth: "1140px", margin: '5px auto' }}>
                        <a href="/eventstan" class="navbar-brand">Event<span className="colored">stan</span></a>
                    </div>
                    <div className="banner-content">
                        <h2 className="banner-title">Want to join EVENTSTAN as a professional?</h2>
                        <p className="banner-text">You’ve made the right choice. let’s get started!</p>
                        <Button href="#contact_ext" style={{ backgroundColor: "#F47824" }} >Signup as a Professional</Button>
                    </div>
                </div>
                <div style={{ textAlign: 'center', backgroundColor: '#fef3e6', padding: '5% 0%' }} className="para" >
                    <div>
                        <Container>
                            <Row>
                                <Col xs={12} md={12}>
                                    <h2 class="title" style={{
                                        color: "#2D2D2D",
                                        fontFamily: "Campton"
                                    }}>EVENTSTAN is where you get to work with the most prestigious clients. we’ll take your career to unprecedented heights.</h2>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </div>
                <div style={{ textAlign: 'center', padding: '5% 0%' }}>
                    <div>
                        <Container>
                            <h4 style={{ color: '#F47824', fontWeight: 'bold' }}>We’d love to have you onboard.</h4>
                            <h2 className="title" style={{ color: '#2D2D2D', fontFamily: 'Campton', fontWeight: 'bold' }}>Why should you be here, on <br /> EVENTSTAN?</h2>
                            <h3>Joining hands with us will bring you more than a <br /> bagful of benefits.</h3>

                        </Container>
                    </div>
                </div>
                <div className="client_section">
                    <Row style={{ margin: '0px', padding: '0px' }}>
                        <Col md={6} style={{ paddingLeft: '0px', marginLeft: '0px' }}>
                            <img src={client1} />
                        </Col>
                        <Col md={6}>
                            <div style={{ position: 'relative', top: '30%' }}>
                                <h2>Better connections</h2>
                                <br />
                                <h3>EVENTSTAN facilitates faster and more professional networking with your audience.</h3>

                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row style={{ margin: '0px', padding: '0px' }}>
                        <Col md={6}>
                            <div style={{ position: 'relative', top: '30%' }}>
                                <h2>Better schedule management</h2>
                                <br />
                                <h3>With the in-built dashboard, EVENTSTAN ensures your appointments never clash.</h3>

                            </div>
                        </Col>
                        <Col md={6} style={{ marginRight: '0px', paddingRight: '0px', textAlign: 'right' }}>
                            <img src={client2} />
                        </Col>
                    </Row>
                    <br />
                    <Row style={{ margin: '0px', padding: '0px' }}>
                        <Col md={6} style={{ paddingLeft: '0px', marginLeft: '0px' }}>
                            <img src={client3} />
                        </Col>
                        <Col md={6}>
                            <div style={{ position: 'relative', top: '30%' }}>
                                <h2>Better output</h2>
                                <br />
                                <h3>A streamlined scheduling and faster closure helps you enhance your productivity.</h3>

                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row style={{ margin: '0px', padding: '0px' }}>

                        <Col md={6}>
                            <div style={{ position: 'relative', top: '30%' }}>
                                <h2>Flexible work</h2>
                                <br />
                                <h3>Nobody will force you to do anything. choose your event as and when you deem fit.</h3>

                            </div>
                        </Col>
                        <Col md={6} style={{ marginRight: '0px', paddingRight: '0px', textAlign: 'right' }}>
                            <img src={client4} />
                        </Col>
                    </Row>
                    <br />
                    <Row style={{ margin: '0px', padding: '0px' }}>
                        <Col md={6} style={{ paddingLeft: '0px', marginLeft: '0px' }}>
                            <img src={client5} />
                        </Col>
                        <Col md={6}>
                            <div style={{ position: 'relative', top: '30%' }}>
                                <h2>No hassles</h2>
                                <br />
                                <h3>From payment concerns to coordinating with the client, everything will be handled by EVENTSTAN</h3>

                            </div>
                        </Col>
                    </Row>
                    <br />
                </div>
                <div className="Contact_sec mr-0">
                    <Container className="contact_container" id="contact_ext">
                        <h2 style={{ color: 'black', textAlign: 'center' }} className="title">Let’s get to know you better.</h2>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'left' }}>
                            <li class="nav-item" onClick={this.toggle_form2}>
                                Individual
                            </li>
                            <li class="nav-item" onClick={this.toggle_form}>
                                Organisation
                            </li>
                        </div>
                        <br />
                        {
                            this.state.individual ? (
                                <form onSubmit={(e) => this.onsubmit1(e, "1")}>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label>First name</label>
                                                <input required onChange={this.onchange} name="firstName" type="text" class="form-control" placeholder="Enter first name " />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label >Last name</label>
                                                <input required name="lastName" onChange={this.onchange} type="text" class="form-control" placeholder="Enter last name " />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label >Email ID</label>
                                                <input required name="email" onChange={this.onchange} type="email" class="form-control" placeholder="Enter Email ID " />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label>Contact number</label>
                                                <input required onChange={this.onchange} type="number" name="phone_number" class="form-control" placeholder="Enter Contact number " />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label >Emirates</label>
                                                <select required onChange={this.onchange} id="emirates" name="emirates" class="form-control" placeholder="Select">
                                                    <option value="select">Select</option>
                                                    <option value="abu dhabi">Abu dhabi</option>
                                                    <option value="dubai">Dubai</option>
                                                    <option value="ajman">Ajman</option>
                                                    <option value="fujariah">Fujariah</option>
                                                    <option value="rak">Ras al Khaimah</option>
                                                    <option value="sharjah">Sharjah</option>
                                                    <option value="uaq">Umm al quwain</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label>Visa type</label>
                                                <select required onChange={this.onchange} id="visa" name="visaType" class="form-control" placeholder="Select">
                                                    <option value="select">Select</option>
                                                    <option value="residence">Residence</option>
                                                    <option value="employment">Emploment</option>
                                                    <option value="visit">Visit</option>
                                                    <option value="student">Student</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label >Specilization</label>
                                                <select required onChange={this.onchange} id="roles" name="specilization" class="form-control" placeholder="Select">
                                                    <option value="select">Select</option>
                                                    <option value="anchors">Anchors/Mcs</option>
                                                    <option value="celebrity">Celebrity</option>
                                                    <option value="dj">DJ</option>
                                                    <option value="singers">Singers</option>
                                                    <option value="live band">Live Band</option>
                                                    <option value="instrumentalist">Instrumentalist</option>
                                                    <option value="photographer">Photographer</option>
                                                    <option value="magician">Magician</option>
                                                    <option value="comedian">Comedian</option>
                                                    <option value="dancers">Dancers</option>
                                                    <option value="choreohraphers">Choreohraphers</option>
                                                    <option value="bdayenterntainers">B'day enterntainers</option>
                                                    <option value="bartender">Bartender</option>
                                                    <option value="specialshows">Special Shows</option>
                                                    <option value="venueprovider">Venue provider</option>
                                                    <option value="decor">Decor</option>
                                                    <option value="caters">Caters</option>
                                                    <option value="shishaguy">Shisha Guy</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label >Briefly introduce yourself: ( include links /references)</label>
                                        <textarea required type="text" onChange={this.onchange} name="introduceYourself" class="form-control" rows="6" placeholder="Write here"></textarea>
                                    </div>
                                    <Button type="submit" className="btn">Submit</Button>
                                </form>

                            ) :
                                <form onSubmit={(e) => this.onsubmit1(e, "2")} >
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label>Business name</label>
                                                <input required onChange={this.onchange} name="Bname" type="text" class="form-control" placeholder="Enter business name " />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label >Business Email</label>
                                                <input required name="Bemail" onChange={this.onchange} type="email" class="form-control" placeholder="Enter business email " />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label >Contact person</label>
                                                <input required name="contactPerson" onChange={this.onchange} type="text" class="form-control" placeholder="Enter person name " />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label>Business contact number</label>
                                                <input required name="BcontactNumber" onChange={this.onchange} type="number" class="form-control" placeholder="Enter Contact number " />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label >City</label>
                                                <select required onChange={this.onchange} id="cars" name="city" class="form-control" placeholder="Select">
                                                    <option value="select">Select</option>
                                                    <option value="abu dhabi">Abu dhabi</option>
                                                    <option value="dubai">Dubai</option>
                                                    <option value="ajman">Ajman</option>
                                                    <option value="fujariah">Fujariah</option>
                                                    <option value="rak">Ras al Khaimah</option>
                                                    <option value="sharjah">Sharjah</option>
                                                    <option value="uaq">Umm al quwain</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label >Specilization</label>
                                                <select required onChange={this.onchange} id="cars" name="Ospecilization" class="form-control" placeholder="Select">
                                                    <option value="select">Select</option>
                                                    <option value="anchors">Anchors/Mcs</option>
                                                    <option value="celebrity">Celebrity</option>
                                                    <option value="dj">DJ</option>
                                                    <option value="singers">Singers</option>
                                                    <option value="live band">Live Band</option>
                                                    <option value="instrumentalist">Instrumentalist</option>
                                                    <option value="photographer">Photographer</option>
                                                    <option value="magician">Magician</option>
                                                    <option value="comedian">Comedian</option>
                                                    <option value="dancers">Dancers</option>
                                                    <option value="choreohraphers">Choreohraphers</option>
                                                    <option value="bdayenterntainers">B'day enterntainers</option>
                                                    <option value="bartender">Bartender</option>
                                                    <option value="specialshows">Special Shows</option>
                                                    <option value="venueprovider">Venue provider</option>
                                                    <option value="decor">Decor</option>
                                                    <option value="caters">Caters</option>
                                                    <option value="shishaguy">Shisha Guy</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label >Briefly introduce yourself: ( include links /references)</label>
                                        <textarea required type="text" onChange={this.onchange} name="OintroduceYourself" class="form-control" rows="6" placeholder="Write here"></textarea>
                                    </div>
                                    <Button type="submit" className="btn">Submit</Button>
                                </form>

                        }
                    </Container>
                </div>


            </div>
        );
    }
}

export default Homeext;
