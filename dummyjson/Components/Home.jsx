import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Effect() {
    let [items, setItems] = useState([]);
    const [filter, setFilter] = useState("");
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetchData();
    }, []); // Add dependency array to avoid infinite loop

    const fetchData = async () => {
        const res = await fetch("http://dummyjson.com/products");
        const data = await res.json();
        setItems([...data.products]);

        const rescat = await fetch("http://dummyjson.com/products/categories");
        const datacat = await rescat.json();
        setCategory([...datacat]);
    };

    console.log(category);

    if (items.length === 0) return <h1>Loading ... </h1>;

    return (
        <>
            <div style={{display:"flex"}}>
                <section onClick={() => setFilter("")}>ALL</section>
                {category.map((cat, index) => (
                    <section
                        style={{ margin: "0 10px 0 10px" }}
                        key={index}
                        onClick={() => setFilter(cat.name)}
                    >
                        {cat.name}
                    </section>
                ))}
            </div>
            <div className="main">
                {items
                    .filter((item) => item.category.includes(filter.toLocaleLowerCase()))
                    .map((item, ind) => (
                        <Link to={`/details/${item.id}`} key={ind}>
                            <div className="item">
                                <img src={item.thumbnail} alt="" />
                                <h3>{item.title}</h3>
                            </div>
                        </Link>
                    ))}
            </div>
        </>
    );
}

export default Effect;
