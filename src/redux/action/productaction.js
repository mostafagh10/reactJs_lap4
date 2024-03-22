import { GET_PRODUCT , GET_PRODUCTS } from "../constant/productconstant";
import axios from "axios";

export const getproductsaction = () => async dispatch => {
    try {
        const response = await axios.get('https://dummyjson.com/products')
        dispatch({type:GET_PRODUCTS , payload : response.data.products})
    } catch (error) {
        console.log(error)
    }
}

export const getspecificproductaction = (Id) => async dispatch => {
    try {
        const response = await axios.get(`https://dummyjson.com/products`);
        const response2 = response.data.products;
        const filteredProduct = response2.filter(pr => pr.id == Id);
        console.log(filteredProduct)
        dispatch({type:GET_PRODUCT , payload : filteredProduct[0]})
        console.log(filteredProduct)
    } catch (error) {
        console.log("get product error is = ",error)
    }
}