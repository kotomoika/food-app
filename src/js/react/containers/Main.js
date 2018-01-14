import React from 'react';
import {connect} from 'react-redux';
import Transition from 'react-transition-group/Transition';
// Components
import MenuList from '../components/MenuList';
import DetailedCategory from '../containers/DetailedCategory';

class Main extends React.Component {

    renderList() {
        if(!this.props.activeFoodBrand) {
            return (<h4>Select a Brand...</h4>);
        }
        return (
            <MenuList itemsData={this.props.activeFoodBrand.menu} />
        )
    }

    render() {
        return (
            <main className="main">
                {this.renderList()}
                <Transition timeout={1000}>
                    <DetailedCategory />
                </Transition>
            </main>
        );
    }
}

// Passing state=>props into component
function mapStateToProps(state) {
    return {
        // State depends on active brand
        activeFoodBrand: state.activeBrand
    }
}

// Connecting Main Storage with Component
export default connect(mapStateToProps)(Main);