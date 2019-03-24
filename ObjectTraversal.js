var CarObj={
    "BMW":{
        "CompanyName":"Bavarian Motor Werks",
        "Class":"premium",
        "Model":["M2","M3"],
        "Color":["Red","Blue","White"]
    },
    "Audi":{
        "CompanyName":"Audi",
        "Class":"premium",
        "Model":["A1","A2"],
        "Color":["Red","Blue","White"]
    },
    "Jeep":{
        "CompanyName":"Jeep America ltd",
        "Class":"Medium",
        "Model":["Cherokee","Compass"],
        "Color":["Red","Blue","Grey"]
    }
};

function DeleteObject(Obj)
{
    delete this.Obj;
}

function UpdateProperty(Brand,Prop,Val)
{
    if(Array.isArray(CarObj[Brand][Prop]))
    {
        CarObj[Brand][Prop].push(Val);
    }
    else
    CarObj[Brand][Prop]=Val;
}

function AddBrandIfNotAvailable(Brand,Prop,Val)
{
   if(CarObj.hasOwnProperty(Brand)==false)
    {
        Object.defineProperty(CarObj,Brand,{value:
        {
            "CompanyName":"",
            "Class":"",
            "Model":[],
            "Color":[]
        }
        });
    }
}

function UpdateCarObj(Brand,Prop,Val)
{
    "use strict";
    AddBrandIfNotAvailable(Brand,Prop,Val);
     
    if(Val=="")
        {
            DeleteObject(CarObj[Brand][Prop]);
        }
    else
        UpdateProperty(Brand,Prop,Val); 
        

        //console.log(CarObj);
        console.log(JSON.stringify(CarObj[Brand]));
    
}
UpdateCarObj("Honda","Class","Middle");



