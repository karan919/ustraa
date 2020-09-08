import React, { useState } from "react";

import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';

import Button from '@material-ui/core/Button';

import './Css/SelectCategory.css';

const SelectCategory = (props) =>{
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    
    const openDrawerHandler = () =>{
        setDrawerIsOpen(true);
    }

    const closeDrawerHandler = () =>{
        setDrawerIsOpen(false);
    }

    const changeCategoryHandler = (id) =>{
        props.setCurrentCategory(id);
        closeDrawerHandler();
    };

    return(
        <div>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
            {drawerIsOpen && (
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                {props.category.map((category) => {
                    return (
                    <div
                        className="category-item"
                        key={category.category_id}
                        onClick={(e)=>changeCategoryHandler(category.category_id)}
                    >
                        {category.category_name}
                    </div>
                    );
                })}
            </SideDrawer>
            )}
            <h2>Selected category</h2>
            <div className="change-btn">
                <Button variant="outlined" onClick={openDrawerHandler}>Change</Button>
            </div>
        </div>
    );
}

export default SelectCategory;