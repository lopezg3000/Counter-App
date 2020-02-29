import React, { Component } from 'react';
import Counter from "./counter";


class Counters extends Component {

    render() {

        console.log("Counters - Rendered");

        const { onReset, counters, onIncrement, onDecrement, onDelete } = this.props;

        return (
            <div className="container">
                <div className="row pb-2">
                    <div className="col-auto">
                        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
                            Reset
                        </button>
                    </div>
                </div>
                {counters.map(counter =>
                    <div className="row pb-2" key={counter.id}>
                        <Counter
                            key={counter.id}
                            counter={counter}
                            onIncrement={onIncrement}
                            onDelete={onDelete}
                            onDecrement={onDecrement}
                        />
                    </div>
                )
                }
            </div>
        );
    }
}

export default Counters;