import React from 'react';
import UserItem from './UserItem';

class UsersList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [{
                id: 1,
                name: 'John Doe'
            }, {
                id: 2,
                name: 'Jane Doe'
            }, {
                id: 3,
                name: 'Jack Doe'
            }]
        };
    }

    delete (user) {
        this.setState({
            users: this.state.users.filter((u) => u.id != user.id)
        });
    }

    render () {
        let users = this.state.users, count = users.length, output;

        if (count > 0) {
            output =
                <ol>
                    {users.map((user) => {
                        return <UserItem key={user.id} user={user} delete={this.delete.bind(this, user)} />
                    })}
                </ol>;
        } else {
            output = <h4 className="text-center">No users were found</h4>;
        }

        return (
            <article>
                <h1 className="text-center">Users List ({users.length})</h1>
                {output}
            </article>
        );
    }
}

export default UsersList;
