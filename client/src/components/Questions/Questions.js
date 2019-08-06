import axios from 'axios';
import React, {Component} from "react";
import {Card, CardBody, CardHeader } from "../Card";
import {Col, Container, Row} from "../Grid";
import API from "../../utils/API";

class Questions extends Component{
    constructor(props){
        super(props);
        this.state ={
            questions: [],
            questionArr: [],
            questionNum: 0
        };
        this.showQuestions();
    }
    showQuestions(){
        let questionNum = this.state.q
        API.getQuestions().then(res =>{
            this.setState({questionArr: res.data.results,questionNum: this.state.questionNum +1});
        }).catch(err => console.log(err))
    }
    render(){
        return(
            <div>
                <Container fluid>
                    <button type="button" onClick={() => this.showQuestions()}>Next</button>
                    <Row>
                        <Col size ="md-6">
                            <Card>
                                <CardHeader><h1>Question {this.state.questionNum}</h1></CardHeader>
                                <CardBody>
                                    <h3>{this.state.questions.question}</h3>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
    
}
export default Questions;
