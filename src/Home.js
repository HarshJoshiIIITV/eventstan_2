import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img0 from './assets/home_box.png'
import img1 from './assets/landing page pngs/what ic 1@2x.png'
import img4 from './assets/landing page pngs/benefit 1@2x.png'
import img10 from './assets/landing page pngs/pro 1@2x.png'
import img2 from './assets/landing page pngs/what ic 2@2x.png'
import img3 from './assets/landing page pngs/what ic 3@2x.png'
import img6 from './assets/landing page pngs/benefit 3@2x.png'
import img7 from './assets/landing page pngs/benefit 4@2x.png'
import img5 from './assets/landing page pngs/benefit 2@2x.png'
import img8 from './assets/Home/group342.png'
import img9 from './assets/landing page pngs/pro 3@2x.png'
import img11 from './assets/landing page pngs/pro 2@2x.png'
import { Component } from 'react';
import axios from 'axios';
import Backdrop from './Backdrop/Backdrop';
import PopUp_contact from './PopUp_contact'
import { Link } from 'react-router-dom'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import event_success from './assets/extras/event success.svg'
import hire_pro from './assets/landing page pngs/hire pro.svg'
import why1 from './assets/landing page pngs/why 1.svg'
import why2 from './assets/landing page pngs/why 2.svg'
import why3 from './assets/landing page pngs/why 3.svg'
import why4 from './assets/landing page pngs/why 4.svg'
import why5 from './assets/landing page pngs/why 5.svg'

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
        if (curr_state.phone_number == null || !(curr_state.phone_number.length >= 10 && curr_state.phone_number.length <= 17)) {
            document.getElementById("message_contact2").innerHTML = ""
            document.getElementById("message_contact").innerHTML = ""
            document.getElementById("message_contact2").innerHTML = "Please fill mobile number correctly "
            setTimeout(
                () => {
                    document.getElementById("message_contact").innerHTML = "";
                    document.getElementById("message_contact2").innerHTML = "";
                },
                5000
            )
            return;
        }
        if (curr_state.email == null || curr_state.name == null || curr_state.message == null) {
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
                document.getElementById("message_contact2").innerHTML = "Please fill all details!"
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
                    <div class="header-top">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-9 col-md-11 col-lg-3 col-xl-3">
                                    <a href="/eventstan" class="navbar-brand">Event<span class="colored">stan</span></a>
                                </div>
                                <div class="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 d-none d-lg-block">
                                    <div class="input-group md-form form-sm form-2 pl-0">
                                        <input className="form-control my-0 py-1" type="text" placeholder="Search here..." aria-label="Search" />
                                        <div className="input-group-append">
                                            <span class="input-group-text  lighten-3" id="basic-text1">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"></path>
                                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-5 col-sm-5 col-md-3 col-lg-5 col-xl-5 text-md-left text-xl-right d-none d-lg-block wrap">
                                    <Button href="/professional" className="btn event-bg-btn mr-lg-0 mr-xl-2">Become a Professional</Button>
                                    <Button className="btn event-bg-btn">Request for Demo</Button>
                                </div>
                                <div class="col-3 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                    {/* <div id="mySidenav" class="sidenav">
                                        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
                    <a class="nav-link active" href="home.html">Home</a>
                    <a class="nav-link" href="#">Who We Are</a>
                    <a class="nav-link" href="#">About Us</a>
                    <a class="nav-link" href="#">Benifit Of Joining Us </a>
                    <a class="nav-link" href="professional.html">Become a Professional</a>
                    <a class="nav-link" href="#">Testimonials</a>
                    <a class="nav-link" href="#">Download Our App</a>
                    <div class="sign-in-up-btn">
                        <button class="btn event-outline-btn mr-3">Sign Up</button>
                        <button class="btn event-bg-btn">Login</button>
                    </div>
                                    </div> */}
                                    <div style={{ display: 'flex' }}>
                                        <span className="navbar-toggler-icon"></span>
                                        <span className="navbar-toggler-icon"></span>
                                        <span className="navbar-toggler-icon"></span>
                                        <span class="ml-0 ml-sm-3 menu">Menu</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="mob" style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '15px', paddingRight: '15px', maxWidth: "1140px", margin: '5px auto' }}>
                        <a href="/eventstan" class="navbar-brand">Event<span className="colored">stan</span></a>
                        <Button className="button_homepage" href="/professional" style={{ backgroundColor: "#F47824" }}>Become a Professional</Button>
                    </div> */}

                    <div className="banner-content">
                        <h2 className="banner-title  bold_me">We don’t just create events we create memories</h2>
                        <p className="banner-text">EVENTSTAN is where all your personal and corporate event needs meet under one roof. You choose, and we deliver.</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }} className="homepage_banner_buttons">
                        <Link to="/create_event"><Button className="button_homepage" style={{ borderRadius: '12px', backgroundColor: "white", color: 'black', padding: '0px 20px' }}><img src={event_success} height="50px" />Create an event</Button></Link>
                        <Button className="button_homepage" href="" style={{ backgroundColor: "white", color: 'black', padding: '0px 20px', borderRadius: '12px', marginLeft: '20px' }}><img src={hire_pro} height="40px" />Hire Professional</Button>


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
                <div className="application_sec" id="section_2a">
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

                <div className="space">
                    <Container>
                        <h2 style={{ color: '#343a40', textAlign: 'center' }} className="title bold_me">Why Should You Be Here, On <br /> EVENTSTAN ?</h2>
                        <h4 className="bold_me" style={{ margin: '30px 0px 50px 0px', textAlign: 'center', color: 'grey' }}>Joining hands with us will bring you more than a bagful of benefits</h4>
                        <br />
                        <Row>
                            <Col md={4} xs={12} sm={12}>
                                <div class="section_last_card">
                                    <img src={why1} alt="" class="mb-4" />
                                    <h6 className="bold_me">Better Connections </h6>
                                    <p style={{ color: 'rgb(90, 90, 92)' }}>
                                        EVENTSTAN facilitates faster and more professional networking with your audience
</p>
                                </div>

                            </Col>
                            <Col md={4} xs={12} sm={12}>
                                <div class="section_last_card">
                                    <img src={why2} alt="" class="mb-4" />
                                    <h6 className="bold_me">Better Schedule Management</h6>
                                    <p style={{ color: 'rgb(90, 90, 92)' }}>
                                        With the in-built dashboard, EVENTSTAN ensures your appointment never clash
</p>
                                </div>

                            </Col>
                            <Col md={4} xs={12} sm={12}>
                                <div class="section_last_card">
                                    <img src={why3} alt="" class="mb-4" />
                                    <h6 className="bold_me">Better Output </h6>
                                    <p style={{ color: 'rgb(90, 90, 92)' }}>
                                        A streamlined scheduling and faster closure helps you enhance your productivity
</p>
                                </div>

                            </Col>


                        </Row>

                        <Row className="second_slot">
                            <Col md={3} />
                            <Col md={3} xs={12} sm={12}>
                                <div class="section_last_card">
                                    <img src={why4} alt="" class="mb-4" />
                                    <h6 className="bold_me">Flexible Work</h6>
                                    <p style={{ color: 'rgb(90, 90, 92)' }}>
                                        Nobody will force you to do anything. Choose your event as and when you deem fit
</p>
                                </div>
                            </Col>
                            <Col md={3} xs={12} sm={12}>
                                <div class="section_last_card">
                                    <img src={why5} alt="" class="mb-4" />
                                    <h6 className="bold_me">No Hassles</h6>
                                    <p style={{ color: 'rgb(90, 90, 92)' }}>
                                        From payment concerns to coordinating with the client, everything will be handled by EVENTSTAN
</p>
                                </div>
                            </Col>
                            <Col md={3} />

                        </Row>
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
                {
                    this.state.popup ?
                        < PopUp_contact />
                        : null
                }
                { backdrop}
            </div >
        );

    }

}

export default Home;
