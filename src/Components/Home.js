import React, { useEffect, useState } from "react";

import CategoryTabs from './CategoryTabs';
import ProductList from './ProductList';
import SelectCategory from './SelectCategory';

const Home = () =>{
    const [categoryList, setCategoryList] = useState([]);
    const [productList, setPrductList] = useState({});

    const changeCategoryHandler = (id) =>{
        (async () =>{
            const response = await fetch(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${id}`);
            if (!response.status === 200) {
                throw new Error(response.status);
            }
            const data = await response.json();
            setPrductList(data);
        })();
    }

    useEffect(() => {
        (async () =>{
            const response = await fetch("https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob");  
            if (!response.status === 200) {
                throw new Error(response.status);
            }
            const data = await response.json();
            setCategoryList(data.category_list);
            setPrductList(data.product_list);
        })();
    }, []);

    if (!categoryList) {
    return <p>Loading..</p>;
    }
    return(
        <div>
            <CategoryTabs category={categoryList} setCurrentCategory={changeCategoryHandler} />
            <ProductList products={productList.products} count={productList.count}/>
            <SelectCategory category={categoryList} setCurrentCategory={changeCategoryHandler} />
        </div>
    );
}

export default Home;