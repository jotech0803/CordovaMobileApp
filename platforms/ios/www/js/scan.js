
function picker(index){
    
    cordova.plugins.barcodeScanner.scan(
                                        function (result) {
                                        var value = result.text
                                        /* get hold of warehouse array,
                                         change status from topick to toDespatch
                                         update array*/
                                        
                                        var warehouse = JSON.parse(localStorage.warehouse);
                                        
                                        warehouse[index][4] = 'toDespatch';
                                    
                                        
                                        localStorage.warehouse = JSON.stringify(warehouse);
                                        
                                        
                                        alert("Picked " + value + "Order # " + warehouse[index][0] + "Status: " + warehouse[index][4]);
                                        
                                        warehouse = JSON.parse(localStorage.warehouse);
                                 
                                        
                                        },
                                        
                                        function (error) {
                                          alert("Scanning failed: " + error);
                                        });
    location.reload();

    
    }

function despatcher(index){
    
    cordova.plugins.barcodeScanner.scan(
                                        function (result) {
                                        var value = result.text
                                    
                                        
                                        var warehouse = JSON.parse(localStorage.warehouse);
                                        
                                        warehouse[index][4] = 'Completed';
                                        
                                        
                                        localStorage.warehouse = JSON.stringify(warehouse);
                                        
                                        
                                        alert("Dispatched " + value + "Order # " + warehouse[index][0] + "Status: " + warehouse[index][4]);
                                        
                                        warehouse = JSON.parse(localStorage.warehouse);
                                        
                                        
        
                                        },
                                        function (error) {
                                        alert("Scanning failed: " + error);
                                        });
    location.reload();
    
}
