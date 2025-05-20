import Home from "../Header/Home";
import AddtoCart from "../Modules/User/ViewCart";
import ViewProfile from "../Modules/User/ViewProfile";
import { Route, Routes } from "react-router-dom";
import SideNav from "./SideNav";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import ViewProduct from "../Modules/User/ViewProduct";
import ViewCart from "../Modules/User/ViewCart";
import Addproduct from "../admin/Addproduct";
import Viewproduct from "../admin/Viewproduct";
import Addemployee from "../HEAD/Addemployee";
import Viewemployee from "../HEAD/Viewemployee";
import Updateorder from "../ORDERHEAD/Updateorder";
import Vieworder from "../ORDERHEAD/Vieworder";
import Profile from "./Profile";

function Dashboard(){

const employeeJson = localStorage.getItem("employee");
const employeeData = employeeJson ? JSON.parse(employeeJson) : null;
const inventoryRole = employeeData?.inventoryRole?.toUpperCase(); 

const userJson = localStorage.getItem("user");
const userData = userJson ? JSON.parse(userJson) : null;
const role = userData?.role?.toUpperCase(); 


const appRoute={
 USER:[
      {path:'/',component:<Home/>},
      {path:'Viewcart', component:<ViewCart/>},
      {path:'Account',   component:<ViewProfile/>},
      {path:'ViewProducts', component:<ViewProduct/>},

    ],
   ADMIN: [
      {path:'Addproduct', component:<Addproduct/>},
      {path:'Viewproduct', component:<Viewproduct/>}

    ],
     HEAD: [
      {path:'Addemployee', component:<Addemployee/>},
      {path:'Viewemployee', component:<Viewemployee/>}

    ],
    ORDERDELIVERY_HEAD: [
      {path:'Updateorder', component:<Updateorder/>},
      {path:'Vieworder/:userId' , component:<Vieworder/>}
    ]
}
let combinedRoute = [];

 if (employeeData) {
  combinedRoute = [...(appRoute[inventoryRole] || [])];
} else if (userData) {
  combinedRoute = [...(appRoute[role] || [])];
}

    return (
    <div >
        {/* <h2>Dashboard</h2> */}

        <div style={{backgroundColor:"lightgrey"}}>
         <Profile/>
        </div>

        <div style={{display:"flex", height:"80vh"}}>
          <div style={{backgroundColor:'lightgreen', width:"20%", flexDirection:"column"}}>
            <SideNav/>
          </div>

      <div style={{backgroundColor:'lightblue', width:"80%"}}>
        <Routes>
          {
            combinedRoute.map((mapping,index)=><Route key={index} path={mapping.path} element={mapping.component}></Route>)
          }
        </Routes>
        </div>
        </div>
    </div>

  )
}

export default Dashboard;
