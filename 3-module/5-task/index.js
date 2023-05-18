function getMinMax(str) {
  let numsArr = str.split(' ').filter(elem => !isNaN(elem)); 
  let minNum = Math.min(...numsArr); 
  let maxNum = Math.max(...numsArr); 
  return {
    min: minNum,
    max: maxNum
  };// ваш код...
}
