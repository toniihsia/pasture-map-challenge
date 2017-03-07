import React, { Component } from 'react';

class CoordinateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num_coordinates: 3,
      coordinates: []
    };

    this._paddockInputForm = this._paddockInputForm.bind(this);
    this._coordinateInputForm = this._coordinateInputForm.bind(this);
    this._addCoordinateInputForm = this._addCoordinateInputForm.bind(this);
  }

  _paddockInputForm() {
    let paddockInputFields = [];
    let paddockInput = this._coordinateInputForm();
    for (let i = 0; i < this.state.num_coordinates; i++) {
      paddockInputFields.push(paddockInput);
    }

    return (
      <div>
        <form>
          <h3>Paddock Input Form</h3>
          <div>{paddockInputFields}</div>
          <button onClick={this._addCoordinateInputForm}>Add Another Coordinate</button>
          <button type="submit" onClick={this._handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }

  _coordinateInputForm() {
    return (
      <div>
        <label>Coordinate</label>
        <label>X</label>
          <input type="number"></input>
        <label>Y</label><input type="number"></input>
      </div>
    );
  }

  _addCoordinateInputForm() {
    console.log(this.state.num_coordinates);
    let newNumCoords = this.state.num_coordinates += 1;

    this.setState({
      num_coordinates: newNumCoords
    });
  }
  
  update(field) {
    return (e) => { this.setState( {[field]: e.target.value}); };
  }
  _handleSubmit() {

  }

  render() {
    return (
      this._paddockInputForm()
    );
  }

}

export default CoordinateForm;
