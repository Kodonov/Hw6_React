import React, {Component} from 'react';

class PortfolioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            work: []
        }
    }

    setWork = () => {
        this.setState({
            work: ["work1", "work2"]
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.setWork}>get work</button>
                {
                    this.state.work.length > 0
                    ? this.state.work.map((work,key) => <li key={key}>{work}</li>)
                        : <li>не найдено</li>
                }
            </div>
        );
    }
}

export default PortfolioPage;