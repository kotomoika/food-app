import React from 'react';

class MenuList extends React.Component {

    renderItems() {
        if(!this.props.childrens) {
           return <li className="menu-list__item menu-list__item--error">Oops! There is no list...</li>
        } else {
           return Object.keys(this.props.childrens[0]).map(item => <li className="menu-list__item" key={item}>{item}</li>)
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

export default MenuList;