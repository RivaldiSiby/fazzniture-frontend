import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlackButton from "../../components/Black-Button";

import "./ordertracking.css";

export default class OrderTracking extends Component {

   constructor() {
      super();
      this.state = {
         show: true,
      };
   }
   componentDidMount() {
    window.document.title = "Order Track";
  }

   render() {
      return (
         <>
            <Navbar page="shop" />
            {this.state.show ? <Header section="Tracking" title="Order Tracking" desc="Track where your order arrived" /> : <Header section="Tracking > Tracking Detail " title="Tracking Detail" desc="Track where your order arrived" />}

            <section className="order-track-main">
               <section className="aside-order-track">
                  <img src={require('../../assets/img/picture-maps.png')} alt="maps-img" className="img-maps-order" />
               </section>
               {this.state.show ? (
                  <section className="right-order-track">
                     <p className="desc-order-track">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                     <div className="form-order-track">
                        <div className="id-order-track">Order Id</div>
                        <label>
                           <input type="text" placeholder="Found in your order confirmation email." className="input-order-track" />
                        </label>
                        <div className="id-order-track">Billing Email</div>
                        <label>
                           <input type="text" placeholder="Email you used during checkout" className="input-order-track" />
                        </label>
                     </div>
                     <div
                        className="btn-submit-order-track"
                        onClick={() => {
                           this.setState({
                              show: false,
                           });
                        }}
                     >
                        <BlackButton text="Track Now" />
                     </div>
                  </section>
               ) : (
                  <section className="tracking-detail-order">
                     <div className="line-order-tracking">
                        <div className="order-id-order-item">
                           <p className="order-id-tracking">Order ID</p>
                           <h5 className="tracking-id-order">ABCD-EFGH-W123</h5>
                        </div>
                        <div className="order-id-order-item">
                           <p className="order-id-tracking">Order Item</p>
                           <h5 className="tracking-id-order">Fabric Mid Century Chair</h5>
                        </div>
                     </div>
                     <div className="on-deliveriy-order-tracking">
                        <div className="tracking-delivery">
                           <div className="img-tracking">
                              <img src={require('../../assets/vector/icon-order.png')} alt="icon-order" />
                           </div>
                           <div className="on-delivery-tracking">
                              <p className="on-delivery">On Delivery</p>
                              <h5 className="addres-tracking">Kebun Jeruk, Jakarta Barat</h5>
                           </div>
                        </div>
                        <div className="blank-area-tracking"></div>
                        <div className="tracking-destination">
                           <div className="img-destination">
                              <img src={require('../../assets/vector/icon-order.png')} alt="icon-order" />
                           </div>
                           <div className="on-delivery-destination">
                              <p className="on-destination">Destination</p>
                              <h5 className="addres-destination">Kebun Mangga, Jakarta Selatan</h5>
                           </div>
                        </div>
                     </div>
                  </section>
               )}
            </section>
            <Footer />
         </>
      );
   }
}
