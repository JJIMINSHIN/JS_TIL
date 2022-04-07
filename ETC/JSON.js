 //JSON
//JavaScript Object Notatopm

//1. Object to Json
letjson=JSON.stringify(true);
console.log(json);

json=JSON.stringify(['apple', 'banana']);
console.log(json);

constrabbit={
    name : 'tori',
    color :'white',
    birhDate: newDate(),
    jump: () =>{
        console.log(`${name} can jump!`);
    },
};

json=JSON.stringify(rabbit);
console.log(json);

//JSON으로 변환되는 것을 통제하고 싶다면 콜백함수 이용
//해당 property만 변환
json=JSON.stringify(rabbit, ["name","color"]);
console.log(json);

json=JSON.stringify(rabbit, (key, value) =>{
   console.log(`key :${key}, value : ${value}`);
   return key === 'name' ? 'ellie': value;
});


console.log(json);

console.clear()
//2.JSON to Object
//parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value): value;

});
console.log(obj);

// error 발생
// obj.jump(); 

letstandardObj= {
    'a': 'b',
    'aObj' : {
        aa: 'aa',
    },
    'array':[
        {aa:'aa'}
    ]
};

//a의 value를 가져와보자
console.log(standardObj.a)

//aObj value를 가져와보자
console.log(standardObj.aObj)

//array value를 가져와보자
console.log(standardObj.array)

//array에 bb:'bb'를 넣어보자
standardObj.array.push({
    aa:'zz',
    bb:'ll'
});


//aa를 뽑아보자

console.log('>>',standardObj.array);
console.log('[]',standardObj['aObj']['aa'])
console.log('===',standardObj['array'][0]['aa']);
console.log('===',standardObj['array'][1]['aa']);


// 도움을 줄 수 있는 사이트
//JSON Diff.com
//JSON Beautifier
//JSON Parser
//JSON Validator