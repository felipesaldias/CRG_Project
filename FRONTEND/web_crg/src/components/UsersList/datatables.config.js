import React, {Fragment } from 'react';
//export const extraButtons = 
export const config = {
    page_size: 10,
    length_menu: [ 10, 20, 50 ],
    button: {
        excel: true,
        print: true,
        extra: true,
    }
    
}
export const columns= [
    {
        key: "name",
        text: "Name",
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
    }/*,
    {
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
                        className="btn btn-primary btn-sm"
                        onClick={() => this.editRecord(record)}
                        style={{marginRight: '5px'}}>
                        <i className="fa fa-edit"></i>
                    </button>
                    <button 
                        className="btn btn-danger btn-sm" 
                        onClick={() => this.deleteRecord(record)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
            );
        }
    }*/
];
