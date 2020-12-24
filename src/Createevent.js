import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import './Createevent.css';
import card_pic from './assets/create_event/card.jpg'
import PopUp from './PopUp'
import Name_popup from './Name_popup'
import Backdrop from './Backdrop/Backdrop';
import axios from 'axios';
import search_ico from './assets/landing page pngs/search.svg'

class Createevent extends Component {
    constructor() {
        super();
        this.state = {
            popup_first: false,
            popup: false,
            title: '',
            filters: null,
            event_types: null,
            target_event_id: null,
            search_input: ''
        }
    }
    componentDidMount() {
        axios.get('https://api.eventstan.com/user/eventCategories').then((resp) => {
            this.setState({
                filters: resp.data.data
            })
            // console.log(resp.data.data[0].name);
        }).catch((err) => {
            console.log('error')
        })
        axios.get('https://api.eventstan.com/user/event-types').then((resp) => {
            this.setState({
                event_types: resp.data.data.result
            })
        }).catch((err) => {
            console.log('error')
        })

    }
    toogle_popup = (id) => {
        console.log(id)
        this.setState({
            popup_first: !this.state.popup_first,
            target_event_id: id
        })
    }
    submit_popup_first = () => {
        this.setState({
            popup_first: false,
            popup: true,
        })
    }
    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    backdropCLickHandler = () => {
        this.setState({
            popup_first: false,
            popup: false
        });
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            axios.get(`https://api.eventstan.com/user/event-types?search=${this.state.search_input}`).then((resp) => {
                this.setState({
                    event_types: resp.data.data.result
                })
            }).catch((err) => {
                console.log('error');
            })
        }
    }

    search_change = (e) => {
        this.setState({
            search_input: e.target.value
        })
    }

    render() {
        let backdrop;
        if (this.state.popup || this.state.popup_first) {
            backdrop = <Backdrop click={this.backdropCLickHandler} />;
        }
        return (
            <div className="create_event">
                <div className="header_createevent">
                    <Row style={{ margin: '0px', padding: '0px' }}>
                        <Col xs={0} md={1} />
                        <Col xs={12} md={2} >
                            <a href="/eventstan" class="navbar-brand">Event<span className="colored">stan</span></a>
                        </Col>
                        <Col xs={0} md={2} />
                        <Col xs={12} md={7} >
                            <div className="create_event_mob1" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ position: 'relative' }}>
                                    <input style={{ padding: '8px 8px', width: '250px', border: 'none', borderRadius: '8px', paddingRight: '30px' }} type="text" placeholder="Search here.." />
                                    <img style={{ position: 'absolute', right: '3px', height: '20px', top: '10px' }} src={search_ico} height="50px" />
                                </div>
                                <Button href="/professional" style={{ backgroundColor: "#F47824", marginLeft: '20px' }}>Request for Demo</Button>
                                <Button href="/professional" style={{ backgroundColor: "#F47824", marginLeft: '20px' }}>Menu</Button>

                            </div>
                        </Col>
                    </Row>
                </div>
                <br />
                <br />
                <Container>
                    <p style={{ marginBottom: '5px' }}><a className="remove_anchor bold_me" href="/"><span style={{ fontSize: '24px', fontWeight: 'bold', paddingRight: '5px' }}>&lt;</span>  BACK</a></p>
                    <h4 style={{ marginBottom: '1px' }} className="bold_me">Select the Event type to</h4>
                    <h4 className="bold_me">Hire a Professional</h4>
                    <div className="filter_buttons" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button  >All</Button>
                            {
                                this.state.filters && this.state.filters.map((filter) => {
                                    return <Button>{filter.name}</Button>
                                })
                            }
                        </div>
                        <div style={{ position: 'relative' }}>
                            <input style={{ padding: '8px 8px', borderRadius: '8px', paddingRight: '30px' }} placeholder="Search here.." onChange={this.search_change} onKeyPress={this.handleKeyPress} type="text" />
                            <img style={{ position: 'absolute', right: '3px', height: '20px', top: '10px' }} src={search_ico} height="50px" />

                        </div>
                    </div>
                    <br />
                    <div className="cards_create_event">
                        {
                            (this.state.event_types == null || this.state.event_types.length == 0) ?
                                <h1 className="data_not_found">No Match Found!</h1>
                                : this.state.event_types.map((single_event) => {
                                    return (
                                        <div onClick={() => this.toogle_popup(single_event._id)} className="card_create_event">
                                            <img src={card_pic} height="150px" width='150px' />
                                            <h6>{single_event.name}</h6>
                                        </div>
                                    )
                                })
                        }
                    </div>


                </Container>
                {this.state.popup_first ?
                    < Name_popup submit_popup_first={this.submit_popup_first} onchange={this.onchange} />
                    : null}
                {this.state.popup ?
                    <PopUp state={this.state} />
                    : null}
                {backdrop}
            </div >
        )
    }
}
export default Createevent;