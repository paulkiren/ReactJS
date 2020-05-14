import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// export function ChapterOne() {
//     return <h1> Kiren Paul</h1>;
// }




const PageHeader = ({ children }) =>
    <section className="db-head bg-white pt-10 pl-20 pr-20 pb-10">
        {children}
    </section>;

PageHeader.propTypes = {
    children: PropTypes.element.isRequired,
};


// export class ChapterOne extends React.component {
//     constructor ChapterOne() {

//     }

// }


class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
            <Header></Header>
                <h1> Shopping List for {this.props.name} </h1>
                <ul>
                    <li>FaceBook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div color="green"> <h1>Kiren paul</h1> </div>
        );
    }
}


export  {
    ShoppingList,
    PageHeader
}