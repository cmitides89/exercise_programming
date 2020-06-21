<Form>
    <Form.Label>Number Of Days</Form.Label>
    <Form.Control as="select" name="NumberOfDays" value={this.state.NumberOfDays} onChange={this.onChange}>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </Form.Control>
    <Form.Label>Level Of Experience</Form.Label>
    <Form.Control as="select" name="LevelOfExp" value={this.state.LevelOfExp} onChange={this.onChange}>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
    </Form.Control>
    <Form.Label>Goal Type</Form.Label>
    <Form.Control as="select" name="NumberOfExercises" value={this.state.NumberOfExercises} onChange={this.onChange}>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
    </Form.Control>
    <Button type="submit" variant="outline-dark">Create</Button>
</Form>