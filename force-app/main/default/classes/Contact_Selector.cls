public with sharing class Contact_Selector {
    public Contact_Selector() {

        
    }
       getFiveRandomContacts(){
            List<Contact> randomContacts = 
            [SELECT Id,Name,FirstName,LastName,Email FROM Contact LIMIT 5 OFFSET :rand];
            
            return randomContacts;
        }

    }

