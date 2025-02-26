import React, { useEffect, useState } from 'react';
import "../styling/ProductDescriptionstyle.css";
import back from '../assets/back.jpg';
import Data from '../Data.json';
import { useParams } from 'react-router-dom';

import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
function ProductDescription() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const colStyle = {
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '20px',
    };

    useEffect(() => {

        const filteredProduct = Data.filter(item => item.id === parseInt(id));
        setProduct(filteredProduct[0]);
    }, [id]);

    if (!product) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="style-container">
            <div className="row">
                <div className="col" style={colStyle}>
                    <h5 className='h5-style1 '>Evntiz</h5>
                    <h1 className='h1-style1'>Product Details</h1>
                </div>
            </div>

            <div className="container">
                <div className="row mt-5">
                    {/* Description Column */}
                    <div className="col-12 col-md-6 order-1 order-md-1 ">
                       <div className="col d-flex mt-4">
                            <p style={{ fontSize:"16px"}}> Home /
                                Clothes /
                                Lewis Tshirt</p>
                       </div>
                        <h1 className="title-style mt-1 ms-heading1" style ={{ color:"#333369"}}>{product.name}</h1>
                        <p className='p-para ms-heading1'>{product.dsc}</p>
                        <h3 className='category_style mb-4 ms-heading1'>Category  <span className='ms-3'> cloths</span></h3>
                        <h3 className='price mb-4 ms-heading1'>
                            Price: ${product.price || product.discounted_price || product.original_price}
                        </h3>
                        <button className="cart ms-btn_style d-block mx-md-0 mx-auto">Add To Cart</button>

                    </div>

                    {/* Image Column */}
                    <div className="col-12 col-md-6 order-2 order-md-2 d-flex justify-content-center align-items-center mt-3 mt-md-0">
                        <img
                            src={require(`../assets/${product.image}`)}
                            alt={product.name}
                            className="w-100 d-block"
                            style={{ maxWidth: '500px' }}
                        />
                    </div>
                </div>
                <div className="row mt-5 mb-4" style={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Description Section */}
                    <div className="col-12 col-lg-8  mt-5 border_style1" style={{ height: "fit-content", maxWidth: "850px" }}>
                        <h4 className='desc ms-2'>Description |  Review</h4>
                        <h3 className='text-start desc'> Description </h3>
                        <p className='text-start   ms-para'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas expedita doloremque, ad ea velit vero, assumenda quas excepturi mollitia maiores odit magni adipisci laudantium illo eius porro impedit deserunt nobis.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla maiores itaque voluptas esse quis porro officiis laborum voluptatibus natus a at velit minus magni hic, tempora laboriosam cumque amet numquam.
                        </p>




                    </div>

                    {/* Recent Products Section */}
                    <div className="col-12 col-lg-4 mt-4 mt-lg-0  border-white bg-light p-4 ">
                        <div className="col   mb-2"><h4 className="rec text-center text-lg-start ms-4 border p-3" style={{ background: "white" }}>Recent Products</h4></div>
                        <div className="ms-3">
                            <div className="d-flex align-items-center mb-2  border bg-light ">
                                <img src={product1} alt="product6" style={{ width: '30%', marginBottom: 0 }} />
                                <p className="p-style">Yellow Sofa Set</p>
                            </div>
                            <div className="d-flex align-items-center mb-2 border bg-light ">
                                <img src={product2} alt="product4" style={{ width: '30%', marginBottom: 0 }} />
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
                </div>

            </div>

        </div>
    )
}

export default ProductDescription;
