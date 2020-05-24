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

class NummberPad extends React.Component {

    renederButton(i) {
        return <NumButton value={i}
            onClick={this.props.onClick}></NumButton>

    }

    render() {
        // console.log("test LLLL",this.props);
        return (<div>
            <div>
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

        </div>)
    }

}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.numberClick = this.numberClick.bind(this);
    }

    render() {
        return (
            <div>
                <h3>Caluculator</h3>
                <HistoryExpressionList items={this.state.items} />
                <NummberPad value={this.state.items + 1} onClick={this.numberClick}></NummberPad>
                <form >
                    <label htmlFor="new-todo">
                        What needs to be done?
            </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button onClick={this.handleSubmit}>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }
    numberClick(e) {
        e.preventDefault();
        console.log(e.target.value);



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