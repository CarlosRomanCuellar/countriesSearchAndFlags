import Country from "./Country";

const ListOfCountries = (props) => {
  return (
    <ul className="list-of-countries__container">
      {props.data.map((country) => {
        return (
          <Country
            name={country.name}
            capital={country.capital}
            flag={country.flag_1x1}
          ></Country>
        );
      })}
    </ul>
  );
};

export default ListOfCountries;
