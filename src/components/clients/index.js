import React from 'react';
import ClientsCard from 'components/clients/ClientsCard';
import ClientsList from 'components/clients/ClientsList';

class ClientsMain extends React.Component {
    render(){
        return(
            <div>
                <ClientsList />
            </div>
        );
    }
}

export default ClientsMain;