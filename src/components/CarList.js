import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();

  // const cars = useSelector( (state) => state.cars.data ); // so the BIG STATE (see at the bottom) is destructured below.
  // also 'cars' is used later to map through, so here is a good place to filter already what needs to be mapped
  // (we create a "derived state" - calculated from 2 small-states: data and searchTerm to create filtered cars )
  // const {cars, name} -->  state.cars, state.form.name
  const { cars, name1 } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter(
      (dataArrayEl) =>
        dataArrayEl.name.toLowerCase().includes(searchTerm.toLowerCase()) // true if the search term is part of the name
    );
    return {
      cars: filteredCars,
      name1: form.name,
    };
  });

  const handleCarDelete = (carRow) => {
    dispatch(removeCar(carRow.id));
  };

  const renderedCars = cars.map((carEl) => {
    // name1 --> state.form.name
    // if 'name1' is present/truthy then check if it matches (true/false)
    const bold = name1 && carEl.name.toLowerCase().includes(name1.toLowerCase());

    return (
      // if const bold is true then use class 'bold'
      <div key={carEl.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {carEl.name} - € {carEl.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(carEl)}
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

// BIG STATE:
//         {
//            form: {
//                   name: '',
//                   cost: 0
//                  },
//
//            cars: {
//                   searchTerm: '',
//                   data: [id: 11, name: 'ford', cost: 150]
//            }
//        }
