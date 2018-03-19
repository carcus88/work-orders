import React from 'react';

class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            workOrderId: 1,
            workOrderItemId: 1,
            type: 'Labor',
            rate: '150.00',
            date: new Date().toLocaleDateString(),
            description: 'This is the description of the work I did',
            cost: '190.00',
            hours: '4.5',
        };
    }

    render(){
        return(
            <div>
                <ul>
                    <li>{this.state.description}</li>
                    <li>{this.state.cost}</li>
                </ul>
            </div>
        );
    }
}

export default ListItem;