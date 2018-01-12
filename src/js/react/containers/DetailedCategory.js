import React from 'react';
import {connect} from 'react-redux';

class DetailedCategory extends React.Component {
    render() {
        return (
            <div>{this.props.categoryList ? this.props.categoryList.name : "Empty"}</div>
        )
    }
}

function mapStateToProps(state) {
    return (
        {
            categoryList: state.activeBrand
        }
    )
}

export default connect(mapStateToProps)(DetailedCategory);