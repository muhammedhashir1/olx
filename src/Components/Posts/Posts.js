import React, { useState, useEffect, useContext } from "react";
import Heart from "../../assets/Heart";
import "./Post.css";
import { AuthContext, FirebaseContext } from "../../store/Context";
//import { FirebaseContext } from "../../store/Context";
import { PostContext } from "../../store/PostContext";
import { useHistory } from "react-router-dom";
function Posts() {
  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);
  const { setPostDetails } = useContext(PostContext);
  const { user } = useContext(AuthContext);
  //const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const allPost = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(allPost);
      });
  }, []);

  return (
    <div className="postParentDiv">
      {user && (
        <div className="moreView">
          <div className="heading">
            <span>Quick Menu</span>
            <span>View more</span>
          </div>

          <div className="cards">
            {products.map((product) => {
              return (
                <div
                  className="card"
                  onClick={() => {
                    setPostDetails(product);
                    history.push("/view");
                  }}
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={product.url} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.category}</span>
                    <p className="name"> {product.name}</p>
                  </div>
                  <div className="date">
                    <span>{product.createdAt}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 350000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
        <hr/>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/iphone.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 10000</p>
              <span className="kilometer">Mobile Phone</span>
              <p className="name"> Iphone</p>
            </div>
            <div className="date">
              <span>19/7/2022</span>
            </div>
          </div>
        </div>
        <hr/>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/tv.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 4500</p>
              <span className="kilometer">TV</span>
              <p className="name"> LG</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
        <hr/>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/wm.jpeg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 3000</p>
              <span className="kilometer">Washing Mechine</span>
              <p className="name">Kelvinator</p>
            </div>
            <div className="date">
              <span>07/10/2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
