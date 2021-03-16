function pivot(arr, start = 0, end = arr.length - 1) {
  let swap = (arr, idx1, idx2) => {[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]}
  let pivot = arr[start]
  let swapIdx = start
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
        console.log(arr)
        swapIdx+=1
        swap(arr, swapIdx, i)
        console.log(arr)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}
function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) 
        quickSort(arr,left,pivotIndex-1);
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 


console.log(quickSort([1,2,3,2,3,5,4,1,4]))