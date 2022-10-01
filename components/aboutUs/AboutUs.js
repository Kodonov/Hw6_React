import React, {Component} from 'react';

class AboutUsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
                text: true
        }
    }

    handle = () => {
        this.setState({
            text: !this.state.text
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handle}>text</button>
                {
                    this.state.text && <h1>Text</h1>
                }
            </div>
        );
    }
}

export default AboutUsPage;