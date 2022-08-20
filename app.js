var array = [];
var editindex;
var editValue;
const getValueInput = () => {
  console.log(editindex > -1);
  if (editindex > -1) {
    let inputvalue = document.getElementById("tasksinput").value;
    array.splice(editindex, 1, inputvalue);
    // console.log(editValue,inputvalue, array);
    editindex = -1;
    editValue = "";
  } else {
    let inputvalue = document.getElementById("tasksinput").value;
    array.push(inputvalue);
    // document.getElementById("tasksinput").value = "";
  }
  myFunction();
};
function myFunction() {
  document.getElementById("per2").innerHTML = "";
  for (var i = 0; i <= array.length; i++) {
    if (array[i] !== undefined) {
      document.getElementById("per2").innerHTML += ` <div class="foo3" >
            <input type="checkbox">
            <label for="meet friend">${array[i]}</label>
            <button class="text-white-50 bg-dark" onclick="deletetodo(${i})">delete</button>
            <button type="button" class="text-white-50 bg-dark" data-toggle="modal" data-target="#exampleModal" onclick="edittodo(${i})" >edit</button>
            </div>`;
    }
  }
}
function deletetodo(i) {
  array.splice(i, 1);
  myFunction();
  // console.log(array)
  // console.log(i)
}
// function edittodo(i){
//   let inputvalue = document.getElementById("tasksinput").value;
//   array.slice(i ,1 , inputvalue)
//   myFunction()

// }
function edittodo(i) {
  editindex = i;
  editValue = array[i];
  document.getElementById("tasksinput").value = editValue;
}
