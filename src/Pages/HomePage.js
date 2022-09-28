import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
//import { fireproducts } from "../firecommerce-products";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    try {
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

  return (
    <Layout>
      <button onClick={getdata}>get data from firestore</button>
    </Layout>
  );
}

export default HomePage;
