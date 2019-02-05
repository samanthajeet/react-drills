import React, {Component} from 'react'

class NewTask extends Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
 
    }


    handleInputChange(value) {
        this.setState({
            input: value
        })
    }

    handleAdd() {

    }

    render() {
        return (
            <div>
                <input value={this.state.input}
                placeholder="Enter new task"
                onChange={ (e) => this.handleInputChange(e.target.value)}
                />

                <button onClick={ this.handleAdd } > Add Task </button>
            </div>

            )

    }


}

export default NewTask;