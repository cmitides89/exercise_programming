import React,{ useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {PrimaryButton} from '@fluentui/react';

function App() {
  // used to make an api call
  // useEffect(() => {
  //   fetch('/ga_form').then(response => 
  //     response.json().then(data => {
  //       console.log(data);
  //     })
  //   );
  // },[])
  return (
    <div className="App">
      <GAForm />
      {/* <ExResults /> */}
    </div>
  );
}

// class ExResults extends React.Component{
//   render(){
//     return <div>{this.props.Explan}</div>;
//   }
// }
function ExResults(props){
  return <div>{props}</div>
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
        // console.log(this.state.returnPlan);
        // <ExResults Explan = {res.data} />
    });
  }

  render() {
    // const {NumberOfDays, LevelOfExp, goalType, NumberOfExercises, returnPlan} = this.state;
    
    return (
      <div class="ms-Grid" dir="ltr">
        <form onSubmit={this.onSubmit} action="/ga_form">
          <h4>Number of Days</h4>
          <select name="NumberOfDays" value={this.state.NumberOfDays} onChange={this.onChange}>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <h4>Experience</h4>
          <select name="LevelOfExp" value={this.state.LevelOfExp} onChange={this.onChange}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <h4>Goal</h4>
          <select name="goalType" value={this.state.goalType} onChange={this.onChange}>
            <option value="hypertrophy">Hypertrophy</option>
            <option value="strength">Strength</option>
          </select>
          <h4>Number of Exercises</h4>
          <select name="NumberOfExercises" value={this.state.NumberOfExercises} onChange={this.onChange}>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
          
          <br></br>
          <input type='submit'/>
        </form>
        <div>
          
          <h1>Welcome, you piece of shit.</h1>
          
          {
            this.state.returnPlan.map((plan, i) =>
              { 
                return (
                  <div> 
                    <h3>Day {i+1}</h3>
                    <h4>{plan.day_type}</h4>
                    {plan.day.map((exercise) => 
                      <div>
                        <h4>{exercise.day_type}</h4>
                        <ul>
                          <li>{exercise.ex_name}</li>
                          <li>Equipment: {exercise.equipment}</li>
                          <li>Main Muscle: {exercise.main_muscle}</li>
                          <li>Reps: {exercise.reps} Sets: {exercise.sets}</li>
                        </ul>
                    </div>
                )}
              </div>)
             })
          }
        </div>
        
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));



export default App;
