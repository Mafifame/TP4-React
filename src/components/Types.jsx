
const Types = ({ pers, onClose }) => {
  return (
    <div className="gModel">
      <div className="modal">
        <h3>{pers.name || "Inconnu"}</h3>
        <p>Gender: {pers.gender || "N/A"}</p>
        <p>Culture: {pers.culture || "N/A"}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Types;
