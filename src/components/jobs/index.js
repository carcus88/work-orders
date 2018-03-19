import React from 'react';

class Job extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            jobId: 0,
            jobName: 'Speaker Install - PCOM',
            jobDate: new Date().toLocaleDateString(),
            jobDescription: 'Remove old speakers and replace with new speakers',
        }
    }

    render(){
        return(
            <div>
                <ul>
                    <li>{this.state.jobName}</li>
                    <li>{this.state.jobDate}</li>
                    <li>{this.state.jobDescription}</li>
                </ul>
            </div>
        );
    }
}

export default Job;