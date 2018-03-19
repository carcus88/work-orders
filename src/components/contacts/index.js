import React from 'react';

class Contacts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            contactName: 'David Spiegel',
            contactPhone: '215-555-5555',
            contactEmail: 'dspiegel@audiogeneral.com',
        };
    }

    render(){
        return(
            <div>
                <ul>
                    <li>{this.state.contactName}</li>
                    <li>{this.state.contactPhone}</li>
                    <li>{this.state.contactEmail}</li>
                </ul>
            </div>
        );
    }
}