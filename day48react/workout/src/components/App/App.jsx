import React, {Component} from 'react'
import Chapter from '../Chapter/Chapter.jsx'
import './App.scss'



export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chapters: [
                {
                    day: "Wed",
                    date: "3.4",
                    title: 'Odio Juttensack iracundia ex pri.',
                    summary: "Deutsches Ipsum Dolor meliore persecuti Mozart mel. Te oratio utamur vix. Rotwurst eloquentiam eu per. Principes complectitur Prost no. His illud moderatius ut, Gemeinsamkeit pro omnis minim epicurei, natum zu spät mel ei. Sea purto singulis Ohrwurm",
                    done: false,
                },
                {
                    day: "Thurs",
                    date: "4.4",
                    title: "Consectetur adipisicing elit",
                    summary: "Architecto nam quasi explicabo eveniet dolores dignissimos fuga ex, et corporis ipsum assumenda ducimus tempora, quis eligendi voluptatum, cumque neque.",
                    done: false,
                },
                {
                    day: "Fri",
                    date: "5.4",
                    title: "Eligendi enim accusantium",
                    summary: "Dolor temporibus veritatis pariatur quod repellendus vitae earum minus incidunt unde sunt. Veritatis reiciendis incidunt tempora delectus minus explicabo magni.",
                    done: false,
                },
            ],
        }
    }

    // handleClick = (indexNumber) => {
    //     this.setState(prevState => {
    //         const newState = { ...prevState }
    //         newState.chapters[indexNumber].done = !prevState.chapters[indexNumber].done
    //         return newState
    //     })
    // }
    render() {
        const chapterArray = this.state.chapters.map((chapter, index) => {
            return (
                    <Chapter 
                        key={`chapter-${index}`}
                        day={chapter.day}
                        date={chapter.date}
                        title={chapter.title}
                        summary={chapter.summary}
                        done={chapter.done}
                        indexNumber = {chapter.index}
                    >
                    </ Chapter>
                )
        })

        return (
            <div className="chapters">
                {chapterArray}
            </div>
        )
    }
}


