const buttons = {
  get: function(selector) {
    return document.querySelector(selector);
  }
};

const template = {
  getEmp:  function () {
    let emp = new Object();
      emp.name = 'default';
      emp.officeNum = 'N/A';
      emp.phoneNum = "N/A";
    return emp;
  }
}

var employeeList = [
  {
    name: "Jan",
    officeNum: 1,
    phoneNum: "222-222-2222"
  },
  {
    name: "Juan",
    officeNum: 304,
    phoneNum: "489-789-8789"
  },
  {
    name: "Margie",
    officeNum: 789,
    phoneNum: "789-789-7897"
  },
  {
    name: "Sara",
    officeNum: 32,
    phoneNum: "222-789-4654"
  },
  {
    name: "Tyrell",
    officeNum: 3,
    phoneNum: "566-621-0452"
  },
  {
    name: "Tasha",
    officeNum: 213,
    phoneNum: "789-766-5675"
  },
  {
    name: "Ty",
    officeNum: 211,
    phoneNum: "789-766-7865"
  },
  {
    name: "Sarah",
    officeNum: 345,
    phoneNum: "222-789-5231"
  }
];

const buildGUI = {
  mainContent: function() {
    return document.querySelector("#content");
  },
  createSingleInputScreen: function () {
    buildGUI.mainContent().innerHTML = "";
      let inputForm = document.createElement("div");
      let top = document.createElement("section");
      let bottom = document.createElement("section");

      let userInput = document.createElement("input");
      let inputSubmit = document.createElement("div");
      let divider = document.createElement("hr");
      let results = document.createElement("div");

      inputForm.setAttribute('id', 'inputForm');
    
      top.setAttribute('id', 'top'); 
      bottom.setAttribute('id', 'bottom'); 
      userInput.setAttribute('id', "userInput");
      userInput.setAttribute('class', "userInput");
      inputSubmit.setAttribute('id', "submitButton");
      results.setAttribute('id', 'results');
      inputSubmit.textContent = "Text";
      
      top.appendChild(userInput);
      top.appendChild(inputSubmit);
      top.appendChild(divider);

      bottom.appendChild(results);
      
      inputForm.appendChild(top);
      inputForm.appendChild(bottom);

      buildGUI.mainContent().appendChild(inputForm);
  },
  createMultipleInputScreen: function () {
    buildGUI.mainContent().innerHTML = "";

    /****************************************************/

      let rowOne = document.createElement("div");

      let nameLabel = document.createElement("div"); 
        nameLabel.textContent = "Name"; 
        nameLabel.setAttribute("class", "label");

      let nameInput = document.createElement("input"); 
        nameInput.setAttribute("id", "userInput");
        nameInput.setAttribute("class", "userInput");

      rowOne.appendChild(nameLabel);
      rowOne.appendChild(nameInput);

    /****************************************************/

      let rowTwo = document.createElement("div");

      let numberLabel = document.createElement("div"); 
        numberLabel.textContent = "Number"; 
        numberLabel.setAttribute("class", "label");

      let numberInput = document.createElement("input");
        numberInput.setAttribute("id", "numberInput");
        numberInput.setAttribute("class", "userInput");

      rowTwo.appendChild(numberLabel);
      rowTwo.appendChild(numberInput);

    /****************************************************/    
      
      let rowThree = document.createElement("div");

      let phoneLabel = document.createElement("div"); 
        phoneLabel.textContent = "Phone"; 
        phoneLabel.setAttribute("class", "label");

      let phoneInput = document.createElement("input");
        phoneInput.setAttribute("id", "phoneInput"); 
        phoneInput.setAttribute("class", "userInput");

      rowThree.appendChild(phoneLabel);
      rowThree.appendChild(phoneInput);

    /****************************************************/    

      let inputSubmit = document.createElement("div");
        inputSubmit.setAttribute('id', 'submitButton');
        inputSubmit.textContent = "Text";

    /****************************************************/    

      let divider = document.createElement("hr");

    /****************************************************/    

      let results = document.createElement("div");
        results.setAttribute("id", "results");
    
    /****************************************************/

      let top = document.createElement("section");
        top.setAttribute('id', 'top');
        top.appendChild(rowOne);
        top.appendChild(rowTwo);
        top.appendChild(rowThree);
        top.appendChild(inputSubmit);
        top.appendChild(divider);

    /****************************************************/
      
      let bottom = document.createElement("section");
        bottom.setAttribute('id', 'bottom');
        bottom.appendChild(results);

    /****************************************************/  

      let inputForm = document.createElement("div");
        inputForm.setAttribute('id', 'inputForm');
        inputForm.appendChild(top);
        inputForm.appendChild(bottom);

      buildGUI.mainContent().appendChild(inputForm);
      
  },
  createTable: function() {
    buildGUI.mainContent().innerHTML = "";

    var table = document.createElement("table");
      table.classList.add("display");
      table.setAttribute("id", "employeeTable");

    var tableHead = document.createElement("thead");
    var headerRow = document.createElement("tr");

    var nameColumn = document.createElement("th");
      nameColumn.innerHTML = "Name";

    var officeNumColumn = document.createElement("th");
      officeNumColumn.innerHTML = "Office Number";

    var phoneNumColumn = document.createElement("th");
      phoneNumColumn.innerHTML = "Phone Number";

      headerRow.appendChild(nameColumn);
      headerRow.appendChild(officeNumColumn);
      headerRow.appendChild(phoneNumColumn);
      tableHead.appendChild(headerRow);
      table.appendChild(tableHead);

    var tableBody = document.createElement("tbody");

    employeeList.forEach(e => {
      let row = document.createElement("tr");

      let name = row.insertCell(0);
      name.innerHTML = e.name;

      let officeNum = row.insertCell(1);
      officeNum.innerHTML = e.officeNum;

      let phoneNum = row.insertCell(2);
      phoneNum.innerHTML = e.phoneNum;

      tableBody.appendChild(row);
    });

    table.appendChild(tableBody);

    buildGUI.mainContent().appendChild(table);

    $("#employeeTable").DataTable();
    $("#employeeTable").css("text-align", "center");
    $("#employeeTable_wrapper").css("margin", "50px");
  },
  createVerifyScreen: function () {
      buildGUI.createSingleInputScreen();
      document.querySelector("#submitButton").textContent = "Verify";
      buttons.get("#submitButton").addEventListener("click", _functions.verify);
  },
  createLookUpScreen: function () {
      buildGUI.createSingleInputScreen();
      document.querySelector("#submitButton").textContent = "LookUp";
      buttons.get("#submitButton").addEventListener("click", _functions.lookup);
  },
  createContainsScreen: function () {
      buildGUI.createSingleInputScreen();
      document.querySelector("#submitButton").textContent = "Contains";
      buttons.get("#submitButton").addEventListener("click", _functions.contains);
  },
  createUpdateScreen: function () {
      buildGUI.createMultipleInputScreen();
      document.querySelector("#submitButton").textContent = "Update";
      buttons.get("#submitButton").addEventListener("click", _functions.update);
  },
  createAddScreen: function () {
      buildGUI.createMultipleInputScreen();
      document.querySelector("#submitButton").textContent = "Add";
      buttons.get("#submitButton").addEventListener("click", _functions.add);
  },
  createDeleteScreen: function () {
      buildGUI.createSingleInputScreen();
      document.querySelector("#submitButton").textContent = "Delete";
      buttons.get("#submitButton").addEventListener("click", _functions.delete);
  }
};

const _functions = {
  getInput: function () {
    let data = new Object();
    data.name = document.querySelector("#userInput").value;
    data.officeNum = document.querySelector("#numberInput").value;
    data.phoneNum = document.querySelector("#phoneInput").value;
    return data;
  },
  addListeners: {
    printClick: function () {
      buttons.get("#print").addEventListener("click", buildGUI.createTable);      
    },
    verifyClick: function () {
      buttons.get("#verify").addEventListener("click", buildGUI.createVerifyScreen);      
    },
    lookUpClick: function () {
      buttons.get("#lookup").addEventListener("click", buildGUI.createLookUpScreen);      
    },
    containsClick: function () {
      buttons.get("#contains").addEventListener("click", buildGUI.createContainsScreen);
    },
    updateClick:  function () {
      buttons.get("#update").addEventListener("click", buildGUI.createUpdateScreen);
    },
    addClick:   function () {
      buttons.get("#add").addEventListener("click", buildGUI.createAddScreen);
    },
    deleteClick:  function () {
      buttons.get("#delete").addEventListener("click", buildGUI.createDeleteScreen);
    }
  },
  printEmp: function (employee) {
    let results = document.querySelector("#results");
    let empInstance = document.createElement('div');

    let name = document.createElement('p'); name.textContent = `Employee Name: ${employee.name}`;
    let officeNum = document.createElement('p'); officeNum.textContent = `Employee Office: #${employee.officeNum}`;
    let phoneNum = document.createElement('p'); phoneNum.textContent = `Employee Phone: #${employee.phoneNum}`;
    let divider = document.createElement('hr');

    empInstance.appendChild(name);
    empInstance.appendChild(officeNum);
    empInstance.appendChild(phoneNum);
    empInstance.appendChild(divider);

    results.appendChild(empInstance);
    
  },
  verify: function () {
    let userInput = document.querySelector("#userInput").value;
    let results = document.querySelector("#results");
    let emp = template.getEmp();
    let exists = false;

    employeeList.forEach( e => {
      if(userInput === e.name){
        exists = true;
        emp = e;
      }
    })
    
    results.textContent = exists ? "Employee Found" : "Employee Not Found";

    let data = {
      exists: exists,
      emp: emp
    }

    return data;
  },
  lookup: function () {
    let data = _functions.verify();
    let results = document.querySelector("#results");
    results.innerHTML = "";

    if(data.exists) {
      _functions.printEmp(data.emp);
    } else {
      results.textContent = "Employee Not Found";
    }

  },
  contains: function () {
    let results = document.querySelector("#results");
    results.innerHTML = "";
    let searchString = document.querySelector("#userInput").value;
    let matchedList = [];

    matchedList = employeeList.filter(
        employee => employee.name.toLowerCase().includes(searchString.toLowerCase()));

    if(matchedList.length > 0 ){
      matchedList.forEach ( e => { _functions.printEmp(e); })
    } else {
      results.textContent = "Employees Not Found";
    }
  },
  update: function () {
    let data = _functions.verify();
    let results = document.querySelector("#results");
    let input = _functions.getInput();

    results.innerHTML = "";

    if(data.exists) {
      data.emp.name = input.name;
      data.emp.officeNum = input.officeNum;
      data.emp.phoneNum = input.phoneNum;
      _functions.printEmp(data.emp);
    } else {
      results.textContent = "Employee Not Found";
    }
    
  },
  add:  function () {
    let data = _functions.verify();
    let results = document.querySelector("#results");
    let input = _functions.getInput();

    results.innerHTML = "";

    if(data.exists) {
      data.emp.name = input.name;
      data.emp.officeNum = input.officeNum;
      data.emp.phoneNum = input.phoneNum;
      _functions.printEmp(data.emp);
    } else {
      employeeList.push(input);
      _functions.printEmp(input);
    }

  },
  delete: function () {
    let data = _functions.verify();
    let results = document.querySelector("#results");

    results.innerHTML = "";

    if(data.exists) {
      for(let i = 0; i < employeeList.length; i ++) {
        if(data.emp.name === employeeList[i].name) {
          employeeList.splice(i, 1);
        }
      }
      results.textContent = "Employee Deleted";
    } else {
      results.textContent = "Employee Not Found";
    }
  }
}

_functions.addListeners.printClick();
_functions.addListeners.verifyClick();
_functions.addListeners.lookUpClick();
_functions.addListeners.containsClick();
_functions.addListeners.updateClick();
_functions.addListeners.addClick();
_functions.addListeners.deleteClick();