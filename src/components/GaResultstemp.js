<Card style={{ width: '20rem' }}>
<Card.Header>Day {i+1} : {plan.day}</Card.Header>
    <Card.Body>
    <Card.Title>{exercise.day_type}</Card.Title>
        <ListGroup variant="flush">
        <ListGroup.Item>{exercise.ex_name}</ListGroup.Item>
        </ListGroup>
        <Button variant="primary">Modify Day</Button>
    </Card.Body>
</Card>


    <Card.Header>Day {i + 1} : {plan.day_type}</Card.Header>
    {plan.day.map((exercise) =>
        <Card.Body>
            <Card.Title>Exercises</Card.Title>
            <ListGroup variant="flush">
            
                <ListGroup.Item>{exercise.ex_name}</ListGroup.Item>
            </ListGroup>
            <Button variant="primary">Modify Day</Button>
        </Card.Body>
    </Card>
    )}


{/* <div> */ }

<h1>Welcome, you piece of shit.</h1>

{/* {
            this.state.returnPlan.map((plan, i) =>
              { 
                return (
                  <div> 
                    <h3>Day {i+1}</h3>
                    <h4>{plan.day_type}</h4>
                    {plan.day.map((exercise) => 
                      <div>
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
          } */}

{/* </div> */ }