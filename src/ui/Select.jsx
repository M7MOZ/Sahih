/* eslint-disable react/prop-types */
import ReactSelect from "react-select";
import customStyles from "../utilities/customeSelectSytle";
function Select({ options, value, setValue }) {
  const handleChange = (selectedOption) => {
    setValue(selectedOption);
  };

  return (
    <div className="text-3xl text-black flex justify-start w-full">
      <ReactSelect options={options} value={value} onChange={handleChange} styles={customStyles}/>
    </div>
  );
}

export default Select;
