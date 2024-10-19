import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import useFetch from "../useFetch"

const WishList = () => {
    const [data,setData ] = useState([])
    const [wishlistStatus, setWishlistStatus] = useState({})

    useEffect(() => {
       
        fetch("https://major-project1part1backend.vercel.app/prod/true")
            .then(res => res.json())
            .then(data2 => {
                setData(data2)
                console.log(data2);
                
            })
            .catch(err=>console.log(err)
            )
            
    },[wishlistStatus])


    const wishListClickHandler = async (prodId) => {
        const status = wishlistStatus[prodId] !== undefined ? wishlistStatus[prodId] : data.find(prod => prod._id === prodId).wishlist;
        const newStatus = !status
        try {
            const res = await fetch(`https://major-project1part1backend.vercel.app/prod/${prodId}`, {
                method: "POST",
                body: JSON.stringify({ wishlist: newStatus }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (res.ok) {
                setWishlistStatus({
                    ...wishlistStatus,
                    [prodId]: newStatus,
                });
            } else {
                console.error("Failed to update wishlist");
            }
        } catch (error) {
            console.error("Error updating wishlist:", error);
        }

    }


    console.log(data)
    return (
        <>
            <Navbar />
            <div className="container-fluid text-bg-dark p-3">
                <h2 className="text-center">Wishlist</h2>
                <div className="container py-4">

                    <div className="row bg-light shadow p-5">
                        {data ? data.map(prod => (
                            <div className="col-md-3 p-2">
                                <div className="card card border-0 shadow" >
                                    <img src={prod.image} className="card-img-top" alt="..." />
                                    <div className="card-body text-center  ">
                                        <p >{prod.name}<i
                                            className={wishlistStatus[prod._id] !== undefined ? (wishlistStatus[prod._id] ? "bi bi-heart-fill float-end text-danger " : "bi bi-heart float-end text-danger ") : (prod.wishlist ? "bi bi-heart-fill float-end text-danger " : "bi bi-heart float-end text-danger ")}
                                            onClick={() => wishListClickHandler(prod._id)}
                                        ></i></p>
                                        <h4 className="fw-bold" >₹ 2000</h4>

                                    </div>
                                    <div className="">
                                        <button  className="btn rounded-0 btn-warning w-100">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        )) : (null)}

                    </div>
                </div>
            </div>
        </>

    )
}
export default WishList