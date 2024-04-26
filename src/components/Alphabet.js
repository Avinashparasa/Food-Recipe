const Alphabet = ({ onClick }) => {
  const Array = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let n = 0;
  return (
    <>
      <h1 className="heading">Search by Letters</h1>
      <div className="letters">
        {Array.map((alpha) => (
          <div
            className="alphabet"
            key={n++}
            onClick={() => {
              onClick(
                `https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`
              );
            }}
          >
            <h2 className="changecolor">{alpha}</h2>
          </div>
        ))}
      </div>
    </>
  );
};
export default Alphabet;
