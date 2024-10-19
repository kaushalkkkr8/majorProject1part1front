import { useEffect, useState } from "react";

import useFetch from "../useFetch";
import Navbar from "../components/Navbar";

const CategoryPage = () => {
  // const { data } = useFetch("http://localhost:3000/prod");
  const { data } = useFetch("https://major-project1part1backend.vercel.app/prod");
  const [wishlistStatus, setWishlistStatus] = useState({});

  const [gender, setGender] = useState([]);
  const [rating, setRating] = useState("all");

  const [filteredData, setFilterData] = useState([]);

  const [range, setRange] = useState(0);
  const [sorted, setSorted] = useState("none");

  console.log(sorted);

  useEffect(() => {
    if (data) {
      setFilterData(data); // Initialize filteredData with fetched data
    }
  }, [data]);

  useEffect(() => {
    filterData();
  }, [gender, rating, range, sorted, data]);

  const sorting = (e) => {
    setSorted(e.target.value);
  };

  const genderFilter = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setGender((prevData) => [...prevData, value]);
    } else {
      setGender((prevData) => prevData.filter((data) => data !== value));
    }
  };
  const ratingFilter = (e) => {
    setRating(e.target.value);
  };
  const rangeHandler = (e) => {
    setRange(parseInt(e.target.value));
  };

  const filterData = () => {
    let filtered = data;

    if (gender.length > 0) {
      filtered = filtered.filter((prod) => gender.includes(prod.category));
    }

    if (rating !== "all") {
      filtered = filtered.filter((prod) => prod.rating >= parseInt(rating));
    }

    if (range !== 0) {
      filtered = filtered.filter((prod) => prod.price >= range);
    }

    if (sorted === "lowToHigh") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sorted === "highToLow") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilterData(filtered); // Update filtered data
  };

  const wishListClickHandler = async (prodId) => {
    const currentStatus = wishlistStatus[prodId] !== undefined ? wishlistStatus[prodId] : data.find((prod) => prod._id === prodId).wishlist;
    const newStatus = !currentStatus;
    try {
      const response = await fetch(`https://major-project1part1backend.vercel.app/prod/${prodId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ wishlist: newStatus }),
      });

      if (response.ok) {
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
  };

  const addToCartHandler = async (product) => {
    console.log(product);
    try {
      const res = await fetch("https://major-project1part1backend.vercel.app/cart", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Product added successfully to the cart:", data);
      } else {
        console.error("Failed to add product to the cart");
      }
    } catch (error) {
      console.error("Error in adding product to cart:", error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-dark">
        <div className="p-4">
          <div className="row">
            <div className="col-md-2 text-bg-dark bg-opacity-80">
              {/* Range */}
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between">
                    <h5>Filter</h5>
                    <p>Clear</p>
                  </div>

                  <label htmlFor="customRange2" className="form-label">
                    Price
                  </label>
                  <div className="range-labels d-flex justify-content-between ">
                    <p>0</p>
                    <p className="ms-4">1000</p>
                    <p>2000</p>
                  </div>
                  <input type="range" className="form-range" min="0" max="2000" step="1000" value={range} onChange={rangeHandler} id="customRange2" />
                </div>
              </div>

              <br />
              {/* Category gender */}
              <div>
                <label>Category</label>
                <br />
                <br />
                <input type="checkbox" name="category" id="" value="all" onChange={genderFilter} /> All Category
                <br />
                <input type="checkbox" name="category" id="" value="Male" onChange={genderFilter} /> Men Clothing
                <br />
                <input type="checkbox" name="category" id="" value="Female" onChange={genderFilter} />
                Women Clothing
                <br />
                <input type="checkbox" name="category" id="" value="Kids" onChange={genderFilter} />
                Kids Clothing
                <br />
              </div>

              <br />
              {/*Rating  */}
              <div>
                <label htmlFor="">Rating: </label>
                <br />
                <input type="radio" name="rating" value="4" onChange={ratingFilter} checked={rating === "4"} /> 4 Star and Above
                <br />
                <input type="radio" name="rating" value="3" onChange={ratingFilter} checked={rating === "3"} /> 3 Star and Above
                <br />
                <input type="radio" name="rating" value="2" onChange={ratingFilter} checked={rating === "2"} /> 2 Star and Above
                <br />
                <input type="radio" name="rating" value="all" onChange={ratingFilter} checked={rating === "all"} /> All
              </div>
              <br />
              {/* Sort by price              */}
              <div>
                <label htmlFor="">Short By</label>
                <br />
                <input
                  type="radio"
                  name="sort"
                  value="lowToHigh"
                  onClick={sorting}
                  //   checked={sorted === "lowToHigh"}
                />{" "}
                Low to High
                <br />
                <input
                  type="radio"
                  name="sort"
                  value="highToLow"
                  onClick={sorting}
                  //   checked={sorted === "highToLow"}
                />{" "}
                High to Low
              </div>
            </div>

            <div className="col-md-10">
              <div className="row">
                {filteredData?.map((prod, index) => (
                  <div className="col-md-3 my-2" key={index}>
                    <div className="card border-0 shadow">
                      <img src={prod.image} className="card-img-top" alt={prod.name} />
                      <div className="card-body text-center ">
                        <p>
                          {prod.name}{" "}
                          <i
                            className={
                              wishlistStatus[prod._id] !== undefined
                                ? wishlistStatus[prod._id]
                                  ? "bi bi-heart-fill float-end text-danger"
                                  : "bi bi-heart float-end text-danger"
                                : prod.wishlist
                                ? "bi bi-heart-fill float-end text-danger"
                                : "bi bi-heart float-end text-danger"
                            }
                            onClick={() => wishListClickHandler(prod._id)}
                          ></i>
                        </p>
                        <h4 className="fw-bold">₹ {prod.price}</h4>
                      </div>
                      <div className="">
                        <button className="btn rounded-0 btn-warning w-100" onClick={() => addToCartHandler(prod)}>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryPage;
