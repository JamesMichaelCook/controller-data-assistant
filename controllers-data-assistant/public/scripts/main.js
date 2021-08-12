//Javascript - Controller's Data Assistant//


window.onload = function gdprFact() {
    
    var facts = [
        
          "Customers have a right to the erasure of data that we no longer have the need to possess"
        , "Does your organisation need a Data Protection Officer? If you are processing large quantities of sensitive data, please consider appointing a DPO"
        , "The Controller should be making decisions about the release and deletion of all data"
        , "How aware are customers of the data your business is collecting? How could you make them more aware?"
        , "Collecting data from customers through other businesses and without consent is called 'Invisible Processing'. This is an illegal form of processing data"
        , "ICO can fine Controllers and Processors for improper data-management. Please refer to the Regulation Guide to ensure compliance with GDPR is upheld"
        , "Have a nice day"
        , "Remember to take a break"
        , "Please contact us at demo-email-address@CDA.co.uk if you have any queries or issues with this software"
        , "This product is in an early developmental stage"
        , "Is this thing on?"
    ];
    
    var rand_Fact = Math.floor(Math.random() * facts.length);
    document.getElementById("chosen").innerHTML = facts[rand_Fact];
    
    //alert(document.getElementById("chosen").innerHTML);
    
}