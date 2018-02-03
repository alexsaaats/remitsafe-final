import React, {Component} from 'react';
import DeleteRow from '../BuyerDashboard/EditTable/deleteRow';
// import AddRow from '../BuyerDashboard/EditTable/addRow';
import EditorV from '../BuyerDashboard/EditTable/editModal';
import {staticFill} from "../../data.js";

import ReactTable from "react-table";
import "react-table/react-table.css";

export default class TableDynamic extends Component {
    state = {
        data: staticFill
    };

    //remitSafe Ver not editable
    renderEditable=(cellInfo) => {
        console.log(cellInfo);
        return (
            <div
                style={{ backgroundColor: "#fafafa", textAlign: "center" }}
                // contentEditable
                // suppressContentEditableWarning
                onBlur={e => {
                    const data = [...staticFill];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({ data });
                }}
                dangerouslySetInnerHTML={{
                    __html: staticFill[cellInfo.index][cellInfo.column.id]
                }}
            />
        )
    };

    vendorContactRender = (cellInfo) => {
        return (
            <div>
                <div>{cellInfo.value.name}</div>

                <div>{cellInfo.value.phoneNumber}</div>

                <div>{cellInfo.value.email}</div>
            </div>
        )};


    vendorRemitInfo = (cellInfo) => {
        return (
            <div>
                <div>{cellInfo.value.bankName}</div>

                <div>{cellInfo.value.streetAddress1}</div>

                <div>{cellInfo.value.routingNo}</div>

                <div>{cellInfo.value.accountNo}</div>
            </div>
        )};


    actionCell = (cellInfo) => {
        return (
            <div style={{textAlign: 'center'}}>
                <DeleteRow handleDelete={this.handleDelete(cellInfo.original.id)} />
                {/*<AddRow/>*/}
                <EditorV/>
                {/*<AddRow handleAdd={this.handleAdd(cellInfo.original.id)} />*/}
            </div>
        )};

    handleDelete =(id) => {
        return(
            () => {
                let updatedData = this.state.data.filter(row => (row.id !== id))
                this.setState({data: updatedData})
            }
        )
    };

    handleAdd =() => {
        return(
            () => {
                let addData = this.state.data.append(row => (row.data))
                this.setState({data: addData})
            }
        )
    };
            render() {
                // const { data } = this.state;
                return (
                    <div>
                        <ReactTable
                            data={this.state.data}
                            columns={[
                                {
                                    Header: "Vendor",
                                    accessor: "vendorName",
                                },
                                {
                                    Header: "Vendor Contact",
                                    accessor: "vendorContact",
                                    Cell: this.vendorContactRender
                                },
                                {
                                    Header: "Remit Info",
                                    accessor: "remitInfo",
                                    Cell: this.vendorRemitInfo
                                },
                                {
                                    Header: "RemitSafe Verified",
                                    accessor: "reSafeVerified",
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Actions",
                                    Cell: this.actionCell
                                },
                            ]}
                            defaultPageSize={5}
                            className="-striped -highlight"
                        />
                        <br/>
                    </div>
                );
            }
        };

