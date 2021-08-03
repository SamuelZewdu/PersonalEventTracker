import React,{ Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from "./AppNavbar";

class UserEdit extends Component {
    emptyItem = {
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        country: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if(this.props.match.params.id !== 'new') {
            const user = await (await fetch(`/api/user/${this.props.match.params.id}`)).json();
            this.setState({item: user});
        }
    }

    handleChange(event) {
       const target = event.target;
       const value = target.value;
       const name  = target.name;
       let item = {...this.state.item};
       item[name] = value;
       this.setState({item});

    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
    await fetch('/api/user' + (item.id ? '/' + item.id: ''), {
        method: (item.id) ? 'PUT' : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
    });
        this.props.history.push('/users');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Event' : 'Add Event'}</h2>;

        return <div>
            <AppNavbar/>
                <Container>
                    {title}
                    <Form onSubmit = {this.handleSubmit}>
                        <FormGroup>
                            <Label for = "name">Name of the Event</Label>
                            <Input type = "text" name="name" id="name" value={item.name || ''}
                                   onChange={this.handleChange} autoComplete="name"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for ="address">Address</Label>
                            <Input type="text" name="address" id="address" value={item.address || ''}
                                   onChange={this.handleChange} autoComplete="1234-Abc-AVE"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for ="city">City</Label>
                            <Input type ="text" name="city" id="city" value={item.city || ''}
                                   onChange={this.handleChange} autoComplete="Washington"/>
                        </FormGroup>
                        <div className="row">
                            <FormGroup className = "col-md-4 mb-3">
                                <Label for="state">State</Label>
                                <Input type ="text" name="state" id="state" value={item.state || ''}
                                       onChange={this.handleChange} autoComplete="DC"/>
                            </FormGroup>
                            <FormGroup className="col-md-4 mb-3">
                                <Label for="country">Country</Label>
                                <Input type ="text" name="country" id="country" value={item.country || ''}
                                       onChange={this.handleChange} autoComplete="United States"/>
                            </FormGroup>
                            <FormGroup className="col-md-3 mb-3">
                                <Label for="country">Zip Code</Label>
                                <Input type="text" name="zipcode" id="zipcode" value={item.zipcode || ''}
                                       onChange={this.handleChange} autoComplete="20012"/>
                            </FormGroup>
                        </div>
                        <FormGroup>
                            <Button color="primary" type ="submit">Save</Button> {' '}
                            <Button color= "secondary" tag={Link} to="/users">Cancel</Button>
                        </FormGroup>
                    </Form>
                </Container>
        </div>
    }
}
export default withRouter(UserEdit);