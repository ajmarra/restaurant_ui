import React from 'react';

class MenuItemSummary extends React.Component {
    render() {
        return (
            <div className='itemSummary' 
            onClick={() => {this.props.menuItemClicked(this.props.menuItem);}}>
                <b>{this.props.menuItem.name}</b> by 
                <em>{this.props.menuItem.price}</em>
            </div>
        )
    }
}

export default MenuItemSummary;