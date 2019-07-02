import React, { Component } from 'react'

const Info = (props) => {
  return (
    <div className="contact">
      <div className="contact__photo">
        <div onClick={() => props.handleClick(props.name, true)}
        className="photo">
          <img className="photo__img" src={props.image} alt={props.name} />
        </div>
      </div>
      <div className="contact__info">
        <p><strong>Name:</strong> {props.name}</p>
        <p className={props.isClicked ? "black_text" : ''}
        ><strong>E-mail:</strong> {props.email}</p>
      </div>
    </div>
  )
    
}

export default Info;