import React,{ useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import GaFormFunc from './components/GaFormFunc';
import GaResults from './components/GaResults';
import './App.css';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {FormControl, FormGroup} from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import ProgressBar from 'react-bootstrap/ProgressBar';


// TODO: customize boostrap colors using $theme-colors in a custom scss file

function App() {
  const [plan, setPlan] = useState(null);
  const switchViews = () => {
    const currView = plan != null ? <GaFormFunc /> : <GaResults />; 
  }
  return (
    <Container className="App">
      {/* <GAForm /> */}
      <GaFormFunc />
      {/* <ExResults /> */}
    </Container>
  );
}

class GAResults extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      outputPlan: this.props.returnPlan
    }
  }
}

class GAForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      NumberOfDays: 4,
      LevelOfExp: 'beginner',
      goalType:'strength',
      NumberOfExercises:5,
      returnPlan:[]
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  onSubmit = (e) => {
    // TODO: onsubmit hide the form, maybe show a loading bar, then show the results
    console.log('pressed button')
    e.preventDefault();
    const { NumberOfDays, LevelOfExp, goalType, NumberOfExercises, returnPlan} = this.state;
    console.log(e)
    console.log(this.state)
    axios.post('/ga_form', {
      NumberOfDays, 
      LevelOfExp, 
      goalType, 
      NumberOfExercises
    })
    .then(res => {
        // var plan = JSON.parse(res.data);
        this.setState({returnPlan: res.data});
        console.log(this.state.returnPlan);
        // <ExResults Explan = {res.data} />
        // <GaResults returnPlan = {returnPlan}/>;
    });
  }

  render() {
    // const {NumberOfDays, LevelOfExp, goalType, NumberOfExercises, returnPlan} = this.state;
    
    return (
    <div className="formContainer">
      <Form className="programForm" onSubmit={this.onSubmit} action = "/ga_form">
        <Form.Group as={Row}>
          <Form.Label column sm={7} className="textAlignLeft">
            Number of days
          </Form.Label>
            <Col sm={5}>
              <Form.Control as="select">
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={7} className="textAlignLeft">
            Level of experience
          </Form.Label>
            <Col sm={5}>
              <Form.Control as="select">
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={5} className="textAlignLeft">
              Goal Type
            </Form.Label>
            <Col sm={7}>
            <Form.Control as="select">
              <option value="hypertrophy">Hypertrophy</option>
              <option value="strength">Strength</option>
            </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={7} className="textAlignLeft">
              Number of exercises
            </Form.Label>
            <Col sm={5}>
              <Form.Control as="select">
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 7, offset: 5 }}>
              <Button type="submit">Create</Button>
            </Col>
          </Form.Group>
        </Form>
      {
        this.state.returnPlan.map((plan,i) =>{
          return(
            <CardDeck>
              <Card style={{width:'20rem'}}>
                <Card.Header>Day {i+1}: {plan.day_type}</Card.Header>
                <Card.Body>
                  <Card.Title>Exercises</Card.Title>
                  {plan.day.map((exercise) => 
                    <ListGroup variant="flush">
                      <ListGroup.Item>{exercise.ex_name}</ListGroup.Item>
                    </ListGroup>
                  )}
                  <Button variant="primary">Modify Day</Button>
                </Card.Body>
              </Card>
            </CardDeck>
          )
        })
      }
    </div>
      
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));



export default App;
