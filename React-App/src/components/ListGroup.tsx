function ListGroup() {
  let items = ["New York", "San Fransico", "Tokyo", "Levington", "Paris"];
  items = [];

  return (
    <>
      <h1>LIst</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
