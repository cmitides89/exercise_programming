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

const ProgressBar = (props) => {
    return(
        <div className="progress-bar">
            <Filler />
        </div>
    )
}

const Filler = (props) => {
    return <div className="filler" />
}