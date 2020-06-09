import React, { useState } from "react";
import PropTypes from "prop-types";
import Autosuggest from "react-autosuggest";
import { Input } from "reactstrap";

import "./AutoSuggestInput.css";

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
      renderInputComponent={(inputProps) => <Input {...inputProps} />}
      onSuggestionSelected={(event, { suggestionValue }) => {
        event.target.name = props.name;
        event.target.value = suggestionValue;
        props.onChange(event);
      }}
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
