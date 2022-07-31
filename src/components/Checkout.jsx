import React from "react";

export const Checkout = () => {
  return (
    <div className="container">
      <hr />
      <h1 className=" alert alert-success row justify-content-center">
        Order Placed Successfully
      </h1>
      <hr />
    </div>
  );
};

// import React from "react";
// import { useSelector } from "react-redux/es/exports";

// export const Checkout = () => {
//   const state = useSelector((state) => state.handleCart);
//   var total = 0;

//   const itemList = (item) => {
//     total = total + item.price;
//     return (
//       <li className="list-group-item d-flex justify-content-between lh-sm">
//         <div>
//           <h6 className="my-0">{item.title}</h6>
//         </div>
//         <span className="text-muted">₹ {Math.floor(item.price * 80)} /-</span>
//       </li>
//     );
//   };
//   return (
//     <>
//       <div className="container my-5">
//         <div className="row g-5">
//           <div className="col-md-5 col-lg-4 order-md-last">
//             <h4 className="d-flex justify-content-between align-items-center mb-3">
//               <span className="text-primary">Your cart</span>
//               <span className="badge bg-primary round-pill">
//                 {state.length}
//               </span>
//             </h4>
//             <ul className="list-group mb-3">
//               {state.map(itemList)}

//               <li className="list-group-item d-flex justify-content-between">
//                 <span>Payable Amount</span>
//                 <strong>{total}</strong>
//               </li>
//             </ul>

//             <form className="card p-2">
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Promo code"
//                 />
//                 <div className="input-group-append">
//                   <button type="submit" className="btn btn-secondary">
//                     Redeem
//                   </button>
//                 </div>
//               </div>
//             </form>
//             <hr className="mb-4" />
//             <button className="btn btn-primary btn-lg btn-block" type="submit">
//               Continue to checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
