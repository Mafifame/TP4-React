
const Personnages = ({ pers, onDetails }) => {
  return (
    <div className="card">
      <h4>{pers.name || "Inconnu"}</h4>
      <button onClick={onDetails}>Détails</button>
    </div>
  );
};

export default Personnages;
