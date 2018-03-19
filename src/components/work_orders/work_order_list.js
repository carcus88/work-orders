import React from 'react';

class WorkOrderList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            list: [],
        }
    }

    render(){
        return(
            <div>Work Orders List</div>
        );
    }
}

export default WorkOrderList;