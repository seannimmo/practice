import React from 'react'

export default class Results extends React.Component {
    
    
    render() {
        const articleList = this.props.articles.map((article, index) => {
            return (
                <div key={`article-${index}`}>
                    <div className="title">{article.title}</div>
                    <div className="inside">{article.snippet}</div>
                </div>
            )
        })

        return articleList
        
        
    }
}