import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

function Home() {

    const{register,handleSubmit,reset,setValue,formState:{errors}} =useForm();
  const [products, setProducts] = useState([]);

    function getData(){
        axios.get(`http://localhost:9292/product/getAll`)
          .then(response => setProducts(response.data));
      }

      useEffect(()=>getData,[])

  return (
//     <div>
//              <table className='table table-hover'  style={{margin:'auto', textAlign:'center',marginTop:'50px'}}>
 
//         <tbody>
          
//           {products.map(products => (
//             <tr key={products.productId}>
//               <td>{products.productId}</td>
//               <td>{products.productName}</td>
//               <td>{products.description}</td>
//               <td>{products.brand}</td>
//               <td>{products.category}</td>
//               <td><img src={'data:image/jpeg;base64,' + products.productImages[0].imageData} height={50} width={50} /></td>

//               {/* <td>{products.productImages.imageData}</td> */}


//         </tr>
//         ))}

//         </tbody>
// </table>
//  <div style={{display:'flex'}}>
     <div className="row row-cols-2 row-cols-md-4 g-2">
     
{
    products.map((pro,index)=>
       
        <div className="col">
        <div className="card" style={{width: "20rem", height:"22rem", padding:'10px', margin:'10px'}}>
<img src={'data:image/jpeg;base64,' + pro.productImages[0].imageData} height={150} />
  <div className="card-body">
    <h5 className="card-title">{pro.productName}</h5>
    <p className="card-text">{pro.description}</p>
    <a  href="#"  className="btn btn-primary"
        onClick={() => alert('Please login first!')}
    >Buy Now </a>
    
 
   </div>
</div>
</div>
    )
}

</div>  
)
}

export default Home