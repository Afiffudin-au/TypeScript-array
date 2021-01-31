let numberArray : number[]
numberArray = [1,2,3,4,5]
function multipleArr(){
  let total : number
  total = 0
  let copyArray : number[]
  copyArray = [...numberArray]
  function sumArray():number{
    numberArray.forEach(item=>{
      total += item
    })
    return total
  }

  function manipulateArray(index:number,value:number):string | number[]{
    if(index > numberArray.length - 1){
      return `Error : expected index (${index}), but allowed index <= (${numberArray.length-1})`
    }
    numberArray[index] = value
    return numberArray
  }

  function addEndOfArray(index:number,value : number):string | number[]{
    if(index === numberArray.length + 1){
      return `Error : expected index (${index}),but end of array at index (${index - 1}) is filled`
    }
    if(index > numberArray.length - 1){
      numberArray[index] = value
    }else{
      return `Error : expected index (${index}), but allowed index > (${numberArray.length-1})`
    }
    return numberArray
  }

  return {
    numberArray,
    sumArray,
    manipulateArray,
    copyArray,
    addEndOfArray
  }
}
console.log(multipleArr().addEndOfArray(5,300))
