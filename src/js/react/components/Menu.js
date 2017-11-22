import React from 'react';
import Description from '../../../food_description'; //do something with this shit
//should be root directory here

class MenuItem extends React.Component {
	render() {
		let name = this.props.name;
		let imgPath = "src/img/" + name + ".jpg";
		let description = Description[name];

		return (
			<div className="menu">
				<h3 className="menu__title">{this.props.name}</h3>
				<img className="menu__img" alt="" src={imgPath} />
				<div className="menu__description">{description}</div>
			</div>
		);
	}
}

export default class Menu extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1 className="title" >Menu</h1>
        <MenuItem name="soup"/>
      </div>
    );
	}
}