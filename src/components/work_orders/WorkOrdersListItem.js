import React from 'react';
import PropTypes from 'prop-types';
import css from '../main/main.scss';

function JobDetails(props) {
    return (
        <div className={css.job_details}>
            <h3 className={css.header}>{props.job_name}</h3>
            <ul>
                <li>Client: {props.client}</li>
                <li>Contact: {props.contact.name}</li>
                <li>Phone: {props.contact.phone}</li>
                <li>Email: {props.contact.email}</li>
                <li>Date: {props.date}</li>
            </ul>
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
        <div className={css.job_description}>
            <h3>Description</h3>
            <p>{props.job_description}</p>
        </div>
    );
}

JobDescription.propTypes = {
    job_description: PropTypes.string.isRequired
}


function WorkOrdersListItem(props) {
    return (
        <div className={css.work_orders_list_item}>
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

export default WorkOrdersListItem;