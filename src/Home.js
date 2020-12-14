import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img0 from './assets/Home/room-5.jpg'
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

class Home extends Component {
    constructor() {
        super();
        this.state = {
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

    onsubmit = (e) => {
        e.preventDefault();
        const curr_state = { phone_number: this.state.phone_number, name: this.state.name, email: this.state.email, message: this.state.message, userType: "USER" }
        console.log(curr_state + "*******");
        if (curr_state.phone_number == null || curr_state.email == null || curr_state.name == null || curr_state.message == null) {
            document.getElementById("message_contact2").innerHTML = ""
            document.getElementById("message_contact").innerHTML = ""
            document.getElementById("message_contact2").innerHTML = "Please fill all details!"
            return;
        }
        axios.post('http://eventstan.com:3001/user/contactUs',
            curr_state
        )
            .then((resp) => {
                document.getElementById("message_contact2").innerHTML = ""
                document.getElementById("message_contact").innerHTML = ""
                document.getElementById("message_contact").innerHTML = "Thanks for contacting, Our Member reach out to you soon"
            })
            .catch((err) => {
                document.getElementById("message_contact2").innerHTML = ""
                document.getElementById("message_contact").innerHTML = ""
                document.getElementById("message_contact2").innerHTML = "Please fill all details!"
            });
    }
    render() {
        return (
            <div className="App">
                <div className="upper_part">
                    <div className="mob" style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '15px', paddingRight: '15px', maxWidth: "1140px", margin: '5px auto' }}>
                        <div style={{ display: 'flex' }}>
                            <a href="/eventstan" class="navbar-brand">Event<span className="colored">stan</span></a>
                            <input style={{ marginLeft: '15px', borderRadius: '8px' }} type="text" placeholder="Search here.." />

                        </div>
                        <div style={{ display: 'flex' }}>
                            <Button className="mob_become_p" href="/professional" style={{ backgroundColor: "#F47824" }}>Become a Professional</Button>
                            <Button style={{ backgroundColor: "#F47824", marginLeft: '15px' }}>Request for Demo</Button>
                            <Button style={{ backgroundColor: "#F47824", marginLeft: '15px' }}>Menu</Button>

                        </div>


                    </div>
                    <div className="banner-content">
                        <h2 className="banner-title">We don’t just create events we create memories</h2>
                        <p className="banner-text">EVENTSTAN is where all your personal and corporate event needs meet under one roof. You choose, and we deliver.</p>
                        <Button href="/create-event" style={{ backgroundColor: "white", color: 'black' }}>Create an Event</Button>
                        <Button style={{ backgroundColor: "white", color: 'black', marginLeft: '10px' }}>Hire Professional</Button>
                    </div>
                </div>
                <div className="bg-dark-yellow">
                    <div>
                        <Container>
                            <Row>
                                <Col xs={12} md={5}>
                                    <div className="video-section">
                                        <img class="img-fluid w-100 border-radius" src={img0} />
                                    </div>
                                </Col>
                                <Col xs={12} md={5} style={{ paddingTop: '25px' }}>
                                    <h2 class="title">Who we are?</h2>
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
                        <h2 style={{ color: 'black', textAlign: 'center' }} className="title">What makes us different from other <br />  applications?</h2>
                        {/* <div style={{ textAlign: 'center' }}><Button style={{ backgroundColor: "#F47824" }}>Become a Professional</Button>
              </div> */}
                        <div className="mob" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div class="card">
                                <img src={img1} alt="" class="mb-4" />
                                <h3> Broad spectrum of events  </h3>
                                <p>
                                    EVENTSTAN is all about variety and versatility. Contact us for birthdays, weddings, anniversaries, corporate events, live concerts, product launch, and even college events.
                    </p>
                            </div>
                            <div class="card">
                                <img src={img2} alt="" class="mb-4" />
                                <h3>Completly customizable</h3>
                                <p>
                                    There are no hard and fast packages that you have to pick from. EVENTSTAN gives you complete freedom to choose what you want.            </p>
                            </div>
                            <div class="card">
                                <img src={img3} alt="" class="mb-4" />
                                <h3>Get a pro on demand</h3>
                                <p>
                                    We don’t stop at creating custom event packages, for we also have comperes, DJs, and many other Pros expert in their work.
   </p>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="joining-us-bg space">
                    <Container>
                        <h2 style={{ color: 'black', textAlign: 'center' }} className="title">Benifits of joining us</h2>
                        {/* <div style={{ textAlign: 'center' }}><Button style={{ backgroundColor: "#F47824" }}>Become a Professional</Button>
              </div> */}
                        <div className="mob" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div class="card cardy">
                                <img src={img4} alt="" class="mb-4" />
                                <h3> Complete peace of mind  </h3>
                                <p>
                                    EVENTSTAN is all about punctuality and commitment, that’s what we strive for.
                    </p>
                            </div>
                            <div class="card cardy">
                                <img src={img5} alt="" class="mb-4" />
                                <h3>Quality of service</h3>
                                <p>
                                    EVENTSTAN is driven by the most important growth aspect: Client Satisfaction.
                    </p>
                            </div>
                            <div class="card cardy">
                                <img src={img6} alt="" class="mb-4" />
                                <h3> Memories that matter  </h3>
                                <p>
                                    Make memories with your guests, leave all the event related work to us.
                    </p>
                            </div>
                            <div class="card cardy">
                                <img src={img7} alt="" class="mb-4" />
                                <h3> Successful events</h3>
                                <p>
                                    Awesome events become the talk of the town, it’s your turn to become one.
                    </p>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className="application_sec para3" >
                    <Container>
                        <h2 style={{ color: 'black', textAlign: 'center' }} className="title">Want to join us as a professional?</h2>
                        <br />
                        <div style={{ textAlign: 'center' }}><Button style={{ backgroundColor: "#F47824" }} href="/professional#contact_ext">Become a Professional</Button>
                        </div>
                        <br />
                        <div className="mob" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div class="card">
                                <img src={img10} alt="" class="mb-4" />
                                <h3>Introduce yourself </h3>
                                <p>
                                    Who you are, what you do, what do you love the most about what you do, things that matter.
                    </p>
                            </div>
                            <div class="card">
                                <img src={img11} alt="" class="mb-4" />
                                <h3> Get your dashboard </h3>
                                <p>
                                    Get all the required information and data at one place. Be more efficient and more productive.
                    </p>
                            </div>
                            <div class="card">
                                <img src={img9} alt="" class="mb-4" />
                                <h3> Create your marketplace </h3>
                                <p>
                                    Connect with clients from all over the region and offer your services without breaking a sweat.
                    </p>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className="Contact_sec mr-0">
                    <Container className="contact_container">
                        <h2 style={{ color: 'black', textAlign: 'center' }} className="title">Contact us</h2>
                        <br />
                        <form onSubmit={this.onsubmit}>
                            <div class="form-group">
                                <label>Full name</label>
                                <input required onChange={this.onchange} type="text" class="form-control" name="name" placeholder="Enter your name" />
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <div class="form-group">
                                        <label>Mobile number</label>
                                        <input required onChange={this.onchange} type="number" name="phone_number" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <div class="form-group">
                                        <label >Email ID</label>
                                        <input required onChange={this.onchange} type="email" class="form-control" name="email" placeholder="Enter Email ID " />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label >Message</label>
                                <textarea required onChange={this.onchange} class="form-control" rows="6" name="message" placeholder="Write here"></textarea>
                            </div>
                            <h6 id="message_contact" style={{ color: 'green' }}></h6>
                            <h6 id="message_contact2" style={{ color: 'red' }}></h6>
                            <Button type="submit" className="btn">Submit</Button>
                        </form>
                    </Container>
                </div>

            </div>
        );

    }

}

export default Home;
