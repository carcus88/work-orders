import React from 'react';
import ClientsLogo from 'components/clients/ClientsLogo';

class ClientsCard extends React.Component {
    render(){
        return(
            <div>
                <ClientsLogo/>
                <ul>
                    <li>Address 1</li>
                    <li>Address 2</li>
                    <li>city</li>
                    <li>state</li>
                    <li>zip</li>
                    <li>Phone</li>
                </ul>
            </div>
        );
    }
}

export default ClientsCard;