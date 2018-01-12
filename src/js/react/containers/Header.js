import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// Action
import {selectBrand} from '../actions/index';

class Header extends React.Component {

    // Maping props from state into items
    addBrands() {
        return this.props.foodBrands.map((item) => {
            return (
                <li className="header__item" key={item.id} onClick={() => this.props.selectBrand(item)}>
                    <h1 className="header__item-title">{item.name}</h1>
                    <p className="header__item-descr">{item.description}</p>
                    <img className="header__item-img" src={item.logo}/>
                </li>
            );
        });
    }

    render() {
        return (
            <header className="header">
                <ul className="header__brands">
                    {this.addBrands()}
                </ul>
            </header>
        );
    }
}

// Passing state=>props into component
function mapStateToProps(state) {
    return {
        foodBrands: state.foodBrands
    }
}

function matchDispatchToProps(dispatch) {
    // selectBrand is a prop
    return bindActionCreators({selectBrand: selectBrand}, dispatch)
}

// Connecting Main Storage with Component
export default connect(mapStateToProps, matchDispatchToProps)(Header);