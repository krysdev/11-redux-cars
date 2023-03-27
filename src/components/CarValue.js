import { useSelector } from 'react-redux';

function CarValue() {
  const totalCost = 111;

  return <div className="car-value">Total Cost: € {totalCost}</div>;
}

export default CarValue;
