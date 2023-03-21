import Button from "./BasicComponents/Button";
import Input from "./BasicComponents/Input";

const SearchBar = (props) => {
  return (
    <nav className="nav">
      <Input
        value={props.strToSearch}
        updateValue={props.updateValue}
        className="nav-input"
        placeholder="Search for countries"
      ></Input>
      <Button onClick={props.onSearch} className="nav-btn">
        search country
      </Button>
      <Button onClick={props.onReset} className="nav-reset">
        Reset
      </Button>
    </nav>
  );
};

export default SearchBar;
