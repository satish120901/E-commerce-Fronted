import { Link } from "react-router-dom";

function SideNav() 
{
 const userJson = localStorage.getItem("user");
  const {role} = JSON.parse(userJson);
  //const {usertype} = JSON.parse(userJson);

  const options={
    
    User:[
      {label:'ViewCart', to:'/dashboard/Viewcart'},
      {label:'Account',to:'/dashboard/Account'},
      {label:'Logout' ,to:'/Logout'},
      {label:'ViewProducts',to:'/dashboard/ViewProducts'},
    ],
    admin:[
       {lable:'addproduct', to:'/dashboard/addproduct'},
      {lable:'viewproduct', to:'dashboard/viewproduct'},
    ],
    HEAD:[
       {lable:'addemployee', to:'/dashboard/addemployee'},
      {lable:'viewemployee', to:'/dashboard/viewemployee'}
    ],
   ORDERHEAD:[
    {lable:'addemployee', to:'/dashboard/addemployee'},
      {lable:'viewemployee',to:'/dashboard/viewemployee'}
   ]

  }

  return (
    <div>
  
       <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
        {
          
          options[role].map((btn,index)=> <Link className="btn btn-success m-2 " style={{width:"120px"}}key={index} to={btn.to}>{btn.label}</Link>)
        }
        </div>
    </div>
  )
}

export default SideNav;