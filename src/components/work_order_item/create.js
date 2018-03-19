import React from 'react';

class CreateWorkOrderItem extends React.Component {
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
                <form className="form form-">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder={this.state.type}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder={this.state.rate}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder={this.state.date}/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="3" placeholder={this.state.description}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder={this.state.cost}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder={this.state.hours}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateWorkOrderItem;