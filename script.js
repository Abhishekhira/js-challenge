console.log('file is connected')
let arr=[54,45,65,84,74]
let newEl=70;
let position=2;
console.log(arr)
for (let i =arr.length-1; i >=0; i--) {
    if(i>=position){
        arr[i+1]=arr[i]
        if (i===position) {
            arr[i]=newEl

        }
    }
    
}


console.log(arr)
let value =arr.splice(2,0,70)
console.log(arr)

//lets learn how we can delete an element from the array


let arr2=[54,65,21,32,57]

let position1=1
for (let i = position1; i < arr2.length; i++) {
  arr2[i] =arr2[i+1]
    
}
arr2.length=arr2.length-1    


console.log(arr2)
//lest try to do it with the help of method

arr2.splice(1,1,70)
console.log(arr2)

let searchElem=70
let item=undefined
for (let i = 0; i < arr2.length; i++) {
   if (arr2[i]===searchElem) {
    console.log(`${searchElem} is on ${i} index`)
   }
}

//;lets learn how we can merge two arrays 

let arrFirst=[32,56,12,54,78]
let arrTwo=[54,69,52,45]

let combine=[]
for (let i = 0; i < arrFirst.length; i++) {
  combine[i]=arrFirst[i]
    
}
for (let i = 0; i < arrTwo.length; i++) {
   combine[arrFirst.length+i]=arrTwo[i]
    
}
console.log(combine)


