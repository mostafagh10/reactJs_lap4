import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../helpers/loader";
import {useDispatch , useSelector} from 'react-redux'
import { getproductsaction } from '../redux/action/productaction'


function Products() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getproductsaction())
    setLoading(false)
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <Loader />
        ) : (
          products?.map(product => (
            <div className="col-md-4" style={{ padding: '10px 50px' }} key={product.id}>
              <div className="card text-center">
                <div className="card-img-top">
                  <img src={product.images[0]} height='150' width="100%" alt={product.title} />
                </div>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
                <h6>{product.category}</h6>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
