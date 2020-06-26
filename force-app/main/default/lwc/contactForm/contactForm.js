import { LightningElement, api } from 'lwc';
import { ShowToastEvent} from 'lightning/platformShowToastEvent';

import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';

export default class ContactForm extends LightningElement {
@api recordId;
@api objectApiName= 'Contact';
fields = [FIRSTNAME_FIELD, LASTNAME_FIELD];

handleSubmit(event){

    console.log('Contact detail : ', event.detail.fields);
    console.log('Contact name : ',event.detail.fields.LastName);



    const evt = new ShowToastEvent({
        title: "Contact created",
        message: "Contact " + event.detail.fields.LastName + "created!",
        variant: "success"
    });

    this.dispatchEvent(evt);
}

}