import React, { Component} from 'react';
//import { render} from 'react-dom';
import ReactDatatable from '@ashvin27/react-datatable';
//import createConfigs from './datatables.config'
import {columns,config, extraButtons} from './datatables.config'
import {getUsers} from '../../utils/api'

class UserList extends Component {
    constructor(props) {
        super(props);
        this.columns = columns
        this.config = config
        this.state = {
            records: [
              {
                "id": "55f14312c7447c3da7051b26",
                "address": "228 City Road",
                "name": ".CN Chinese",
                "postcode": "3JH",
                "rating": 5,
                "type_of_food": "Chinese"
              },
              {
                "id": "55f14312c7447c3da7051b27",
                "address": "376 Rayleigh Road",
                "name": "@ Thai",
                "postcode": "5PT",
                "rating": 5.5,
                "type_of_food": "Thai"
              },
              {
                "id": "55f14312c7447c3da7051b28",
                "address": "30 Greyhound Road Hammersmith",
                "name": "@ Thai Restaurant",
                "postcode": "8NX",
                "rating": 4.5,
                "type_of_food": "Thai"
              },
              {
                "id": "55f14312c7447c3da7051b29",
                "address": "30 Greyhound Road Hammersmith",
                "name": "@ Thai Restaurant",
                "postcode": "8NX",
                "rating": 4.5,
                "type_of_food": "Thai"
              }
            ]
        }
        this.extraButtons = []
    }
    componentWillMount() {
        //const response = getUsers().then((result)=>this.records = result.data.users)
       // this.records = 
       getUsers()
       .then(result => this.setState({ records: result.data.users }))
    }
    

    render() {
        return (
            <div>
                <ReactDatatable
                    config={this.config}
                    records={this.state.records}
                    columns={this.columns}
                    extraButtons={this.extraButtons}
                />
            </div>
        )
    }
}
export default UserList;
//render(<UserList />, document.getElementById("app"));