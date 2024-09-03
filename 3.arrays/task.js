function compareArrays(arr1, arr2) {
  let name = arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
  return name;
}
function getUsersNamesInAgeRange(users, gender) {
    let arr1 = users.filter((poi) => poi.gender === gender);
    if (arr1.length === 0) {
        return 0;   
    }
    let name = arr1.reduce((acc, cur) => acc + (cur.age ), 0) / arr1.length;
    return name;
}