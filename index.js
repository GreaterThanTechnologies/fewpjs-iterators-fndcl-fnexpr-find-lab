superbowlWin = function(record) {
  console.log(result)

  let result = record.find( record => record.result === "W" )
  console.log(result)

  return !!result ? result.year : undefined
  console.log(result)
}

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, -2, -5, -4]
// console.log(arr)
// function filterPositive(num) {
//   if (num > 0)
//     return (num)

// }
// document.write(arr)
// let result = arr.find(filterPositive)
// document.write(result)












const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
] 