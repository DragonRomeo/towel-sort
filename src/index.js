module.exports = function towelSort(arr) {

  if (Array.isArray(arr) === false) {
    return []
  }
  let concatArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      arr[i].reverse()
    }
  }

  arr.forEach(elementArr => {
    concatArr = concatArr.concat(elementArr);
  });

  return concatArr;
}






