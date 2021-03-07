/* eslint-disable jsx-a11y/alt-text */
import "./Main.css";
import hello from "../../assets/hello.svg";
import React, {useEffect} from 'react'

const Main = () => {
const url = "https://api-test.innoloft.com/product/6781/";

const fetchApi = async () => {
  const response = await fetch(url)
  console.log(response.statusText)

}
useEffect(() => {
  fetchApi();
}, []);
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello INNO LOFT</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">User</p>
              <span className="font-bold text-title">Clever</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Type</p>
              <span className="font-bold text-title">Fruit</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Company Name</p>
              <span className="font-bold text-title">INNO loft</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Likes</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left pix">
            <div className="charts__left__title">
              <div>
                <h1>Products Image</h1>
                <p>Cupertino, California, USA</p>
                {/* <img src="../../assets/pexels-suzy-hazelwood-2536965.jpg" /> */}
              </div>
              <i className="fa fa-icon" aria-hidden="true"></i>
            </div>
            {/* <Chart /> */}
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1></h1>
                {/* <p>Cupertino, California, USA</p> */}
              </div>
              <i className="fa fa-icon" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Title</h1>
                <p>Orange</p>
              </div>

              <div className="card2">
                <h1>description</h1>
                <p>Fruit</p>
              </div>

              <div className="card3">
                <h1>Attributes</h1>
                <p>Company Name: INNO loft</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;