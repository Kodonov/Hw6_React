import React, {Component} from 'react';

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ""}
    }

    onChangeInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    addInput = () => {
        console.log(this.state.input)
        this.clearInput()
    }

    clearInput = () => {
        this.setState({
            input:""
        })
    }


    render() {
        return (
            <div>
                <>

                    <input type="text" onChange={this.onChangeInput} value={this.state.input}/>
                    <button onClick={this.addInput}>add</button>
                    <button onClick={this.clearInput}>clear</button>
                </>
            </div>
        );
    }
}

export default ContactPage;