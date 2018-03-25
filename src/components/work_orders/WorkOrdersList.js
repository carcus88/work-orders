import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import css from '../main/main.scss';

function ViewToggle(props) {
    return (
        <div>
            <div>
                <Link to='/'>View</Link>
            </div>
            <div>
                <Link to='/'>Edit</Link>
            </div>
        </div>
    );
}

function JobDetails(props) {
    return (
        <div className='card-body'>
            <h5>{props.job_name}</h5>
            <div>
                <p>Client: {props.client}</p>
                <p>Contact: {props.contact.name}</p>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
                <p>Date: {props.date}</p>
            </div>
            <div>
                <ViewToggle />
            </div>
        </div>
    );
}

JobDetails.propTypes = {
    job_name: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    contact: PropTypes.object.isRequired,
    date: PropTypes.object.isRequired
}

function JobDescription(props) {
    return (
        <div className='card-body'>
            <h5>Description</h5>
            <p>{props.job_description}</p>
        </div>
    );
}

JobDescription.propTypes = {
    job_description: PropTypes.string.isRequired
}


function WorkOrdersListItem(props) {
    return (
        <div className='card'>
            <JobDetails
                client={props.item.client}
                job_name={props.item.job_name}
                contact={{
                        name: props.item.contact.name,
                        phone: props.item.contact.phone,
                        email: props.item.contact.email
                        }}
                date={props.item.date}
            />
            <JobDescription job_description={props.item.job_description}/>
        </div>
    );
}

WorkOrdersListItem.propTypes = {
    item: PropTypes.object.isRequired
}

class WorkOrdersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    client: 'Audio General',
                    job_name: 'PCOM Speaker replace',
                    contact: {
                        name: 'Dave Speigel',
                        phone: '215-555-5555',
                        email: 'daves@ag.com'
                    },
                    job_description: 'Did some things that were not fun',
                    date: new Date().toLocaleDateString()
                }
            ]
        };

    }

    render() {

        var listItems = this.state.list;
        var mappedList = listItems.map(function (item, id) {
            return (
                <div key={id}>
                    <WorkOrdersListItem item={item}/>
                </div>
            )
        });

        return (
            <div>
                <h3>Work Orders List</h3>
                {mappedList}
            </div>
        );
    }
}

export default WorkOrdersList;