import React, { Component }from 'react';
import CoordinateForm from './components/coordinate_form.jsx';
import './assets/css/canvas.css';

class App extends Component {
  render() {
    return (
      <div>
        Hello
        <CoordinateForm />
      </div>
    );
  }
}

export default App;
