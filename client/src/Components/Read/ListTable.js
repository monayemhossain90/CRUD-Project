import React, { useEffect, useState } from "react";
import { Delete, Read, Update } from "../../ApiServices/CrudServices";
import FullScreenLoader from "../../helper/FullScreenLoader"

const ListTable = () => {
    const [dataList,setDataList]=useState([]);
    // data read   
  useEffect(() => {
    Read().then((result) => {
      setDataList(result)
    });
  }, []);

//    delete item function
  const deleteItem =(id)=>{
    Delete(id)
    .then(result=>{
        if (result===true) {
            alert("Delete successfully")
            
        } else {
            alert("Delete failed")
            
        }
    })
    
  }

//   update item function
const updateItem =(id)=>{
   Update(id)
   .then(result=>{
    if (result===true) {
        alert("update successfully")
        
    } else {
        alert("update failed")
        
    }
   })

}


  if (dataList.length>0) {
    return (
        <div>
          <table className="table">
            <thead>
                <tr>
                    <th>ProductName</th>
                    <th>ProductCode</th>
                    <th>Img</th>
                    <th>UnitPrice</th>
                    <th>Qty</th>
                    <th>TotalPrice</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {dataList.map(item=>{
                    console.log(item)
                    return(
                        <tr>
                            <td>{item.ProductName}</td>
                            <td>{item.ProductCode}</td>
                            <td><img className="listImg" src={item.Img} alt="product img" /></td>
                            <td>{item.UnitPrice}</td>
                            <td>{item.Qty}</td>
                            <td>{item.TotalPrice}</td>
                            <td>
                                <button onClick={()=>deleteItem(item._id)} className="btn btn-danger mx-1">Delete</button>
                                <button onClick={()=>updateItem(item._id)} className="btn btn-primary mx-1">Update</button>
                            </td>
                            
                        </tr>
                    )
                })}
            </tbody>
          </table>
        </div>
      );
    
  } else {
    return(
        <div>
            <FullScreenLoader/>
        </div>

    )
  }
};

export default ListTable;
