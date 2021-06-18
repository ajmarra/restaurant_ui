import React from 'react';
import MenuItemSummary from './MenuItemSummary.js';
import MenuItem from './MenuItem.js';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [],
            selectedItem: null
        }
    }

    componentDidMount() {
        console.log("Calling menu service");
        fetch("/menu/menuitems")
        .then(res => res.json())
        .then(menuItems => {
            this.setState({ menuItems: menuItems});
            console.log("Menu loaded");
        })
        .catch((error) => {
            console.log("Failed to get menu");
            alert(error);
        })
    }

    updateDetails = (menuItem) => {
        console.log("Menu Item selected: %s", JSON.stringify(menuItem));
        this.setState({ selectedItem : menuItem});
    }

    render() {
        return (
            <div>
                <h1>Restaurant</h1>
                <hr></hr>
                <div className='menuList'>
                    <b>Menu</b>
                    <ol> {
                    this.state.menuItems.map(
                        (value, index) => {
                            return <li><MenuItemSummary menuItem={value} menuItemClicked={this.updateDetails} index={index} /></li>
                        }
                    )
                    }</ol>
                </div>
                <div><MenuItem menuItem={this.state.selectedItem}/></div>
            </div>
        )
    }
}

export default Menu;
