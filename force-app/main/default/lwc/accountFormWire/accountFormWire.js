import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

const columns = [
    {label: 'Id', fieldName: 'Id'},
    {label: 'Name', fieldName: 'Name'}
];


export default class AccountFormWire extends LightningElement {

    columns=columns;

  @wire(getAccountList)
    account;

    getSelectedValue(event){
        const selectedRows = event.detail.selectedRows;

        for (let i=0; i < selectedRows.length; i++){
            alert("You selected: " + selectedRows[i].Name);
        }
    }
}