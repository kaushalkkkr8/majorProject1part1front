import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark ">
                <div className="container " >
                    <a className="navbar-brand text-white fw-bold" href="/">E-Commerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="mx-auto">
                            <div className="input-group " style={{ width: "250px" }}>
                                <input className="form-control form-control-sm" type="search" placeholder="Search" aria-label="Search" />
                                <span className="input-group-text">
                                    <i className="bi bi-search"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-secondary me-5 ">Log In</button>
                        <Link to='/wishlist' >
                        <h5><i className="bi bi-heart me-4 position-relative text-white" >
                           
                            <small className="position-absolute font-reset top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle text-white" style={{ fontSize: "0.6rem", width: "1rem", height: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>+</small>
                        </i></h5>
                        </Link>
                        <Link to='/cart' className=" text-white  text-decoration-none">
                        <h5><i className="bi bi-cart "></i> Cart</h5>
                        </Link>
                    </div>
                </div>
            </nav >
        </>
    )
}
export default Navbar