import React, {Component} from 'react'

export default class Graphics extends Component {

    constructor(){
        super();
        this.state = {
           'items' : []
        }
    }

    componentDidMount() {
        this.get_items();
    }

    get_items(){
        fetch('http://localhost:8090/api/v1/card', {mode:'no-cors'})
            .then(results => {
                console.log(results)
                return results.json()
            })
            .then(results => this.setState({'items' : results}));
        console.log(this.state.items)
    }

    render(){
        return(
            <ul>
                {this.state.items.map(function (item, index) {
                    return (
                        <div key={index}>
                            <h1>{item.generatedDate}</h1>
                            <p>{item.received}</p>
                        </div>
                    )
                })}
            </ul>
        );
    }

}