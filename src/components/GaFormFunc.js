import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import { FormControl, FormGroup } from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const GaFormFunc = () => {

    const [NumberOfDays, setNumberOfDays] = useState('4');
    const [LevelOfExp, setLevelOfExp] = useState('beginner');
    const [goalType, setgoalType] = useState('strength');
    const [NumberOfExercises, setNumberOfExercises] = useState('5');
    const [returnPlan, setReturnPlan] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('/ga_form', {
            'NumberOfDays':NumberOfDays,
            'LevelOfExp':LevelOfExp,
            'goalType':goalType,
            'NumberOfExercises':NumberOfExercises
        }).then(res => {
            const plan = res.data;
            setReturnPlan(plan);
            console.log(res.data)
            console.log(returnPlan)

        });
    }
    return(
        <div className="formContainer">
            <Form className="programForm" onSubmit={handleSubmit} action="/ga_form">
                <Form.Group as={Row}>
                    <Form.Label column sm={7} className="textAlignLeft">
                        Number of days
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control as="select" 
                            onChange={event => setNumberOfDays(event.target.value)}
                            defaultValue={NumberOfDays}>
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
                        <Form.Control as="select" 
                            onChange={event => setLevelOfExp(event.target.value)}
                            defaultValue={LevelOfExp}>
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
                        <Form.Control as="select" 
                            onChange={event=>setgoalType(event.target.value)}
                            defaultValue={goalType}>
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
                        <Form.Control as="select"
                            onChange={event => setNumberOfExercises(event.target.value)}
                            defaultValue={goalType}>
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
            {/* {
                this.state.returnPlan.map((plan, i) => {
                    return (
                        <CardDeck>
                            <Card style={{ width: '20rem' }}>
                                <Card.Header>Day {i + 1}: {plan.day_type}</Card.Header>
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
            } */}
        </div>
    )
};


export default GaFormFunc;