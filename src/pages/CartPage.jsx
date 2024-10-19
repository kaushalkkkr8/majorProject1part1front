// import { useState } from "react"
import Navbar from "../components/Navbar"
import useFetch from "../useFetch"

const CartPage = () => {
    // const { data } = useFetch('http://localhost:3000/cartData')
    const { data } = useFetch('https://major-project1part1backend.vercel.app/cartData')
    const clickHandler = async (prodId) => {
        try {
            const res = await fetch(`http://localhost:3000/cart/${prodId}`, {
                method: "DELETE"
            })
            if (res.ok) {
                console.log("deletedSuccessfully");

            }

        } catch (error) {
            console.error("Error updating cart:", error);
        }
    }





    return (
        <>
            <Navbar />
            <div className="container-fluid text-bg-dark p-3">
                <h2 className="text-center">Your Cart</h2>
                <div className="container py-4">

                    <div className="row bg-light shadow p-5">
                        {data ? data.map(prod => (
                            <div className="col-md-3 p-2">
                                <div className="card card border-0 shadow" >
                                    <img src={prod.image} className="card-img-top" alt="..." />
                                    <div className="card-body text-center  ">
                                        <p className="fw-bolder">{prod.name}</p>
                                        <h4 className="fw-bold" >₹ 2000</h4>

                                    </div>
                                    <div className="">
                                        <button  className="btn rounded-0 btn-danger w-100" onClick={() => clickHandler(prod._id)} >Remove from cart</button>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="text-center">
                                <h1>No Data in Cart</h1>
                            </div>

                        )}

                    </div>
                </div>
            </div>
        </>

    )
}
export default CartPage