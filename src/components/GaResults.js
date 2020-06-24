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

const GaResults = (props) => {
    const returnPlan = props.plan;
    return(
        <div>
           { returnPlan.map((plan, i) => {
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
            })}
        </div>
    );
}

export default GaResults;