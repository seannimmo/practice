import React from 'react';
import "./Term.scss";

export default class Term extends React.Component {
    render() {
       return ( <>
            <div className="term">{ this.props.term }</div>
            <div className="def">{ this.props.def}</div>
        </>
       );
    }
}