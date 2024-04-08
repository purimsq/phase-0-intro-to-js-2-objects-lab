// Write your solution in this file!
const employee = {
    name : "Dan Lee", 
    streetAddress : "1409 Ohio"
  }
  
  let employeeObjCopy = "";
  
  function updateEmployeeWithKeyAndValue(obj, k, v){
    employeeObjCopy = {...obj};
    employeeObjCopy[k] = v;
  
    return employeeObjCopy
  };
  
  updateEmployeeWithKeyAndValue(employee, "name", "Maureen Kagwe");
  
  function destructivelyUpdateEmployeeWithKeyAndValue(obj, k, v){
    obj[k] = v;
  
    return obj
  };
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Maureen Kagwe");
  
  let employeeObjSecondCopy = "";
  
  function deleteFromEmployeeByKey(obj, k){
    employeeObjSecondCopy = {...obj};
    delete employeeObjSecondCopy[k];
  
    return employeeObjSecondCopy
  };
  
  deleteFromEmployeeByKey(employee, "streetAddress");
  
  function destructivelyDeleteFromEmployeeByKey(obj, k){
    delete obj[k];
  
    return obj
  };
  
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");