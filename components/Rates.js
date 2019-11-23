export default function Rates(props) {
  const { base, date, rates } = props.rates;
  return (
    <div>
      <p>Base: {base}</p>
      <p>Date: {date}</p>
      <ul className="list-group">
        {Object.entries(rates).map(([key, value]) => (
          <li className="list-group-item">
            {key} {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
