import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img0 from './assets/home_box.png'
import img1 from './assets/Home/arrow_img.png'
import img4 from './assets/Home/group24.png'
import img10 from './assets/Home/group25.png'
import img2 from './assets/Home/arrow_img2.png'
import img3 from './assets/Home/arrow_img3.png'
import img6 from './assets/Home/group243.png'
import img7 from './assets/Home/group245.png'
import img5 from './assets/Home/group242.png'
import img8 from './assets/Home/group342.png'
import img9 from './assets/Home/group343.png'
import img11 from './assets/Home/dumble.png'
import { Component } from 'react';
import axios from 'axios';
import Backdrop from './Backdrop/Backdrop';
import PopUp_contact from './PopUp_contact'
import { Link } from 'react-router-dom'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import event_success from './assets/extras/event success.svg'
import hire_pro from './assets/landing page pngs/hire pro.svg'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            popup: false,
            phone_number: null,
            name: null,
            email: null,
            message: null,
        }
    }
    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    on_tele_change = (e) => {
        this.setState({ phone_number: e })
    }

    toogle_popup = () => {
        this.setState({
            popup: !this.state.popup
        })
    }
    backdropCLickHandler = () => {
        this.setState({
            popup: false,
        });

    }

    set_null = () => {
        this.setState({
            phone_number: null,
            name: null,
            email: null,
            message: null,

        })
    }

    onsubmit = (e) => {
        e.preventDefault();
        const curr_state = { phone_number: this.state.phone_number, name: this.state.name, email: this.state.email, message: this.state.message, userType: "USER" }
        console.log(curr_state)
        if (curr_state.phone_number == null || !(curr_state.phone_number.length >= 10 && curr_state.phone_number.length <= 17) || curr_state.email == null || curr_state.name == null || curr_state.message == null) {
            document.getElementById("message_contact2").innerHTML = ""
            document.getElementById("message_contact").innerHTML = ""
            document.getElementById("message_contact2").innerHTML = "Please fill all details!"
            setTimeout(
                () => {
                    document.getElementById("message_contact").innerHTML = "";
                    document.getElementById("message_contact2").innerHTML = "";
                },
                5000
            )
            return;
        }
        axios.post('https://api.eventstan.com/user/contactUs',
            curr_state
        )
            .then((resp) => {
                document.getElementById("message_contact2").innerHTML = ""
                document.getElementById("message_contact").innerHTML = ""
                this.set_null();
                // document.getElementById("message_contact").innerHTML = "Thanks for contacting, Our Member reach out to you soon"
                this.toogle_popup();
                var frm = document.getElementById('contact_abc');
                setTimeout(
                    () => {
                        document.getElementById("message_contact").innerHTML = "";
                        document.getElementById("message_contact2").innerHTML = "";
                    },
                    5000
                );
                frm.reset();  // Reset all form data
                document.getElementById('tele_1').value = '';

            })
            .catch((err) => {
                document.getElementById("message_contact2").innerHTML = ""
                document.getElementById("message_contact").innerHTML = ""
                document.getElementById("message_contact2").innerHTML = "Please fill correct details!"
                setTimeout(
                    () => {
                        document.getElementById("message_contact").innerHTML = "";
                        document.getElementById("message_contact2").innerHTML = "";
                    },
                    5000
                );
            });
    }
    render() {
        // console.log(this.state.phone_number)
        let backdrop;
        if (this.state.popup) {
            backdrop = <Backdrop click={this.backdropCLickHandler} />;
        }
        return (
            <div className="App">
                <div className="upper_part">
                    <div className="mob" style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '15px', paddingRight: '15px', maxWidth: "1140px", margin: '5px auto' }}>
                        <a href="/eventstan" class="navbar-brand">Event<span className="colored">stan</span></a>
                        <Button className="button_homepage" href="/professional" style={{ backgroundColor: "#F47824" }}>Become a Professional</Button>
                    </div>
                    <div className="banner-content">
                        <h2 className="banner-title  bold_me">We don’t just create events we create memories</h2>
                        <p className="banner-text">EVENTSTAN is where all your personal and corporate event needs meet under one roof. You choose, and we deliver.</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to="/create_event"><Button className="button_homepage" style={{ backgroundColor: "white", color: 'black', padding: '0px 20px' }}><img src={event_success} height="50px" />Create an event</Button></Link>
                        <Button className="button_homepage" href="" style={{ backgroundColor: "white", color: 'black', padding: '0px 20px', marginLeft: '20px' }}><img src={hire_pro} height="40px" />Hire Professional</Button>


                    </div>
                </div>
                <div className="bg-dark-yellow who_we_are">
                    <div>
                        <Container >
                            <Row >
                                <Col xs={12} md={5}>
                                    <div className="video-section">
                                        <img class="img-fluid w-100 border-radius" src={img0} />
                                    </div>
                                </Col>
                                <Col md={1} />
                                <Col xs={12} md={5} style={{ paddingTop: '25px' }}>
                                    <h2 class="title bold_me">Who we are?</h2>
                                    <p class="p-text">
                                        We are the perfect amalgam of technology and event planning &amp; organizing. We know what it takes to create a successful event. We do all the work so you can enjoy and share the jubilant mood with everyone. We make sure your event checklist is complete with all the shenanigans.
                                        .
                      </p>
                                    <p class="p-text">We bring life to every event, we are EVENTSTAN.</p>
                                </Col>
                            </Row>

                        </Container>

                    </div>
                </div>
                <div className="application_sec">
                    <Container>
                        <h2 style={{ color: '#343a40', textAlign: 'center' }} className="title bold_me">What makes us different from other <br />  applications?</h2>
                        {/* <div style={{ textAlign: 'center' }}><Button style={{ backgroundColor: "#F47824" }}>Become a Professional</Button>
              </div> */}
                        <div className="mob" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div class="card">
                                <img src={img1} alt="" class="mb-4" />
                                <h3 className="mob_head_2 bold_me"> Broad spectrum of events  </h3>
                                <p style={{ fontWeight: 'lighter', color: '#5a5a5c' }}>
                                    EVENTSTAN is all about variety and versatility. Contact us for birthdays, weddings, anniversaries, corporate events, live concerts, product launch, and even college events.
                    </p>
                            </div>
                            <div class="card">
                                <img src={img2} alt="" class="mb-4" />
                                <h3 className="mob_head_2 bold_me">Completly customizable</h3>
                                <p style={{ fontWeight: 'lighter', color: '#5a5a5c' }} style={{ fontWeight: 'lighter', color: '#5a5a5c' }}>
                                    There are no hard and fast packages that you have to pick from. EVENTSTAN gives you complete freedom to choose what you want.            </p>
                            </div>
                            <div class="card">
                                <img src={img3} alt="" class="mb-4" />
                                <h3 className="mob_head_2 bold_me">Get a pro on demand</h3>
                                <p style={{ fontWeight: 'lighter', color: '#5a5a5c' }}>
                                    We don’t stop at creating custom event packages, for we also have comperes, DJs, and many other Pros expert in their work.
   </p>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="joining-us-bg space">
                    <Container>
                        <h2 style={{ color: 'black', textAlign: 'center' }} className="title bold_me">Benifits of joining us</h2>
                        {/* <div style={{ textAlign: 'center' }}><Button style={{ backgroundColor: "#F47824" }}>Become a Professional</Button>
              </div> */}
                        <div className="mob" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div class="card cardy">
                                <img src={img4} alt="" class="mb-4" />
                                <h3 className="bold_me"> Complete peace of mind  </h3>
                                <p>
                                    EVENTSTAN is all about punctuality and commitment, that’s what we strive for.
                    </p>
                            </div>
                            <div class="card cardy">
                                <img src={img5} alt="" class="mb-4" />
                                <h3 className="bold_me">Quality of service</h3>
                                <p>
                                    EVENTSTAN is driven by the most important growth aspect: Client Satisfaction.
                    </p>
                            </div>
                            <div class="card cardy">
                                <img src={img6} alt="" class="mb-4" />
                                <h3 className="bold_me"> Memories that matter  </h3>
                                <p>
                                    Make memories with your guests, leave all the event related work to us.
                    </p>
                            </div>
                            <div class="card cardy">
                                <img src={img7} alt="" class="mb-4" />
                                <h3 className="bold_me"> Successful events</h3>
                                <p>
                                    Awesome events become the talk of the town, it’s your turn to become one.
                    </p>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className="application_sec para3" >
                    <Container>
                        <h2 style={{ color: '#343a40', textAlign: 'center' }} className="title bold_me">Want to join us as a professional?</h2>
                        <br />
                        <div style={{ textAlign: 'center' }}><Button style={{ backgroundColor: "#F47824" }} href="/professional#contact_ext">Become a Professional</Button>
                        </div>
                        <br />
                        <div className="mob" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div class="card">
                                <img src={img10} alt="" class="mb-4" />
                                <h3 className="bold_me">Introduce <br /> yourself </h3>
                                <p style={{ fontWeight: 'lighter', color: '#5a5a5c' }}>
                                    Who you are, what you do, what do you love the most about what you do, things that matter.
                    </p>
                            </div>
                            <div class="card">
                                <img src={img11} alt="" class="mb-4" />
                                <h3 className="bold_me"> Get your <br /> dashboard </h3>
                                <p style={{ fontWeight: 'lighter', color: '#5a5a5c' }}>
                                    Get all the required information and data at one place. Be more efficient and more productive.
                    </p>
                            </div>
                            <div class="card">
                                <img src={img9} alt="" class="mb-4" />
                                <h3 className="bold_me"> Create your marketplace </h3>
                                <p style={{ fontWeight: 'lighter', color: '#5a5a5c' }}>
                                    Connect with clients from all over the region and offer your services without breaking a sweat.
                    </p>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className="Contact_sec mr-0">
                    <Container id="contactform_home" className="contact_container">
                        <h2 style={{ color: '#2D2D2D', textAlign: 'center' }} className="title bold_me">Contact us</h2>
                        <br />
                        <form autoComplete="nope" id="contact_abc" onSubmit={this.onsubmit} >
                            <div class="form-group">
                                <label>Full name</label>
                                <input autoComplete="nope" pattern="[A-Za-z ]{1,32}" required onChange={this.onchange} type="text" class="form-control" name="name" placeholder="Enter your name" />
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <div class="form-group">
                                        <label>Mobile number</label>
                                        <PhoneInput
                                            value={this.state.phone_number}
                                            international
                                            countryCallingCodeEditable={false}
                                            defaultCountry="AE"
                                            id="tele_1"
                                            placeholder="Enter Mobile number"
                                            onChange={this.on_tele_change} />
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <div class="form-group">
                                        <label >Email ID</label>
                                        <input autoComplete="nope" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required onChange={this.onchange} type="email" class="form-control" name="email" placeholder="Enter Email ID " />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label >Message</label>
                                <textarea autoComplete="nope" required onChange={this.onchange} class="form-control" rows="6" name="message" placeholder="Write here"></textarea>
                            </div>
                            <h6 id="message_contact" style={{ color: 'green' }}></h6>
                            <h6 id="message_contact2" style={{ color: 'red' }}></h6>
                            <Button type="submit" className="btn">Submit</Button>
                        </form>
                    </Container>
                </div>
                {this.state.popup ?
                    < PopUp_contact />
                    : null}
                {backdrop}
            </div>
        );

    }

}

export default Home;
