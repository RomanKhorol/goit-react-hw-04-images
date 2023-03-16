import React, { useState } from 'react';
import Notiflix from 'notiflix';
import { ImSearch } from 'react-icons/im';
import { Header, Form, Input, Button } from './Serchbar.styled';
export default function Serchbar({ onSubmit }) {
  const [text, setText] = useState('');

  const handleNameChange = e => {
    setText(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();

    if (text.trim() === '') {
      Notiflix.Notify.warning('Please enter keyword');
      return;
    }
    onSubmit(text);
    setText('');
  };

  return (
    <Header className="searchbar">
      <div>
        <Form className="form" onSubmit={handleSubmit}>
          <Button type="submit" className="button">
            <span className="button-label">
              <ImSearch />
            </span>
          </Button>

          <Input
            className="input"
            name="text"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={text}
            onChange={handleNameChange}
          />
        </Form>
      </div>
    </Header>
  );
}
