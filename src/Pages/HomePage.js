import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import { fireproducts } from "../firecommerce-products";

function HomePage() {
  const [products, setProducts] = useState([]);
  const navigate=useNavigate()
const {cartItems}=useSelector((state)=>state.cartReducer);
  const dispatch=useDispatch();
  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    try {
      // axios.get("http://localhost:4000/fireproducts").then((response) => {
      //   console.log(response.data);
      //   setProducts(response.data)

      
      const users = await getDocs(collection(fireDB, "products"));
      const productsArray = [];
      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };

        productsArray.push(obj);
      });

      setProducts(productsArray);
    } catch (error) {
      console.log(error);
    }
  }

  //  function addproductsdata(){
  //     fireproducts.map(async (product)=>{
  //         try {

  //             await addDoc(collection(fireDB, "products"),product);
  //         }

  //        catch (error) {
  //         console.log(error)
  //       }
  //     })

  // }

useEffect(()=>{
  localStorage.setItem("cartItems",JSON.stringify(cartItems))
},[cartItems]);

  const addToCart=(product)=>{
    dispatch({type:"ADD_TO_CART",payload:product})
  }
  return (
    <Layout>
      <div className="container">
        <div className="banner"><img src="../assets/slider-bg.jpg" alt="" /></div>
        <div className="row">
          {products.map((product) => {
            return <div className="col-md-4">
                <div className="m-2 p-1 product position-relative">
                 
                  <div className="product-content">
                  <p>{product.name}</p>
                  <div className="text-center">
                    <img
                      src={product.imageURL}
                      alt=""
                      className="product-img"
                    />
                  </div>
                  
                 
                </div>
             
                <div className="product-actions">
                   <h2>{product.price} RS/-</h2>
              <div className="d-flex">
          <button className="mx-2" onClick={()=>
            addToCart(product)
          }>ADD TO CART</button>
          <button onClick={()=>{
            navigate(`/productInfo/${product.id}`)
          }}>VIEW</button>
        </div>
               </div>

              </div>
              </div>
          })}
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
