import React from 'react';
import logo from '../logo.svg';
import '../App.css';


function NumButton(props) {
    return (
        <button className="numButton"
            value={props.value}
            onClick={props.onClick}>{props.value}</button>
    );

}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { historyItems: [], text: '', currentValue: '', resultValue: 0, expressionString: '', expressionStack: [] };
        // this.handleChange = this.handleChange.bind(this);
        this.handleArithmeticOps = this.handleArithmeticOps.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.numberClick = this.numberClick.bind(this);
        this.functionClick = this.functionClick.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
    }

    handleArithmeticOps(e) {
        e.preventDefault();
        console.log(e.target.value);
        let value = e.target.value;
        this.state.expressionStack.concat(this.state.currentValue, value);
        let expressionValue = this.state.expressionStack.join(' ');

        // this.setState(state => ({
        //     expressionStack: stack,
        //     currentValue: stack,
        //     expressionString:expressionValue
        // }));
        this.setState({ expressionString: expressionValue, currentValue: '' });



    }
    handleDecimal(e) {
        // only one decimal is allowed per number;
        e.preventDefault();
        console.log(e.target.value);
        let value = e.target.value;
        if (this.state.currentValue.indexOf('.') !== -1)
            return
        this.setState({ currentValue: this.state.currentValue += value });
    }
    renederButton(i) {
        return <NumButton value={i}
            onClick={this.numberClick}></NumButton>
    }
    render() {
        return (
            <div>
                <h3>Caluculator</h3>

                <HistoryExpressionList historyItems={this.state.historyItems} />
                <div>{this.state.expressionString}</div>
                <input className="currentValue" value={this.state.currentValue} />
                <input className="currentValue" value={this.state.resultValue} />
                <div className="caluculator-keys flex-row">
                    <div className="number-pad flex-column">
                        <div >
                            {[7, 8, 9].map((i) => this.renederButton(i))}
                        </div>
                        <div>
                            {[4, 5, 6].map((i) => this.renederButton(i))}
                        </div>
                        <div>
                            {[1, 2, 3].map((i) => this.renederButton(i))}
                        </div>
                        <div>
                            {[0].map((i) => this.renederButton(i))}
                            <button className="numButton"
                                value='.' onClick={this.handleDecimal}>.</button>
                            <button className="numButton"
                                value='=' onClick={this.handleSubmit}>=</button>
                        </div>


                    </div>
                    <div className="flex-column function-column">
                        <button className="funcButton"
                            value='clear' onClick={this.functionClick}>Clear</button>
                        <button className="funcButton"
                            value='/' onClick={this.handleArithmeticOps}>/</button>
                        <button className="funcButton"
                            value='x' onClick={this.handleArithmeticOps}>x</button>
                        <button className="funcButton"
                            value='-' onClick={this.handleArithmeticOps}>-</button>
                        <button className="funcButton"
                            value='+' onClick={this.handleArithmeticOps}>+</button>

                    </div>
                </div>
            </div>
        );
    }

    // handleChange(e) {
    //     this.setState({ text: e.target.value });
    // }

    functionClick(e) {
        e.preventDefault();
        console.log(e.target.value);
        let value = e.target.value;
        this.setState({ currentValue: this.state.currentValue += value });

    }
    numberClick(e) {
        e.preventDefault();
        console.log(e.target.value);
        let value = e.target.value;
        this.setState({ currentValue: this.state.currentValue += value });

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.value);
        if (this.state.currentValue.length === 0) {
            return;
        }


        const newItem = {
            text: this.state.currentValue,
            id: Date.now()
        };
        this.setState(state => ({
            historyItems: state.historyItems.concat(newItem),
            text: ''
        }));
        this.setState({ currentValue: '', });


    }
}

class HistoryExpressionList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.historyItems.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}
export default Calculator;
