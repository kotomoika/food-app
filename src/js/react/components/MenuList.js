import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Action
import { selectCategory } from '../actions/index';

class MenuList extends React.Component {

    renderItems() {
        console.log("Items", this.props.itemsData);
        if(!this.props.itemsData) {
           return <li className="menu-list__item menu-list__item--error">Oops! There is no list...</li>
        } else {
           return this.props.itemsData.map(item => <li className="menu-list__item" onClick={() => this.props.selectCategory(item)} key={item.category}>{item.category}</li>)
        }
    }

    render() {
        return (
            <ul className="menu-list">
                {this.renderItems()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeFoodBrand: state.activeBrand
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectCategory: selectCategory}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MenuList);
