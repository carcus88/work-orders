import React from 'react';
import WorkOrderItem from 'components/work_order_item';


function ItemList(props){
    return(
        <div>
            <div className="form-group">
                <WorkOrderItem />
            </div>
        </div>
    );
}

export default ItemList;