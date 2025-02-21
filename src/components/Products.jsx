import React, { useState, useEffect } from 'react';
import Productstyle from '../styling/Productstyle.css';
import back from '../assets/back.jpg';
import { Link } from 'react-router-dom';
import Data from '../Data.json';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';
function Products() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    setProducts(Data);
  }, []);

  const colStyle = {
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '20px',
  };

  return (
    <div className="style-container">
      <div className="row">
        <div className="col" style={colStyle}>
          <h5> Eventiz </h5>
          <h1> Archives: Shop</h1>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {/* Main Content */}
          <div className="col-12 col-md-8 medium_screen">
            <div className="row">
              {products.map((product, index) => (
                <div className="col-12 col-md-6 mb-3" key={index}>
                  <div className="card">
                    <img src={require(`../assets/${product.image}`)} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                        <h5 className="card-title" style={{ color: "#707070", cursor: 'pointer' }}>
                          {product.name}
                        </h5>
                      </Link>

                      <p className="price1-style">
                        {product.discounted_price ? (
                          <>
                            <span style={{ textDecoration: 'line-through', marginRight: '10px', color: "#707070" }}>
                              ${product.original_price}
                            </span>
                            <span>${product.discounted_price}</span>
                          </>
                        ) : (
                          <span className='price-style'>${product.price}</span>
                        )}
                      </p>
                      <button className="btn btn-danger nir-btn">ADD TO Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-12 col-lg-4 mt-4 mt-md-0  ">
            <input className="search-bar" type="text" placeholder="search here" style={{ width: '50%' }} />

            <button className=" nir-btn">Search</button>

            <div className="col mt-5 border  bg-light">
              <h3 className=' ms-5 mb-4 mt-3 text_style_medium' style={{ color: " #333369" }}>Product Gallery</h3>
              <div className="row ms-5 ">
                <div className="col-6 col-md-5 mb-3 ">
                  <img src={product1} alt="product1" style={{ height: "112px" }} />
                </div>
                <div className="col-6 col-md-5 mb-3">
                  <img src={product2} alt="product2" style={{ height: "112px" }} />
                </div>
                <div className="col-6 col-md-5 mb-3">
                  <img src={product3} alt="product3" style={{ height: "112px" }} />
                </div>
                <div className="col-6 col-md-5 mb-3">
                  <img src={product4} alt="product4" style={{ height: "112px" }} />
                </div>
                <div className="col-6 col-md-5 mb-3">
                  <img src={product5} alt="product5" style={{ height: "112px" }} />
                </div>
                <div className="col-6 col-md-5 mb-3">
                  <img src={product6} alt="product6" style={{ height: "112px" }} />
                </div>
              </div>
            </div>

            <div className="col mt-5 border">
              <h3 className=' ms-3 mb-4 mt-2 text_style_medium' style={{ color: " #333369" }}>Recent Products</h3>
              <div className="ms-3">
                <div className="d-flex align-items-center mb-2 border bg-light ">
                  <img src={product6} alt="product6" style={{ width: '30%', marginBottom: 0 }} />
                  <p className="p-style">Yellow Sofa Set</p>
                </div>
                <div className="d-flex align-items-center mb-2 border bg-light ">
                  <img src={product4} alt="product4" style={{ width: '30%', marginBottom: 0 }} />
                  <p className="p-style">Leather Bag</p>
                </div>
                <div className="d-flex align-items-center mb-2 border p-0">
                  <img src={product1} alt="product1" style={{ width: '30%', marginBottom: 0 }} />
                  <p className="p-style">Bamboo Bucket</p>
                </div>
                <div className="d-flex align-items-center mb-2 border bg-light ">
                  <img src={product3} alt="product3" style={{ width: '30%', marginBottom: 0 }} />
                  <p className="p-style">Lewis Tshirt</p>
                </div>
              </div>
            </div>

            <div className="row mt-5 ms-2">
              <div className="col border bg-light ">
                <h3 className=' mb-3 mt-2  text_style_medium' style={{ color: " #333369" }}>Social Media</h3>
                <div className="row">
                  <div className="col-6 mb-2">
                    <button className="w-100 social-media">Facebook</button>
                  </div>
                  <div className="col-6 mb-2">
                    <button className="w-100 social-media">Twitter</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 mb-2">
                    <button className="w-100 social-media">Instagram</button>
                  </div>
                  <div className="col-6 mb-2">
                    <button className="w-100  social-media">LinkedIn</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Products;
