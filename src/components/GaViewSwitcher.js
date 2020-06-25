import React, {useState, useEffect} from 'react';
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

const GaViewSwitcher = (props) => {
    const [plan, setPlan] = useState([]);
    
}