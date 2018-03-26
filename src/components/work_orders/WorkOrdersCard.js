import React from 'react';
import ClientsLogo from 'components/clients/ClientsLogo';
import ContactsCard from 'components/contacts/ContactsCard';
import WorkOrdersDescription from 'components/work_orders/WorkOrdersDescription';
import WorkOrdersDetails from 'components/work_orders/WorkOrdersDetails';
import WorkOrdersViewButton from 'components/work_orders/WorkOrdersViewButton';
import WorkOrdersEditButton from 'components/work_orders/WorkOrdersEditButton';

function ButtonCard(props) {
    return (
        <div>
            <WorkOrdersViewButton/>
            <WorkOrdersEditButton/>
        </div>
    );
}

class WorkOrderCard extends React.Component {
    render() {
        return (
            <div>
                <ClientsLogo />
                <h4>Job Name</h4>
                <ContactsCard/>
                <ButtonCard />
                <WorkOrdersDescription/>
                <WorkOrdersDetails />
            </div>
        );
    }
}

export default WorkOrderCard;