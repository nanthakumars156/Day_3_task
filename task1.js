let obj1 = {name:"Person 1", age:5};
let obj2 = {age:5,name:"Person 1"};

var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(var key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("If object is equal "+flag);