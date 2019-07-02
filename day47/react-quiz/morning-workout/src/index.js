import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx'
import './index.scss';
import './index.html';

class Hello extends React.Component {
  render() {
    return (
      <>
        <App />
      </>
    );
  }
}

ReactDOM.render(<Hello />, document.querySelector('#app'));