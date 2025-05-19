import { Link } from "react-router-dom";

function SideNav() 
{
const employeeJson = localStorage.getItem("employee");
const employeeData = employeeJson ? JSON.parse(employeeJson) : null;
const inventoryRole = employeeData?.inventoryRole?.toUpperCase();

const userJson = localStorage.getItem("user");
const userData = userJson ? JSON.parse(userJson) : null;
const role = userData?.role?.toUpperCase();

  const options={
    
    USER:[
      {label:'ViewCart', to:'/dashboard/Viewcart'},
      {label:'Account',to:'/dashboard/Account'},
      {label:'Logout' ,to:'/Logout'},
      {label:'ViewProducts',to:'/dashboard/ViewProducts'},
    ],
     ADMIN: [
      {label:'Addproduct', to:'/dashboard/addproduct'},
      {label:'Viewproduct', to:'/dashboard/viewproduct'}

    ],
     HEAD: [
      {label:'Addemployee', to:'/dashboard/addemployee'},
      {label:'Viewemployee', to:'/dashboard/viewemployee'}

    ],
    ORDERDELIVERY_HEAD: [
      {label:'Updateorder', to:'/dashboard/updateorder'},
      {label:'Vieworder' , to:'/dashboard/vieworder/:userId'}
    ]
  }
let combinedRoute = [];

  if (userData) {
   
    combinedRoute = [...(options[role] || [])];
  } else if (employeeData) {
  
    combinedRoute = [...(options[inventoryRole] || [])];
  }
  return (
    <div>
  
       <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
        {
          
  combinedRoute.map((btn, index) => 
            <Link
              className="btn btn-success m-2"
              style={{ width: "120px" }}
              key={index}
              to={btn.to}
            >
              {btn.label}
            </Link>
          )
        }
        </div>
    </div>
  )
}

export default SideNav;