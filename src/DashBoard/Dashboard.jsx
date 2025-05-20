import Home from "../Header/Home";
import AddtoCart from "../Modules/User/ViewCart";
import ViewProfile from "../Modules/User/ViewProfile";
import { Route, Routes } from "react-router-dom";
import SideNav from "./SideNav";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import ViewProduct from "../Modules/User/ViewProduct";
import ViewCart from "../Modules/User/ViewCart";
import Addproduct from "../Modules/admin/Addproduct";
import Viewproduct from "../Modules/admin/Viewproduct";
import Addemployee from "../Modules/HEAD/Addemployee";
import Viewemployee from "../Modules/HEAD/Viewemployee";



function Dashboard(){
const userJson = localStorage.getItem("user");
  const {role} = JSON.parse(userJson);

const appRoute={
 User:[
      {path:'/',component:<Home/>},
      {path:'Viewcart', component:<ViewCart/>},
      {path:'Account',   component:<ViewProfile/>},
      {path:'ViewProducts',   component:<ViewProduct/>},

    ],
    admin:[
       {path:'addproduct', component:<Addproduct/>},
      {path:'viewproduct', component:<Viewproduct/>},
    ],
    HEAD:[
       {path:'addemployee', component:<Addemployee/>},
      {path:'viewemployee', component:<Viewemployee/>}
    ],
   ORDERHEAD:[
    {path:'addemployee', component:<Addemployee/>},
      {path:'viewemployee', component:<Viewemployee/>}
   ]
}
    return (
    <div >
        {/* <h2>Dashboard</h2> */}

        <div style={{backgroundColor:"lightgrey"}}>
        
        </div>

        <div style={{display:"flex", height:"80vh"}}>
          <div style={{backgroundColor:'lightgreen', width:"20%", flexDirection:"column"}}>
            <SideNav/>
          </div>

      <div style={{backgroundColor:'lightblue', width:"80%"}}>
        <Routes>
          {
            appRoute[role].map((mapping,index)=><Route key={index} path={mapping.path} element={mapping.component}></Route>)
          }
        </Routes>
        </div>
        </div>
    </div>

  )
}

export default Dashboard;
