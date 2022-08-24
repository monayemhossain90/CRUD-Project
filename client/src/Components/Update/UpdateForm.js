import React, { Fragment, useEffect, useRef } from "react";
import FullScreenLoader from "../../helper/FullScreenLoader";
import {ReadById, Update} from "../../ApiServices/CrudServices"
import {
  ErrorToast,
  isEmpty,
  SuccessToast,
} from "../../helper/ValidationHelper";

const UpdateForm = (props) => {
  
  let ProductName,
    ProductCode,
    Img,
    UnitPrice,
    Qty,
    TotalPrice,
    Loader = useRef();

  const updateData = () => {
    let Product_Name = ProductName.value;
    let Product_Code = ProductCode.value;
    let Product_Img = Img.value;
    let Unit_Price = UnitPrice.value;
    let Product_Qty = Qty.value;
    let Total_Price = TotalPrice.value;

    // validation

    if (isEmpty(Product_Name)) {
      ErrorToast("Product Name Required");
    } else if (isEmpty(Product_Code)) {
      ErrorToast("Product code Required");
    } else if (isEmpty(Product_Img)) {
      ErrorToast("Product image Required");
    } else if (isEmpty(Unit_Price)) {
      ErrorToast("Unit price Required");
    } else if (isEmpty(Product_Qty)) {
      ErrorToast("Quantity Required");
    } else if (isEmpty(Total_Price)) {
      ErrorToast("Total Price Required");
    } else {
      // loader action start
      Loader.classList.remove("d-none");

      // data update
      Update(
        props.id,
        Product_Name,
        Product_Code,
        Product_Img,
        Unit_Price,
        Product_Qty,
        Total_Price
      ).then((result) => {
        Loader.classList.add("d-none");
        if (result === true) {
          SuccessToast("Data saved success");
          ProductName.value = "";
          ProductCode.value = "";
          Img.value = "";
          UnitPrice.value = "";
          Qty.value = "";
          TotalPrice.value = "";
        } else {
          ErrorToast("Request failed");
        }
      });
    }
  };

  // load readById data
  useEffect(()=>{
    ReadById(props.id).then((result) => {
      ProductName.value = result[0]["ProductName"]
      ProductCode.value = result[0]["ProductCode"];
    Img.value = result[0]["Img"];
    UnitPrice.value = result[0]["UnitPrice"];
    Qty.value =result[0]["Qty"];
    TotalPrice.value = result[0]["TotalPrice"]
         
    });

  });

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-2">
            <label>Product Name</label>
            <input
              ref={(input) => (ProductName = input)}
              type="text"
              class="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label>Product Code</label>
            <input
              ref={(input) => (ProductCode = input)}
              type="text"
              class="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label>Product Image</label>
            <input
              ref={(input) => (Img = input)}
              type="text"
              class="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label>Unit Price</label>
            <input
              ref={(input) => (UnitPrice = input)}
              type="text"
              class="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label>Quantity</label>
            <input
              ref={(input) => (Qty = input)}
              type="text"
              class="form-control"
            />
          </div>
          <div className="col-md-4 p-2">
            <label>Total Price</label>
            <input
              ref={(input) => (TotalPrice = input)}
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4 p-2 ">
            <button
              onClick={updateData}
              type="button"
              class="btn btn-primary w-100"
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <div className="d-none" ref={(div) => (Loader = div)}>
        <FullScreenLoader />
      </div>
    </Fragment>
    
  );
};

export default UpdateForm;
