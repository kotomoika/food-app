import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Action
import { selectBrand, selectCategory } from '../actions/index';
import store from '../index.js';

const Brand = (props) => {
  return (
    <li
      className={props.active ? "header__item active" : "header__item"}
      onClick={props.showCategories}>
        <h1 className="header__item-title">{props.name}</h1>
        <p className="header__item-descr">{props.description}</p>
        <img className="header__item-img" src={props.logo}/>
    </li>
  );
};

class Header extends React.Component {
    // Maping props from state into items
    addBrands() {
        return this.props.foodBrands.map((item) => {
            let active = store.getState().activeBrand
                       ? store.getState().activeBrand.id == item.id
                       : null;
            return (
              <Brand
                active={active}
                key={item.id}
                showCategories={() => {
                  this.props.selectBrand(item);
                  this.props.selectCategory(null);
                }}
                name={item.name}
                description={item.description}
                logo={item.logo} />
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
    // selectBrand, selectCategory are props
    return bindActionCreators({
      selectBrand: selectBrand,
      selectCategory: selectCategory
    }, dispatch)
}

// Connecting Main Storage with Component
export default connect(mapStateToProps, matchDispatchToProps)(Header);
