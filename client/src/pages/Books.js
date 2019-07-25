import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form/Form";
import Form from "../components/Form/Form";

class Books extends Component {
  state = {
    q: "",
    songs: [],
    artistName: ""
  };

  componentDidMount() {
    this.loadBooks();
  }
  handleINputChange  = event => {
    const {name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  loadBooks = () => {
    API.getBooks({
      q: this.state.q,
      artistName: this.state.artistName
    })
      .then(res => this.setState({ songs: res.data }))
      .catch(err => console.log(err));
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.loadBooks();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Search Type
              <span className="caret"></span></button>
              <ul className="dropdown-menu">
                <li><a href="#">songs</a></li>
                <li><a href="#">artist</a></li>
              </ul>
            </div><br></br>

          {/* <form>
            <Input name="title" placeholder="song name / artist name" />
            <FormBtn>Submit</FormBtn>
          </form> */}
          </Col>
        {/* <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Books On My List</h1>
          </Jumbotron>
          {this.state.books.length ? (
            <List>
              {this.state.books.map(book => (
                <ListItem key={book._id}>
                  <a href={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </a>
                  <DeleteBtn />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col> */}
        </Row>
      </Container >
    );
  }
}

export default Books;
