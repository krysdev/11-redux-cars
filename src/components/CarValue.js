import { useSelector } from 'react-redux';

function CarValue() {
  // BIG STATE destrucured
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((dataArrayEl) =>
      dataArrayEl.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // let cost = 0;
    // for (let car of filteredCars) {
    //   cost += car.cost;
    // }
    // return cost;

    return filteredCars.reduce((accumulator, dataArEl) => accumulator + dataArEl.cost, 0);
  });

  return <div className="car-value">Total Cost: € {totalCost}</div>;
}

export default CarValue;

//    STATE:
//         {
//            cars: {
//                   searchTerm: '',
//                   data: [id: 11, name: 'ford', cost: 150]
//            }
//        }
