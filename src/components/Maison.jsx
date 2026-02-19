
const Maison = ({ house, onClick }) => {
  return (
    <div onClick={onClick}>
      <h3>{house.name}</h3>
      <p>{house.region}</p>
    </div>
  );
};

export default Maison;
