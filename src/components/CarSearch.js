import { useSelector, useDispatch } from 'react-redux';
import { changeSearchTerm } from '../store';

function CarSearch() {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => {
    // the BIG STATE object looks like this now:
    //
    //   {
    //    cars: {
    //          searchTerm: '',
    //          data: [id: 11, name: 'ford', cost: 150]
    //          }
    //   }
    //
    // see the initialState and addCar reducer in carsSlice.js,
    // so we need to return the below:
    return state.cars.searchTerm;
  });

  const handleSearchTermChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}

export default CarSearch;
