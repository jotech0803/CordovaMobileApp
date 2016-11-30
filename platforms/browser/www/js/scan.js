
function pick(index){
    
    cordova.plugins.barcodeScanner.scan(
                                        function (result) {
                                        var value = result.text
                                        /* get hold of warehouse array,
                                         change status from topick to toDespatch
                                         update array*/
                                        
                                        var warehouse = JSON.parse(localStorage.warehouse);
                                        
                                        warehouse[index][4] = 'toDespatch';
                                    
                                        
                                        localStorage.warehouse = JSON.stringify(warehouse);
                                        
                                        console.log(warehouse[0][4]);
                                        
                                        alert("Picked " + value + "Order # " + warehouse[0][0] + "Status: " + warehouse[0][4]);
                                        
                                        warehouse = JSON.parse(localStorage.warehouse);
                                 
                                        
                                        },
                                        
                                        function (error) {
                                          alert("Scanning failed: " + error);
                                        });
    location.reload();

    
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
