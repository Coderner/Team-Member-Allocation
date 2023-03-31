import { useState} from "react";
import femaleProfile from "./Images/femaleProfile.jpg";
import maleProfile from "./Images/maleProfile.jpg";

const Employees = () =>{
   const [employees,setEmployees] = useState([
    {
        id:1,
        fullName:"Bob", 
        designation:"React Developer",
        gender:"male", 
        teamName:"Team A"
       },
       {
       id:2,
       fullName:"Jill", 
       designation:"Node Developer",
       gender:"female", 
       teamName:"Team A"
       },
       {
       id:3, 
       fullName:"Gale", 
       designation:"Java Developer",
       gender:"female", 
       teamName:"Team A"
      },
      {
       id:4, 
       fullName:"Sam", 
       designation:"React Developer",
       gender:"male", 
       teamName:"Team B"
     },
     {
       id:5, 
       fullName:"David", 
       designation:"DotNet Developer",
       gender:"male", 
       teamName:"Team B"
     },
     {
       id:6, 
       fullName:"Sarah", 
       designation:"SQL server DBA",
       gender:"female", 
       teamName:"Team B"
     },
     {  
       id:7, 
       fullName:"James", 
       designation:"Angular Developer",
       gender:"male", 
       teamName:"Team C"
     },
     {
       id:8, 
       fullName:"Jessica", 
       designation:"API Developer",
       gender:"female", 
       teamName:"Team C"
     },
     {
       id:9, 
       fullName:"Lita", 
       designation:"C++ Developer",
       gender:"female", 
       teamName:"Team C"
     },
     {
       id:10, 
       fullName:"Daniel", 
       designation:"Python Developer",
       gender:"male", 
       teamName:"Team D"
     },
     {
       id:11, 
       fullName:"Mary", 
       designation:"React Developer",
       gender:"female", 
       teamName:"Team D"
     },
     {
       id:12, 
       fullName:"Shaun", 
       designation:"API Developer",
       gender:"male", 
       teamName:"Team D"
     }
   ])
   return(
       <main className="container">
          <div class="row justify-content-center mt-3 mb-3">
            <div class="col-8">
              <div class="card-collection">
                 {
                   employees.map((employee) => (
                   <div id={employee.id} className="card m-2" style={{ cursor:"pointer"}}>

                       {(employee.gender)==="female" ? 
                         <img src={femaleProfile} className="card-img-top"/>:
                         <img src={maleProfile} className="card-img-top"/>}

                       <div className="card-body">
                          <h5 className="card-title">Full Name : {employee.fullName}</h5>
                          <p className="card-text"><b>Designation : </b> {employee.designation}</p>
                       </div>
                   </div>
                   ))
                 }
              </div>
            </div>
          </div>
       </main>
    )
  
}

export default Employees