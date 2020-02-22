import React, { Component } from 'react';
import Counter from "./counter";


class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 10 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => counterId !== c.id);
        this.setState({ counters });
        console.log("Event Handler Called")
    };

    render() {
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id} counter={counter} onDelete={this.handleDelete} />)}
            </div>
        );
    }
}

export default Counters;