
function pick(){
    
    cordova.plugins.barcodeScanner.scan(
                                        function (result) {
                                        var value = result.text
                                          alert("Picked " + value);
                                      
                                        },
                                        function (error) {
                                          alert("Scanning failed: " + error);
                                        });
    }

function despatch(){
    
    cordova.plugins.barcodeScanner.scan(
                                        function (result) {
                                        var value = result.text
                                        alert("Despatched " + value);
                                        
                                        },
                                        function (error) {
                                        alert("Scanning failed: " + error);
                                        });
}


/*
function scan(){
    if(localStorage.getItem("LocalData") == null){
        var data = [];
        data = JSON.stringify(data);
        localStorage.setItem("LocalData", data);
    }
    cordova.plugins.barcodeScanner.scan(
       function (result) {
        if(!result.cancelled){
           if(result.format == "QR_CODE"){
             navigator.notification.prompt("Please enter name of data",  function(input){
               var name = input.input1;
               var value = result.text;
               var data = localStorage.getItem("LocalData");
            
         
                data = JSON.parse(data);
                data[data.length] = [name, value];
                localStorage.setItem("LocalData", JSON.stringify(data));
                alert("Done");
                });
           }
         }
       },
       function (error) {
         alert("Scanning failed: " + error);
       });
           console.log('Hello World!');
    console.log(data);
    
}

function display(){
    console.log(data);
}

                                        
        */
