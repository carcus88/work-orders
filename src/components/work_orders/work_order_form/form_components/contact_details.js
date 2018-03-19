import React from 'react';

function ContactDetails(props) {
    return (
        <div>
            <div className="form-group">
                <input className="form-control" type="text" defaultValue={props.clientName}/>
            </div>

            <div className="form-group">
                <input className="form-control" type="text" defaultValue={props.contactName}/>
            </div>

            <div className="form-group">
                <input className="form-control" type="text" defaultValue={props.contactPhone}/>
            </div>
        </div>
    );
}

export default ContactDetails;