import React from 'react';
class MenuItem extends React.Component {
    render() {
        return (
            (this.props.menuItem) ? (
                <div>
                    <label>Category</label>: {this.props.menuItem.category}<br />
                    <label>Name</label>: {this.props.menuItem.name}<br />
                    <label>Description</label>: {this.props.menuItem.description}<br />
                    <label>Number Available</label>: {this.props.menuItem.numAvailable}<br />
                    <label>Price</label>: {this.props.menuItem.price}<br />
                    <label>Item Number</label>: {this.props.menuItem.menuItemNumber}<br />
                </div>)
                : (
                    <div>Order is Empty</div>
                )
            )
    }
}

export default MenuItem;