import React, { useRef } from "react";
import { Create } from "../../ApiServices/CrudServices";
import {
  ErrorToast,
  isEmpty,
  SuccessToast,
} from "../../helper/ValidationHelper";

const CreateForm = () => {
  let ProductName,
    ProductCode,
    Img,
    UnitPrice,
    Qty,
    TotalPrice = useRef();

  const saveData = () => {
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
      // data create
      Create(
        Product_Name,
        Product_Code,
        Product_Img,
        Unit_Price,
        Product_Qty,
        Total_Price
      ).then((result) => {
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

  return (
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
      <div className="row">
        <div className="col-md-4 p-2 ">
          <button
            onClick={saveData}
            type="button"
            class="btn btn-primary w-100"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
