import React from 'react';
import {connect} from 'react-redux';
// Components
import MenuList from '../components/MenuList';
import DetailedCategory from '../containers/DetailedCategory';

class Main extends React.Component {

    renderList() {
        if(!this.props.foodBrand) {
            return (<h4>Select a Brand...</h4>);
        }
        return (
            <MenuList childrens={this.props.foodBrand.menu} />
        )
    }

    render() {
        return (
            <main className="main">
                {this.renderList()}
                <DetailedCategory />
            </main>
        );
    }
}

// Passing state=>props into component
function mapStateToProps(state) {
    return {
        // State depends on active brand
        foodBrand: state.activeBrand
    }
}

// Connecting Main Storage with Component
export default connect(mapStateToProps)(Main);