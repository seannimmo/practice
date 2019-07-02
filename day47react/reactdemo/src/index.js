import React from 'react';
import ReactDOM from 'react-dom';
import Message from './message/message.jsx';
import './index.scss';
import './index.html';



class Hello extends React.Component {
    render() {
        return (
            <> 
        <h1>Hello World</h1>
        <Message title="mytitle" body="hello body"/> {/* title and body in this way are called props */}
        <Message title="second title" body="hello"/>
        <Message title="this" body="body"/>
        </>
        );
    }
}

ReactDOM.render(<Hello />, document.querySelector('#app'));