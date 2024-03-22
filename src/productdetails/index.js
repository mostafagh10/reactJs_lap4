import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../helpers/loader";
import {useDispatch , useSelector} from 'react-redux'
import { getspecificproductaction } from '../redux/action/productaction'

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {product} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getspecificproductaction(id))
  }, [dispatch,id]);

  return (
    <div className="container">
      {product ? (
        <div>
        <div className="col-md-12" style={{padding:'20px'}}>
            <img src={product.images[0]} height="200" width="100%" />
        </div><br />
        <div className="row">
            <div className="col-md-4" style={{padding:'20px'}}>
              <img src={product.images[1]} height="200" width="100%" />
            </div>
            <div className="col-md-4" style={{padding:'20px'}}>
              <img src={product.images[2]} height="200" width="100%" />
            </div>
            <div className="col-md-4" style={{padding:'20px'}}>
              <img src={product.images[3]} height="200" width="100%" />
            </div>
        </div>
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: {product.price} $</p>
        </div>
        </div>
      ) : (
     <Loader />
      )}
    </div>
  );
}

export default ProductDetails;
