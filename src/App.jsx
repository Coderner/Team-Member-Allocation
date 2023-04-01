import { useState, useEffect} from "react";
import './App.css';
import Navbar from './Navbar';
import Employees from './Employees';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';
import GroupedTeamMembers from "./GroupedTeamMembers";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const [selectedTeam,setTeam] = useState(JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB");
  const [employees,setEmployees] = useState(JSON.parse(localStorage.getItem("employeeList")) ||[
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

  useEffect(()=>{
     localStorage.setItem("employeeList",JSON.stringify(employees));
  },[employees]);

  useEffect(()=>{
    localStorage.setItem("SelectedTeam", JSON.stringify(selectedTeam));
  },[selectedTeam]);

  function handleTeamSelectionChange(event){
    setTeam(event.target.value);
  } 

  function handleEmployeeCardClick(event){
    const transformedEmployees = employees.map((employee) =>
     employee.id=== parseInt(event.currentTarget.id)?
     (employee.teamName===selectedTeam)?{...employee, teamName:""}:{...employee, teamName: selectedTeam}:
      employee);

    setEmployees(transformedEmployees);
  }
  return (
      <Router>
         <Navbar/>
         <Header
            selectedTeam={selectedTeam}
            teamMemberCount={employees.filter((employee)=>(employee.teamName===selectedTeam)).length}
         />
         <Routes>
            <Route path="/" element={
                       <Employees
                       employees={employees}
                       selectedTeam={selectedTeam}
                       handleTeamSelectionChange={handleTeamSelectionChange}
                       handleEmployeeCardClick={handleEmployeeCardClick}
                       />
            }>
            </Route>
            <Route path="/groupedTeamMembers" element={
                       <GroupedTeamMembers
                        employees={employees}
                        selectedTeam={selectedTeam}
                        setTeam={setTeam}/>
            }>
            </Route>
            <Route path="*" element={<NotFound/>}>
            </Route>
         </Routes>
         <Footer/> 
      </Router>
  );
}

export default App;
