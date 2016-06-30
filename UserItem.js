import React from 'react';

class UserItem extends React.Component {
    render() {
        return (
            <li className="user-item">
                <span className="user-item__title">{this.props.user.name}</span>
                <div className="pull-right">
                    <a href="javascript:void(0)" className="btn btn--danger" onClick={this.props.delete}>&times;</a>
                </div>
            </li>
        );
    }
}

export default UserItem;
