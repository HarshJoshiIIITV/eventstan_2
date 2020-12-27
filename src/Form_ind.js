import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Backdrop from './Backdrop/Backdrop';
import PopUp_contact from './PopUp_contact'

class Form_ind extends Component {
    constructor() {
        super();
        this.state = {
            popup: false,
            type: "1",
            email: "",
            phone_number: "",
            firstName: "",
            lastName: "",
            visaType: "",
            specilization: "",
            introduceYourself: "",
            emirates: "",

        }
    }
    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log(this.state);
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
            email: "",
            phone_number: "",
            firstName: "",
            lastName: "",
            visaType: "",
            specilization: "",
            introduceYourself: "",
            emirates: "",
        })
    }



    valid = (curr_state) => {
        const {
            email,
            phone_number,
            firstName,
            lastName,
            visaType,
            specilization,
            introduceYourself,
            emirates } = curr_state;
        if (email.length == 0 || firstName.length == 0 || lastName.length == 0 || emirates.length == 0 || emirates.localeCompare("select") == 0 || visaType.length == 0 || visaType.localeCompare("select") == 0 || specilization.length == 0 || specilization.localeCompare("select") == 0 || introduceYourself.length == 0 || introduceYourself.length == 0) {
            return false;
        }
        else {
            return true;
        }
    }

    onsubmit1 = (event) => {
        event.preventDefault();
        const curr_state = {
            type: "1",
            email: this.state.email,
            phone_number: this.state.phone_number,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            visaType: this.state.visaType,
            specilization: this.state.specilization,
            introduceYourself: this.state.introduceYourself,
            emirates: this.state.emirates,

        }
        if (curr_state.phone_number == undefined || !(curr_state.phone_number.length >= 10 && curr_state.phone_number.length <= 17)) {
            document.getElementById("message_contact2").innerHTML = ""
            document.getElementById("message_contact").innerHTML = ""
            document.getElementById("message_contact2").innerHTML = "Please fill mobile number correctly!"
            setTimeout(
                () => {
                    document.getElementById("message_contact").innerHTML = "";
                    document.getElementById("message_contact2").innerHTML = "";
                },
                5000
            )
            return;
        }
        if (!this.valid(curr_state)) {
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
        axios.post('https://api.eventstan.com/user/professionalContactUs',
            curr_state
        )
            .then((resp) => {
                document.getElementById("message_contact2").innerHTML = ""
                document.getElementById("message_contact").innerHTML = ""
                // document.getElementById("message_contact").innerHTML = "Thanks for contacting, Our Member reach out to you soon"
                this.set_null();
                this.toogle_popup();
                setTimeout(
                    () => {
                        document.getElementById("message_contact").innerHTML = "";
                        document.getElementById("message_contact2").innerHTML = "";
                    },
                    5000
                );
                var frm = document.getElementById('abc1');
                frm.reset();  // Reset all form data

                document.getElementById('abc5').value = '';
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
        let backdrop;
        if (this.state.popup) {
            backdrop = <Backdrop click={this.backdropCLickHandler} />;
        }
        return (
            <form autoComplete="nope" id="abc1" onSubmit={this.onsubmit1}>
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label>First name</label>
                            <input pattern="[A-Za-z ]{1,32}" autoComplete="nope" id="abc2" required onChange={this.onchange} name="firstName" type="text" class="form-control" placeholder="Enter first name " />
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label >Last name</label>
                            <input pattern="[A-Za-z ]{1,32}" autoComplete="nope" id="abc3" required name="lastName" onChange={this.onchange} type="text" class="form-control" placeholder="Enter last name " />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label >Email ID</label>
                            <input required name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" autoComplete="nope" id="abc4" onChange={this.onchange} type="email" class="form-control" placeholder="Enter Email ID " />
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label>Mobile Number</label>
                            <PhoneInput
                                value={this.state.phone_number}
                                id="abc5"
                                international
                                countryCallingCodeEditable={false}
                                defaultCountry="AE"
                                placeholder="Enter Mobile number"
                                onChange={this.on_tele_change} />

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label >Emirates</label>
                            <select autoComplete="nope" required onChange={this.onchange} id="emirates" name="emirates" class="form-control" placeholder="Select">
                                <option value="">Select</option>
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
                            <select autoComplete="nope" required onChange={this.onchange} id="visa" name="visaType" class="form-control" placeholder="Select">
                                <option value="">Select</option>
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
                            <select autoComplete="nope" required onChange={this.onchange} id="roles" name="specilization" class="form-control" placeholder="Select">
                                <option value="">Select</option>
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
                    <textarea required type="text" autoComplete="nope" id="abc6" onChange={this.onchange} name="introduceYourself" class="form-control" rows="6" placeholder="Write here"></textarea>
                </div>
                <h6 id="message_contact" style={{ color: 'green' }}></h6>
                <h6 id="message_contact2" style={{ color: 'red' }}></h6>
                <Button type="submit" className="btn">Submit</Button>
                {this.state.popup ?
                    < PopUp_contact />
                    : null}
                {backdrop}
            </form>


        )
    }


}
export default Form_ind;