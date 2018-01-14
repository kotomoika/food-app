import React from 'react';
import {connect} from 'react-redux';

class DetailedCategory extends React.Component {

    renderInformation(mainClass) {

        if(!this.props.activeCategory) {
            return <h1>Chose a Category!</h1>
        }
        else {
            return this.props.activeCategory.list.map(item => {
                return (
                    <div className={`${mainClass}__item`} key={item.id}>
                        <img className={`${mainClass}__img`} src={item.image} alt="food image"/>
                        <h2 className={`${mainClass}__p-name`}>{item.name}</h2>
                        <h3 className={`${mainClass}__p-price`}>{item.price} UAH</h3>
                        <p className={`${mainClass}__p-descr`}>{item.description}</p>
                    </div>
                )
            })
        }
    }

    render() {
        const mainClass = "detailed-category";

        return (
            <div className={mainClass}>
                {this.renderInformation(mainClass)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return (
        {
            activeCategory: state.activeCategory
        }
    )
}

export default connect(mapStateToProps)(DetailedCategory);