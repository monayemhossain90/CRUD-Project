import React from 'react';
import CreateForm from '../Components/Create/CreateForm';
import AppNavbar from "../Components/Common/AppNavbar"

const CreatePage = () => {
    return (
        <div>
            <AppNavbar></AppNavbar>
            <CreateForm></CreateForm>
        </div>
    );
};

export default CreatePage;