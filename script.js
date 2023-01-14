
try { 

    var arraydata = {};
    arraydata["name"] = document.getElementById("input1").value;
    arraydata["profession"] = document.getElementById("input2").value;
    arraydata["age"] = document.getElementById("input3").value;

function validate(){
    let name = document.getElementById("input1").value;
    let profession = document.getElementById("input2").value;
    let age = document.getElementById("input3").value;
    if(name == ""){
        alert("name should not be empty");
        return false;
    }
    if(profession == ""){
        alert("profession should be filled");
        return false;
    }
    if(age == ""){
        alert("age should be filled");
        return false;
    }
    return true;
}
    function addData(){
        validate();
        let formdata = getdata();
        let showdata = insertdata(formdata);
        console.log(showdata);
}

function insertdata(){
    let list = document.getElementById("putdata");
    list.innerHTML = "";
    arraydata.forEach(emp=>{
        let row = document.createElement("tr");
        row.innerHTML = 
        `<td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.profession}</td>
        <td>${emp.age}</td>
        <td><button onclick="ondel(${emp.id})">Delete user</button></td>`;
    })


}
function ondel(id){
    arraydata = arraydata.filter(emp =>{
        emp.id!==id});
   insertdata();
}
function getdata(){
    var arraydata = {};
    arraydata["name"] = document.getElementById("input1").value;
    arraydata["profession"] = document.getElementById("input2").value;
    arraydata["age"] = document.getElementById("input3").value;
    // console.log(arraydata.length);
    return arraydata;
}

function resetForm(){
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
}


} catch (error) {
    console.log(error.message);
}
