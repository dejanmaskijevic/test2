import { LightningElement } from 'lwc';


const columns = [
    {label: 'First name', fieldName: 'firstName', type: 'text'},
    {label: 'Last name', fieldName: 'lastName', type: 'text'},
];

const data = [{
    id: 'a',
    firstName: 'Dejan',
    lastName: 'Maskijevic'
},
{
    id: 'b',
    firstName: 'Amer',
    lastName: 'Ibrahimovic'
},
{
    id: 'c',
    firstName: 'Emin',
    lastName: 'Garaca'
}
];

export default class Zadatak1 extends LightningElement {

    data = data;
    columns = columns;

    getSelectedName(event) {
        const selectedRows = event.detail.selectedRows;
        
        for (let i = 0; i < selectedRows.length; i++){
            alert("You selected: " + selectedRows[i].lastName);
        }
    }



}

