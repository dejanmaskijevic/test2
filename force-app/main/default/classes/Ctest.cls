@isTest
public with sharing class Ctest {
    @isTest
    public Ctest() {
    }
    @isTest 
        public static void shouldReturn421(){
            //arrange
                Collatz collatz = new Collatz();
                Integer result1;
                Integer actual1=421;
            //act
                result1=collatz.CollatzSequence(4);
            //assert
                System.assertEquals(actual1, result1);
        }
}
