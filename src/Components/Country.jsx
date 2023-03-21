const Country = (props) => {
  return (
    <li className="country-li">
      <div>
        <h2>{props.name}</h2>
        <img src={props.flag} alt={`flag from ${props.name}`}></img>
        <h3>{props.capital}</h3>
      </div>
    </li>
  );
};

export default Country;
