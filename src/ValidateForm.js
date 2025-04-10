import React from 'react'

const ValidateForm = (form) => {
   let errors = {}
   if(form.name.length < 3){
      errors.name = "Name should be of minimum 3 characters"
   }
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   if(!emailRegex.test(form.email)){
      errors.email = "Email is not valid"
   }
      
   //const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   const passwordErrors = [];
   if (form.password.length < 8) {
      passwordErrors.push("at least 8 characters");
   }
   if (!/[A-Z]/.test(form.password)) {
      passwordErrors.push("at least one uppercase letter");
   }
   if (!/[a-z]/.test(form.password)) {
      passwordErrors.push("at least one lowercase letter");
   }
   if (!/\d/.test(form.password)) {
      passwordErrors.push("at least one number");
   }
   if (!/[@$!%*?&]/.test(form.password)) {
      passwordErrors.push("at least one special character");
   }
   if (passwordErrors.length > 0) {
      errors.password = `Password must include ${passwordErrors.join(", ")}.`;
   }

   if(form.password !== form.confirmPassword){
      errors.password = "Password and Confirm password should be same"
   }
      
  // const phoneRegex = /^[6-9]\d{9}$/;
   if (form.phoneNumber.length !== 10) {
      errors.phoneNumber = "Phone number should contain 10 digits";
   } else {
      const phoneRegex = /^[6-9]\d{9}$/; 
      if (!phoneRegex.test(form.phoneNumber)) {
         errors.phoneNumber = "Phone number is not a valid Indian number";
      }
   }

   return errors
}

export default ValidateForm