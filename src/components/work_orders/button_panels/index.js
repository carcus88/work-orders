import React from 'react';


function New (props){
    return(
        <div className="navbar navbar-expand-lg">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="navbar-link" to="" ></Link>
                </li>
            </ul>
        </div>
    );
}
function List (props){
    return(
        <div className="navbar navbar-expand-lg">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="navbar-link" to="" ></Link>
                </li>
            </ul>
        </div>
    );
}
function Edit (props){
    return(
        <div className="navbar navbar-expand-lg">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="navbar-link" to="" ></Link>
                </li>
            </ul>
        </div>
    );
}




class WorkOrdersButtonPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 1,
        }
    }

    render(){
        return(
            <div>
            </div>
        );
    }
}

export default WorkOrdersButtonPanel;