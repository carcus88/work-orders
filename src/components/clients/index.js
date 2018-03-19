import React from 'react';
import Address from 'components/address';
import Contacts from 'components/contacts';


class Clients extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            clientName: 'Audio General',
            physicalAddress: '',
            billingAddress: '',
            contacts: [],
        };
    }

    getAddress(){
        this.setState = ((prevState) => ({
            physicalAddress: <Address/>,
            billingAddress: <Address/>,
        }));
    }

    render(){
        return(
            <div>
                <ul>
                    <li>{this.state.clientName}</li>
                    <li>{this.getAddress()}</li>
                    <li>{this.getAddress()}</li>
                    <li>{this.state.contacts}</li>
                </ul>

            </div>
        );
    }
}

export default Clients;