import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App.jsx'

import './index.html'
import './main.scss'

class Container extends React.Component {

    render(){
        return <App />
    }
}

ReactDOM.render(<Container />, document.querySelector('#app'))


