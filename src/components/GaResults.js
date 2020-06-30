import React, {useState, useEffect, Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const GaResults = (props) => {
    const returnPlan = props.plan;

    const handleModify = event => {
        event.preventDefault();
        
        
    }

    return(
        <CardDeck>
            {/* TODO: after certain size remove flex no wrap */}
            
        { returnPlan.map((plan, i) => {
            return (    
                
                <Card>
                    <Card.Header>
                        <h2>Day {i + 1}</h2>
                        <h3>{plan.day_type}</h3>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Exercises</Card.Title>
                        <Card.Text>
                            {plan.day.map((exercise) =>
                                // <ListGroup variant="flush">
                                //     <ListGroup.Item>{exercise.ex_name}</ListGroup.Item>
                                //     <ListGroup.Item>Reps: {exercise.reps} Sets: {exercise.sets}</ListGroup.Item>
                                // </ListGroup>
                                <ul>{exercise.ex_name} 
                                    <li>Reps: { exercise.reps } Sets: { exercise.sets }</li>
                                </ul>
                            )}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" onClick={handleModify} >Modify Day</Button>
                    </Card.Footer>
                </Card>
                
                        
            )
            })}
            
        </CardDeck>
    );
}

export default GaResults;