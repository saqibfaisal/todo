var array = [];
const getValueInput = () => {
  let inputvalue = document.getElementById("tasksinput").value;
  array.push(inputvalue);
  myFunction();
};
function myFunction() {
    document.getElementById("per2").innerHTML = ""
    for (var i = 0; i <= array.length; i++) {
        if(array[i]!==undefined){
             document.getElementById("per2").innerHTML += ` <div class="foo3" >
            <input type="checkbox">
            <label for="meet friend">${array[i]}</label></div>`;
  }

        }
   
}
