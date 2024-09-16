const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      boxShadow: 'none',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'white', // Semi-transparent background for the dropdown
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white', // Text color
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'white', // Placeholder color
    }),
    input: (provided) => ({
      ...provided,
      color: 'white', // Input text color
    }),
  };
  export default customStyles;