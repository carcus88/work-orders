import React from 'react';

class AddressCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            line_1: '179 Madison Ave',
            line_2: '',
            city: 'Warminster',
            state: 'PA',
            zip_code: '18974',
        };

        this.fetchAddress = this.fetchAddress.bind(this);
    }

    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li>{this.state.line_1}</li>
                        <li>{this.state.line_2}</li>
                        <li>{this.state.city}</li>
                        <li>{this.state.state}</li>
                        <li>{this.state.zip_code}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

class Address extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            addresses: [],
        }
    }

    render(){
        return(
            <div>
                <AddressList />
            </div>
        );
    }
}

export default Address;