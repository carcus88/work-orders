/**
 * Created by mat on 3/17/18.
 */
import React from 'react';
import ContactDetails from 'components/work_orders/work_order_form/form_components/contact_details';
import JobDetails from 'components/work_orders/work_order_form/form_components/job_details';
import AddItem from 'components/work_orders/work_order_form/form_components/add_item';
import ItemList from 'components/work_orders/work_order_form/form_components/item_list';

class WorkOrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isEdit: false,
            clientName: 'Audio General',
            contactName: 'Dave Spiegel',
            contactPhone: '215-555-5555',
            jobName: 'PCOM - Replace Speakers',
            jobDate: new Date().toLocaleDateString(),
            jobDescription: 'Remove old speakers, and install new speakers',
            items: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event){
        alert('You did it');
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="btn btn-primary" type="submit" value="Save"/>
                    <ContactDetails
                        clientName={this.state.clientName}
                        contactName={this.state.contactName}
                        contactPhone={this.state.contactPhone}
                    />
                    <JobDetails
                        jobName={this.state.jobName}
                        jobDate={this.state.jobDate}
                        jobDescription={this.state.jobDescription}
                    />
                    <AddItem />
                    <ItemList />
                    <input className="btn btn-primary" type="submit" value="Save"/>
                </form>
            </div>
        );
    }
}

export default WorkOrderForm;
