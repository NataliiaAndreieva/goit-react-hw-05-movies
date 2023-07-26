import { useState } from 'react';
import Notiflix from 'notiflix';
import { Form, FormInput, FormButton } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      Notiflix.Notify.failure('Введіть назву фільму');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  const onChangeInput = e => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        name="query"
        value={query}
        onChange={onChangeInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <FormButton type="submit">Search</FormButton>
    </Form>
  );
};

export default SearchForm;
