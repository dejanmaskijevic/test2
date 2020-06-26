import { LightningElement, track } from 'lwc';
import { getFieldValue } from 'lightning/uiRecordApi';

const columns = [
    {label: 'Breed', fieldName: 'breed', type: 'text'},
    {label: 'Age', fieldName: 'age', type: 'text'},
    {label: 'Name', fieldName: 'name', type: 'text'},
];

const data = [{
    id: 'a',
    breed: 'Golden Retriever',
    age: '2',
    name: 'Dona'
},
{
    id: 'b',
    breed: 'Poodle',
    age: '12',
    name: 'Bambi'
},
{
    id: 'c',
    breed: 'German Shepherd',
    age: '6',
    name: 'Dzeki'
}

];

export default class Test extends LightningElement {
    @track Name;
    data = data;
    columns = columns;

    getSelectedName(event) {
        const selectedRows = event.detail.selectedRows;
        // Display that fieldName of the selected rows
        for (let i = 0; i < selectedRows.length; i++){
            alert("You selected: " + selectedRows[i].name);
        }
    }

    
   askForName() {
        this.Name = prompt('Enter your name:');
        alert('Hello ' + this.Name + '!');
    }


}