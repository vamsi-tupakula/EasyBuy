import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

function CategoryProd() {
    const categories = useSelector((state) => state.products.categoriesList);
    const products = useSelector((state) => state.products.products);
    let params = useLocation();
    let type = new URLSearchParams(params.search).get("type");

    const new_products = products[type] || [];
    console.log(new_products)

    if (!categories || !products)
        return (
            <div className="loading flex flex-col">
                <h1 align="center" className="sofia-font">
                    Loading....
                </h1>
            </div>
        );

    return (
        <div className="search__page flex flex-col">
            {new_products.map((prod) => {
                return (
                    <div className="search__card" key={prod.id}>
                        <div
                            className="prod__img"
                            style={{ backgroundImage: `url(${prod.images[0]})` }}
                        ></div>
                        <div className="prod__details flex flex-col">
                            <h1 className="prod__title">{prod.title.toUpperCase()}</h1>
                            <p className="prod__desc">
                                {prod.description.split(" ").slice(0, 7).join(" ")}...
                            </p>
                            <p className="prod__brand">
                                <b>Brand:</b> {prod.brand}
                            </p>
                            <p className="prod__price">
                                <b>Price:</b> {prod.price}$
                            </p>
                            <p className="prod__discount">
                                <b>Discount:</b> {prod.discountPercentage}%
                            </p>
                            <NavLink to={`/products/${prod.id}`} className="btn">
                                Know More
                            </NavLink>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CategoryProd;