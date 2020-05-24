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

// class FunctionKeys extends React.Component {
//     render() {
//         return (


//         )
//     }
// }

// class NummberPad extends React.Component {


//     render() {
//         // console.log("test LLLL",this.props);
//         return ()
//     }

// }

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '', currentValue: '', resultValue: 0 };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.numberClick = this.numberClick.bind(this);
        this.functionClick = this.functionClick.bind(this);
    }
    renederButton(i) {
        return <NumButton value={i}
            onClick={this.numberClick}></NumButton>

    }
    render() {
        return (
            <div>
                <h3>Caluculator</h3>

                <HistoryExpressionList items={this.state.items} />
                <input value={this.state.currentValue} />
                <input value={this.state.resultValue} />
                <div className="caluculator-keys">
                    <div className="number-pad">
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
                            {[0, '.', '='].map((i) => this.renederButton(i))}
                        </div>

                    </div>
                    <div className="arithmetic-ops">
                        <button className="functionButton"
                            value='<-' onClick={this.functionClick}>Clear</button>
                        <button className="functionButton"
                            value='/' onClick={this.functionClick}>/</button>
                        <button className="functionButton"
                            value='x' onClick={this.functionClick}>x</button>
                        <button className="functionButton"
                            value='-' onClick={this.functionClick}>-</button>
                        <button className="functionButton"
                            value='+' onClick={this.functionClick}>+</button>

                    </div>

                </div>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

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
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

class HistoryExpressionList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}
export default Calculator;





// class Calculator2 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], text: '' };
//         // this.handleChange = this.handleChange.bind(this);
//         // this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     render() {
//         return (
//             <div className="Calculator">
//                 <header className="App-header">
//                     <p>
//                         Calculator is coming
//                    </p>

//                 </header>
//                 <div > Ki</div>

//                 <NummberPad></NummberPad>
//             </div>
//         );
//     }
// }