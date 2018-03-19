import React from 'react';
import ListItem from './list_item';


class WorkOrderItemList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            list: [],
        };
    }

    render(){
        return(
            <div>
                <ListItem/>
            </div>
        );
    }
}

export default WorkOrderItemList;