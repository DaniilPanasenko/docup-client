import React from "react";
import AdminNav from "./AdminNav";
import Header from "../layout/header/Header";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";


function TableUsers(props) {
    return (
        <Table striped bordered hover variant="dark" className="mt-5">
            <thead>
            <tr>
                <th>#</th>
                <th>Login</th>
                <th>Email</th>
                <th>Account type</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>DaniilPanasenko1</td>
                <td>daniil.panasenko@nure.ua</td>
                <td><Badge variant="danger">admin</Badge></td>
                <td><Button size="sm" variant="success" className="btn-block">Active</Button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>whaat</td>
                <td>emiliia.voronova@nure.ua</td>
                <td><Badge variant="warning">clinic</Badge></td>
                <td><Button size="sm" variant="success" className="btn-block">Active</Button></td>
            </tr>
            <tr>
                <td>3</td>
                <td>IBolit2</td>
                <td>ibolit2@gmail.com</td>
                <td><Badge variant="info">doctor</Badge></td>
                <td><Button size="sm" variant="success" className="btn-block">Active</Button></td>
            </tr>
            <tr>
                <td>4</td>
                <td>Ivanushka</td>
                <td>ivan.rusanov@nure.ua</td>
                <td><Badge variant="success">patient</Badge></td>
                <td><Button size="sm" variant="danger" className="btn-block">Blocked</Button></td>
            </tr>
            <tr>
                <td>5</td>
                <td>IBolit</td>
                <td>ibolit@gmail.com</td>
                <td><Badge variant="info">doctor</Badge></td>
                <td><Button size="sm" variant="success" className="btn-block">Active</Button></td>
            </tr>
            <tr>
                <td>6</td>
                <td>IAmWorkInCallCenter</td>
                <td>artem.oliinik.work@gmal.com</td>
                <td><Badge variant="light">operator</Badge></td>
                <td><Button size="sm" variant="danger" className="btn-block">Blocked</Button></td>
            </tr>
            </tbody>
        </Table>
    );
}
export default TableUsers;