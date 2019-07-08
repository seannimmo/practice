import React, { Component } from 'react'
import Info from '../Info/Info.jsx'
import BartPhoto from '../../img/bart.jpg'
import HomerPhoto from '../../img/homer.jpg'
import LisaPhoto from '../../img/lisa.jpg'
import MaggiePhoto from '../../img/maggie.jpg'
import MargePhoto from '../../img/marge.jpg'

class App extends Component {
    state = {
        people: [
            {
                name: 'Lisa Simpson',
                email: 'lisa.simpson@gmail.com',
                image: LisaPhoto,
                isClicked: false,
            },
            {
                name: 'Bart Simpson',
                email: 'bart.simpson@gmail.com',
                image: BartPhoto,
                isClicked: false,
            },
            {
                name: 'Marge Simpson',
                email: 'marge.simpson@gmail.com',
                image: MargePhoto,
                isClicked: false,
            },
            {
                name: 'Homer Simpson',
                email: 'homer.simpson@gmail.com',
                image: HomerPhoto,
                isClicked: false,
            },
            {
                name: 'Maggie Simpson',
                email: 'maggie.simpson@gmail.com',
                image: MaggiePhoto,
                isClicked: false,
            }
        ]
    }

    handleClick = (contactName, isTrue) => {
        console.log(`i'm clicking something ${contactName}`)
        this.setState(prevState => {
            prevState.people.map((person, index) => {
                if(contactName === person.name){
                    person.isClicked = true;
                    return person.isClicked
                }
            })
        })

    }

    //to click. onClick on element. create function in parent with state.,
    //pass function throug props to child using 'this'.
    //onClick references function using "props", 
    //pass index and other change of state information
    //do logic in function in parent. setState. 

    render() {
        const contacts = this.state.people.map((person, index) => {
            return (
                <Info 
                    key = {`key__${person.name}`}
                    name = {person.name}
                    email = {person.email}
                    image = {person.image}
                    handleClick = {this.handleClick}
                    isClicked = {person.isClicked}
                >
                </Info>
                
            )
        })

        return (
            <div className="contacts">
                {contacts}
            </div>
        )
        
        
    }
}

export default App
