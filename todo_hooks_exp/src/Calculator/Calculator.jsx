import React from 'react';
import logo from '../logo.svg';
import '../App.css';

class Calculator2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], text: '' };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="Calculator">
                <header className="App-header">
                    <p>
                        Calculator is coming
                   </p>

                </header>
                <div > Ki</div>

                <NummberPad></NummberPad>
            </div>
        );
    }
}

class NummberPad extends React.Component {
    render() {
        return (<div>
            <div>
                <button onClick={this.props.handleNumClick}>7</button>
                <button>8</button>
                <button>9</button>
            </div>
            <div>
                <button>4</button>
                <button>5</button>
                <button>6</button>
            </div>
            <div>
                <button >1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <div>
                <button >0</button>
                <button >.</button>
                <button >=</button>
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
        this.numberClick = this.numberClicked.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <NummberPad handleNumClick={this.state.numberClicked}></NummberPad>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
            </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }
    numberClicked(e) {
        e.preventDefault();
        console.log(e.target.value);
        alert('clicked button');


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

class TodoList extends React.Component {
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