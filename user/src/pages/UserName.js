import React, { Component } from "react";
import API from "../utils/API";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Jumbotron from "react-bootstrap/Jumbotron";
import Tables from "../components/tables.js";
import Button from "react-bootstrap/Button"

class UserName extends Component {
    state = {
        search: "",
        users: [],
    };
    componentDidMount() {
        API.getRandomUser()
            .then(res => {
                console.log(res.data.results)
                this.setState({ users: res.data.results })
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col><Jumbotron>
                        <h1>User List</h1>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Jumbotron></Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                {this.state.users.map(user => (
                                    <Tables
                                        image={user.picture.thumbnail}
                                        firstname={user.name.first}
                                        lastname={user.name.last}
                                        email={user.email}
                                        phonenumber={user.phone}
                                    />
                                ))}
                            </tbody>
                        </Table></Col>
                </Row>
            </Container>
        )
    }




}
    export default UserName;


