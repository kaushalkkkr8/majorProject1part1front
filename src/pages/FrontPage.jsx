import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <>
      <div className="bg-dark">
        <div className="container">
          <div className="py-3">
            <div className="row ">
              <div className="col">
                <div className="card" style={{ width: "15rem" }}>
                  <Link to="/allcategory">
                    <img
                      src="https://vklada.ru/wp-content/uploads/2023/05/ipoteka-2016-sberbank.jpg"
                      className="img-fluid"
                      alt="All"
                    />
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{ width: "15rem" }}>
                  <img
                    src="https://artist.md/storage/images/Artist/68/thumbnail/pasha-parfeniy-4.jpg"
                    className="img-fluid"
                    alt="Men"
                  />
                </div>
              </div>
              <div className="col">
                <div className="card" style={{ width: "15rem" }}>
                  <img
                    src="https://thumbs.dreamstime.com/t/fashion-pretty-cool-girl-wearing-sunglasses-backpack-skateboard-over-orange-background-65577230.jpg"
                    className="img-fluid"
                    alt="Women"
                  />
                </div>
              </div>
              <div className="col">
                <div className="card" style={{ width: "15rem" }}>
                  <img
                    src="https://thumbs.dreamstime.com/t/surprised-little-girl-open-mouth-hands-cheeks-surprised-pretty-little-girl-big-deep-brown-eyes-open-mouth-117368943.jpg"
                    className="img-fluid"
                    alt="Kids"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-2">
            <img
              src="https://demo.clipmydeals.com/4/wp-content/uploads/2024/01/flipkart-e1619775124176.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <div className="m-3">
                      <img
                        src="https://img.magazin.cz/img/img/2ad5f228a4fd.jpg"
                        alt="summer"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="m-3">
                      <h5>New Arrivals</h5>
                      <p>T-shirt,Boxer,Top..</p>
                      <h5>Summer Collection</h5>
                      <small>
                        Check our new collection to stay cool in style
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <div className="m-3">
                      <img
                        src="https://www.fashionteria.com/wp-content/uploads/2017/06/02-outfit-color-red-romance-1024x682.jpg"
                        alt="summer"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="m-3">
                      <h5>New Arrivals</h5>
                      <p>Woolen Top,Sweat Shirt,Jacket..</p>
                      <h5>Summer Collection</h5>
                      <small>
                        Check our new collection to stay cool in style
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FrontPage;
