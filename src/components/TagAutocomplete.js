import React from 'react';
import T from 'prop-types';
import ReactTags from 'react-tag-autocomplete';
import style from './style.css';

const TagAutocomplete = ({
  tags,
  suggestions,
  handleDelete,
  handleAddition,
}) =>
  <div className={ 'wrapper' }>
    <div className={'tags-wrapper'}>
      {
        tags.map( (tag, index) => {
          return (
            <span className={'tag-item'} style={{
                backgroundColor: tag.color ? tag.color : 'black'
              }}
              key={ index }
            >
              <span>
                { tag.name }
              </span>
              <span className={'delete-icon'} onClick={ handleDelete }>
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
      placeholder={ 'Type new label...' }
      className={ 'input' }
      tags={ tags }
      suggestions={ suggestions }
      handleDelete={ handleDelete }
      handleAddition={ handleAddition }
    />
  </div>

TagAutocomplete.propTypes = {
  tags: T.array,
  suggestions: T.array,
  handleAddition: T.func,
  handleDelete: T.func,
};

export default TagAutocomplete;