import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();

  // const cars = useSelector((state) => state.cars.data); // so this is destructured below
  // also 'cars' is used later to map through, so here is a good place to filter already what needs to be mapped
  // (we create a "derived state" - calculated from 2 small-states: data and searchTerm to create filtered cars )
  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((dataArrayEl) =>
      dataArrayEl.name.toLowerCase().includes(searchTerm.toLowerCase()) // true if the search term is part of the name
    );
  });

  const handleCarDelete = (carRow) => {
    dispatch(removeCar(carRow.id));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - € {car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
