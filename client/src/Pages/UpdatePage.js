import React from 'react';
import { useParams } from 'react-router';
import AppNavbar from '../Components/Common/AppNavbar';
import UpdateForm from '../Components/Update/UpdateForm';


const UpdatePage =() => {
    const params = useParams();
    console.log(params)
  
    return (
        <div>
            
            <AppNavbar></AppNavbar>
            <UpdateForm id={params.id}></UpdateForm>
        </div>
    );
};

export default UpdatePage;