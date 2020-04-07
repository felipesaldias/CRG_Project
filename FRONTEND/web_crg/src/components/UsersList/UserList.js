import React, { Fragment,Component} from 'react';
//import { render} from 'react-dom';
import ReactDatatable from '@ashvin27/react-datatable';
import './UserList.css';
//import createConfigs from './datatables.config'
import queryString from 'query-string'

import {getUsers} from '../../utils/api'
import PanelContext from '../../context/panel/panelContext';



class UserList extends Component {
    static contextType = PanelContext //allow access to the context

    constructor(props) {
        super(props);

        this.columns = [{
          key: "name",
          text: "Nombre",
          className: "name",
          align: "left",
          sortable: true,
      },
      {
          key: "rut",
          text: "Rut",
          className: "address",
          align: "left",
          sortable: true
      },
      {
          key: "type",
          text: "Tipo",
          className: "postcode",
          sortable: true
      },
      {
          key: "email",
          text: "Correo Electronico",
          className: "rating",
          align: "left",
          sortable: true
      },{
          key: "action",
          text: "Action",
          className: "action",
          width: 100,
          align: "left",
          sortable: false,
          cell: record => { 
              return (
                  <Fragment>
                      <button
                          className="btn btn-info btn-sm"
                          onClick={() => this.editUser(record)}
                          style={{marginRight: '5px'}}>
                          <i className="fa fa-edit"></i>
                      </button>
                  </Fragment>
              );
          }
      }]
        this.config = {
          page_size: 10,
          length_menu: [ 10, 20, 50 ],
          button: {
              excel: true,
              print: true,
              extra: true,
          }
          
      }
        this.state = {
            records: []
        }
        
        this.extraButtons = []
    }
    
    componentWillMount() {
        //const response = getUsers().then((result)=>this.records = result.data.users)
       // this.records = 
       console.log(this.props.location.search);
        console.log()
       getUsers()
       .then(result => this.setState({ records: result.data.users }))//aparte guardarlos en el contexto en una variable users
    }
    editUser(user) {
        console.log("Edit User", user);
        this.context.setUser(user).then(()=>{
            let from= queryString.parse(this.props.location.search).from
            if(from){
                this.props.history.push(`/crg/panel/user/${from}`)
            }
            else{
                this.props.history.push('/crg/panel/user/profile')
            }
        }
        )
      //
  }
    

    render() {
        return (
            <div className="container shadow bg-light mx-auto my-5 p-5">
                
                    <div className="titulo p-3">
                        <h1 className="text-center text-shadow mb-5">Lista de Usuarios</h1>
                    </div>
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