import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

className Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
<<<<<<< HEAD
         <col size="md-4">
            
         </col>
         <col size="md-4">
=======
          <Col size="md-6">
            <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Search Type
              <span className="caret"></span></button>
              <ul className="dropdown-menu">
                <li><a href="#">songs</a></li>
                <li><a href="#">artist</a></li>
              </ul>
            </div><br></br>
>>>>>>> b8724df8330b49f9dc22e123ff14a46b665fe07e

         </col>
         <col size="md-4">

         </col>
        </Row>
      </Container >
    );
  }
}

export default Books;