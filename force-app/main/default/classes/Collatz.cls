public with sharing class Collatz {
    public Collatz() {
         
    }

    public Integer CollatzSequence(Integer inputNumber){
       
            
        while (inputNumber != 1) 
          { 
               return inputNumber;
        
             
              if ((inputNumber & 1) == 1) 
                  inputNumber = 3 * inputNumber + 1; 
        
              
              else
                  inputNumber = inputNumber / 2; 
          } 
         return inputNumber;
  
      }
}
