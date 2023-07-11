//your JS code here. If required.
let str = prompt("Enter a string");

str.trim();

let map = new Map();
for(let i = 0; i<str.length; i++){
    if(map.has(str[i])){
        map.set(str[i],map.get(str[i])+1);
    }else{
        map.set(str[i],1);
    }
}
//console.log(map);
for(let i = 0; i<str.length; i++){
    if(map.get(str[i])===1){
        alert(str[i]);
       // console.log(str[i]);
        break;
    }
}
