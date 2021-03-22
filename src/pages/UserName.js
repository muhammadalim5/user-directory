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
                this.setState({ users: res.data.results, UserDirectory: res.data.results })
            })
            .catch(err => console.log(err));
    }
    SortUserName = () => {
        console.log(this)
        let array = this.state.users.sort(function (a, b) {
            if (a.name.last < b.name.last) {
                return -1;
            }
            if (a.name.last > b.name.last) {
                return 1;
            }
            return 0;
        });
        this.setState({ users: array })
    }
    FilterByFemale = () => {
        console.log(this)
        let array2 = this.state.users.filter(user => user.gender === "female");
        console.log(array2)
        this.setState({ users: array2 })
    }
    FilterByMale = () => {
        console.log(this)
        let array3 = this.state.users.filter(user => user.gender === "male");
        console.log(array3)
        this.setState({ users: array3 })
    }
    UserList = () => {
        console.log(this)
        this.setState({ users: this.state.UserDirectory })
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col><Jumbotron>
                        <h1>User List</h1>
                        <p>
                            <Button onClick= {this.SortUserName} variant="primary">Sort by Last Name</Button>
                            <Button onClick= {this.FilterByFemale} variant="primary">Female Users</Button>
                            <Button onClick= {this.FilterByMale} variant="primary">Male Users</Button>
                            <Button onClick= {this.UserList} variant="primary">Complete User List</Button>
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


