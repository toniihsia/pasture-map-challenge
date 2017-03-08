import React, { Component } from 'react';
import Gallery from './gallery';

class CoordinateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numCoords: 3,
      numPaddocks: 0,
      coords: [],
      paddocks: [<div>'hello'</div>]
    };

    this._paddockInputForm = this._paddockInputForm.bind(this);
    this._coordinateInputForm = this._coordinateInputForm.bind(this);
    this._addCoordinateInputForm = this._addCoordinateInputForm.bind(this);
    this._addCoord = this._addCoord.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

    this._addPaddock = this._addPaddock.bind(this);
    this._renderPaddocks = this._renderPaddocks.bind(this);
  }

  _paddockInputForm() {
    let paddockInputFields = [];
    for (let i = 0; i < this.state.numCoords; i++) {
      paddockInputFields.push(this._coordinateInputForm(i));
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

  _coordinateInputForm(i) {
    return (
      <div>
        <label>Coordinate</label>
        <br/>
          <input
            type="string"
            placeholder="100, 150"
            onChange={(e) => this._addCoord(i, e)}
            value={this.state.coords[i]}
            >
          </input>
      </div>
    );
  }

  _addCoordinateInputForm() {
    let newNumCoords = this.state.numCoords += 1;
    this.state.coords.push([]);
    this.setState({
      numCoords: newNumCoords
    });
  }

  _addCoord(i, e) {
      console.log(e.target.value);
      let xAndYCoords = e.target.value.split(', ');
      let x = parseInt(xAndYCoords[0]);
      let y = parseInt(xAndYCoords[1]);

      if (x && y) {
        this.state.coords[i] = [x, y];
      }
  }

  _handleSubmit() {
    this._addPaddock(this.state.coords);
    this.state.coords = [];
    this.setState({ numCoords: 3});

  }

  _renderPaddocks() {
    return (
      <div>{this.state.paddocks}</div>
    );

  }

  _addPaddock(coords) {
    this.state.numPaddocks += 1;
    let numPaddock = this.state.numPaddocks;

    var paddockIcon =
      <canvas
        onLoad={() => this._draw(numPaddock, coords)}
        id={numPaddock}
        className="canvas"
        width="500"
        height="500">
      </canvas>;
      // var ctx = paddockIcon.getContext('2d');
      // ctx.beginPath();
      // for (let i = 0; i < coords; i++) {
      //   ctx.moveTo(coords[i][0], coords[i][1]);
      // }
      // ctx.fill();
    this.state.paddocks.push(paddockIcon);
  }

  _draw(numPaddock, coords) {
    console.log('hey');
    let canvas = document.getElementById(numPaddock);
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');

      ctx.beginPath();
      for (let i = 0; i < coords.length; i++) {
        ctx.moveTo(coords[i][0], coords[i][1]);
      }
      ctx.fill();
    }
  }
  render() {
    return (
      <div>
        {this._paddockInputForm()}
        {this._renderPaddocks()}
      </div>
    );
  }

}

export default CoordinateForm;
