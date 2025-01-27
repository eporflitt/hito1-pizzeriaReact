const CardPizza = ({ name, price, ingredients, img }) => (
  <div className="card" style={{ width: "18rem" }}>
    <img src={img} className="card-img-top" alt={name} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Precio: ${price.toLocaleString()}</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button className="btn btn-primary">Añadir al carrito</button>
    </div>
  </div>
);

export default CardPizza;
