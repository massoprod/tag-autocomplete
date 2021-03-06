import React from 'react';
import T from 'prop-types';
import ReactTags from 'react-tag-autocomplete';
import style from './style.css';

const TagAutocomplete = ({
  tags,
  suggestions,
  handleDelete,
  handleAddition,
}) => {
  const filteredSuggestions = suggestions.filter((item) => {
    return tags.indexOf(item) === -1;
  });

  return( <div className={ 'wrapper' }>
    <div className={'tags-wrapper'}>
      {
        tags.map( (tag, index) => {
          return (
            <span className={'tag-item'} style={{
                backgroundColor: tag.color ? tag.color : 'black'
              }}
              key={ index }
            >
              <span className={ 'tag-name' }>
                { tag.name }
              </span>
              <span className={'delete-icon'} onClick={ () => handleDelete(tag.id) }>
                &#10005;
              </span>
            </span>
          );
        } )
      }
    </div>
    <ReactTags
      allowNew
      minQueryLength={ 0 }
      autofocus={ false }
      placeholder={ 'Type new label...' }
      className={ 'input' }
      tags={ tags }
      suggestions={ filteredSuggestions }
      handleDelete={ handleDelete }
      handleAddition={ handleAddition }
    />
  </div>);
};

TagAutocomplete.propTypes = {
  tags: T.array,
  suggestions: T.array,
  handleAddition: T.func,
  handleDelete: T.func,
};

export default TagAutocomplete;