import React, { useState, useEffect } from 'react';

// Card-Komponente
const FoodCard = ({ item }) => {
    return (
        <div id={item.id} className={item.category + " col-sm-6 col-lg-4 all"}>
            <div className="box">
                <div>
                    <div className="img-box">
                        <img src={item.image || "images/products/none.png"} alt=""/>
                    </div>
                    <div className="detail-box">
                        <h5>{item.name}</h5>
                        <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                        <div className="options">
                            <h6>€{item.price}</h6>
                            {item.amount && <h6>Noch {item.amount} vorhanden</h6>}
                            <a href="" className="text-white" draggable="false">
                                <i className="fa-solid fa-shopping-cart"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Hauptkomponente
const FoodSection = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://192.168.120.30:42069/selectToJSON/products');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Fehler beim Laden der Daten:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="food_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>Unsere Auswahl</h2>
                </div>
                <ul className="filters_menu">
                    <li className="active" data-filter="*">Alles</li>
                    <li data-filter=".burger">Mittagessen</li>
                    <li data-filter=".pizza">Brotzeit</li>
                    <li data-filter=".pasta">Getränke</li>
                </ul>
                <div className="filters-content">
                    <div className="row grid">
                        {items.map(item => (
                            <FoodCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodSection;
