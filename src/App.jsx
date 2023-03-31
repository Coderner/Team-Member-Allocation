import { useState} from "react";
import './App.css';
import Employees from './Employees';
import Header from './Header';

function App() {
  const [selectedTeam,setTeam] = useState("TeamB");
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
    <div>
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((employee)=>(employee.teamName===selectedTeam)).length}
      />
      <Employees
        employees={employees}
        selectedTeam={selectedTeam}
        handleTeamSelectionChange={handleTeamSelectionChange}
        handleEmployeeCardClick={handleEmployeeCardClick}
      />
    </div>
  );
}

export default App;
