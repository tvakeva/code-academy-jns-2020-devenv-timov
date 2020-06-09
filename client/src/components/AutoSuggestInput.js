import React, { useState } from "react";
import PropTypes from "prop-types";
import Autosuggest from "react-autosuggest";

const getSuggestionValue = (suggestion) => suggestion;

const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

const AutoSuggestInput = (props) => {
  const [suggestions, setSuggestions] = useState([]);

  const inputProps = {
    name: props.name,
    placeholder: props.placeholder,
    value: props.value,
    onChange: props.onChange,
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(
      props.suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={() => setSuggestions([])}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

AutoSuggestInput.displayName = "AutoSuggestInput";
AutoSuggestInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
};

export default AutoSuggestInput;
