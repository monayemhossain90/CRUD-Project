const axios = require("axios");

// Create
export function Create(ProductName,ProductCode,Img, UnitPrice, Qty,TotalPrice) {
  let url = "/api/v1/insertProduct";
  let postBody = {
    ProductName: ProductName,
    ProductCode: ProductCode,
    Img: Img,
    UnitPrice:  UnitPrice,
    Qty:  Qty,
    TotalPrice: TotalPrice,
  };

  return axios.post(url,postBody)
    .then((res) => {
        if (res.status===200) {
            return true
            
        } else {
            return false
            
        }
    })
    .catch(err=>{
        console.log(err);
        return false;
    });
}

// Read 
export function Read() {
  let url = "/api/v1/readProduct";
  return axios.post(url)
    .then((res) => {
        if (res.status===200) {
            return res.data['data'];
            
        } else {
            return false;
        }
    })
    .catch(err=>{
        console.log(err);
        return false;
    });
}

// update
export function Update(id,ProductName, ProductCode,Img,UnitPrice,Qty,TotalPrice) {
  let url = "/api/v1/updateProduct/" + id;
  let postBody = {
    ProductName:ProductName,
    ProductCode:ProductCode,
    Img:Img,
    UnitPrice:UnitPrice,
    Qty:Qty,
    TotalPrice:TotalPrice
  };
  return axios.post(url,postBody)
  .then((res) => {
      if (res.status===200) {
          return true
          
      } else {
          return false
          
      }
  })
  .catch(err=>{
      console.log(err);
      return false;
  });
}

// Delete
export function Delete(id) {
  let url = "/api/v1/deleteProduct/" + id;
  return axios.post(url)
    .then((res) => {
        if (res.status===200) {
            return true;
            
        } else {
            return false;
        }
    })
    .catch(err=>{
        console.log(err);
        return false;
    });
}
