import Header from './Header';
import CardPizza from './CardPizza';
import pizzas from "../components/pizzas"

const Home = () => {
  return (
    <div className="container mt-4">
      <h1>Bienvenido a Pizzería Mamma Mía</h1>
      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-md-4">
            <CardPizza {...pizza} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;