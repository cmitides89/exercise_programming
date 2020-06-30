import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        
        <Row className="flex-nowrap">
        { returnPlan.map((plan, i) => {
                return (
                    <Col sm={10} lg={7}>
                        <Card className="cardStyles">
                            <Card.Header>Day {i + 1}: {plan.day_type}</Card.Header>
                            <Card.Body>
                                <Card.Title>Exercises</Card.Title>
                                <Card.Text>
                                    {plan.day.map((exercise) =>
                                        // <ListGroup variant="flush">
                                        //     <ListGroup.Item>{exercise.ex_name}</ListGroup.Item>
                                        //     <ListGroup.Item>Reps: {exercise.reps} Sets: {exercise.sets}</ListGroup.Item>
                                        // </ListGroup>
                                        <p>{exercise.ex_name}: Reps: { exercise.reps } Sets: { exercise.sets }</p>
                                    )}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" onClick={handleModify} >Modify Day</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                )
            })}
        </Row>
        
    );
}

export default GaResults;