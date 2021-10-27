import React from "react";


class User extends React.Component {

    state = ({
        name: 'Szef',
        permissonsOfficeList: [15, 18, 25],
        acceptOfficeList: [15, 18],
        defaultOffice: '15',
        defaultDesk: '1',
    });


    render() {
        return (
            <>
        <p>Hot Desk / {this.state.name} </p>
            </>
        )
    }
}

export default User;