const arr = [1, 2, 3, 4];
// console.log(arr.unshift(5));
// console.log(arr.filter((item)=> item < 3))
// console.log(arr.find((item)=> item ===3))

// const customFind = (arr,callback) =>{
// let count = 0
// let result;
// 	for(let i = 0;i < arr.length;i++){
//      count++
//         if(callback(arr[i]))  {
//         	result = arr[i]

//         	break;
//         }

// 	}
// 	console.log(0)
// 	return result

// }

// let callback = (item) => (item > 2);
// console.log(customFind(arr,callback))

// const startEndDeleteMethood  = (arr,type)=> {

// if(type === "start") {
//  for(let i = 1;i < arr.length;i++) {
//    arr[i -1] = arr[i]
//  }
// }

// arr.length = arr.length - 1
// return arr;
// }

// console.log(startEndDeleteMethood(arr,'end'))

function unshift(arr, ...elements) {
  // looping items
  for (let i = 0; i < originalLength; i++) {
    arr[elements.length - 1 - i] = arr[arr.length - 1 - i];
  }
  // for (let j = 0; j < elements.length; j++) {}
  // // add length into this array
  arr.length = arr.length + elements.length;
  return arr;
}

console.log(unshift(arr, 0, 0, 0));
