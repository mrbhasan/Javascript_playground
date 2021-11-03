//function constructor
const Mobile = function(brand, model, price, processor, ram, rom){
    this.brand = brand; 
    this.model = model; 
    this.processor = processor; 
    this.ram = ram; 
    this.rom = rom; 
}

//Objects
const Samsung = new Mobile("samsung", "G85", 17000, 2.2, 4, 64);
const Xiomi = new Mobile("Xiomi", "M6", 16500, 2.3, 4, 64);
const Realme = new Mobile("Realme", "Rmx12", 15500, 2.2, 4, 64);
const Walton = new Mobile("Walton", "WM85", 15000, 2.0, 4, 64);



//Promise
const buyPhone = new Promise(function(accept, reject){
    let myArr = [Samsung, Xiomi, Realme, Walton];
    let arrSerial = Math.floor(Math.random()*4) 

    if(myArr[arrSerial] == Xiomi || Samsung){
        accept(myArr[arrSerial])
    }else{
        reject(myArr[arrSerial])
    }

})

//Promise chain
buyPhone.then(
    function(accVal){
        let brand, model,processor, ram, rom, price; 
        brand = accVal.brand; 
        model = accVal.model; 
        processor = accVal.processor; 
        ram = accVal.ram
        rom = accVal.rom; 

        if(processor > 2 && ram > 3 && rom >=64){
            console.log("You can buy " + brand + " " + model + " Phone" )
        }else{
            console.log("wait for some days to get some update")
        }
    }, 

    function(err){
        let brand, model,message;
        brand = accVal.brand; 
        model = accVal.model; 
        message = brand + " " + model + " Is not a good choice"; 
        console.log(message);
        
        
    }
);












