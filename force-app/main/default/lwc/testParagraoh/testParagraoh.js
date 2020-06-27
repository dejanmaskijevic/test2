import { LightningElement,track,api } from 'lwc';
import {Test2} from 'lightning/flowSupport';

export default class TestParagraoh extends LightningElement {
    @track txtBoxVal = '';

    @api
    
    get txtBoxVal(){
        return this.txtBoxVal;
    }
    set txtBoxVal(val){
        this.txtBoxVal = val;
    }
    handleChange(event) {
        this.txtBoxVal = event.target.value;
    }

    handleClick(event) {  
        const attributeChangeEvent = new FlowAttributeChangeEvent('txtBoxVal', this.txtBoxVal);
        this.dispatchEvent(attributeChangeEvent);  
    }

    
}