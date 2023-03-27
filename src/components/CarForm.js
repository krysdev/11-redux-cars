import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

function CarForm() {
  const dispatch = useDispatch();

  const { name1, cost1 } = useSelector((state) => {
    return { name1: state.form.name, cost1: state.form.cost };
  });

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };
  const handleCostChange = (e) => {
    const number = parseInt(e.target.value) || 0; // if NaN then 0
    dispatch(changeCost(number));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({name: name1, cost: cost1})) // action.payload for carSlice.js
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-goup">
          <div className="field">
            <label className="label">Name</label>
            <input
              value={name1}
              onChange={handleNameChange}
              className="input is-expanded"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Cost</label>
          <input
            value={cost1 || ''} // so there is no problem with deleting '0'
            onChange={handleCostChange}
            className="input is-expanded"
            type="number"
          />
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
