import React from 'react';
import WorkOrdersDescription from 'components/work_orders/WorkOrdersDescription';
import WorkOrdersDetails from 'components/work_orders/WorkOrdersDetails';
import WorkOrdersViewButton from 'components/work_orders/WorkOrdersViewButton';
import WorkOrdersEditButton from 'components/work_orders/WorkOrdersEditButton';


class ClientsWorkOrdersList extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <WorkOrderDescription />
                </div>
                <div>
                    <WorkOrdersViewButton />
                    <WorkOrdersEditButton />
                </div>
            </div>
        );
    }
}

export default ClientsWorkOrdersList;