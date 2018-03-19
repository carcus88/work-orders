import React from 'react';

function JobDetails(props){
    return(
        <div>
            <div className="form-group">
                <input className="form-control" type="text" placeholder={props.jobName}/>
            </div>

            <div className="form-group">
                <input className="form-control" type="text" placeholder={props.jobDate}/>
            </div>

            <div className="form-group">
                <textarea className="form-control" rows="3" placeholder={props.jobDescription}/>
            </div>
        </div>
    );
}

export default JobDetails;