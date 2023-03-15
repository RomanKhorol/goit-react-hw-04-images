import { Component } from 'react';
import Notiflix from 'notiflix';
import { ImSearch } from 'react-icons/im';
import { Header, Form, Input, Button } from './Serchbar.styled';
export default class Serchbar extends Component {
  state = {
    text: '',
  };

  handleNameChange = e => {
    this.setState({ text: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.state.text.trim() === '') {
      Notiflix.Notify.warning('Please enter keyword');
      return;
    }
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  };
  render() {
    return (
      <Header className="searchbar">
        <div>
          <Form className="form" onSubmit={this.handleSubmit}>
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
              value={this.state.text}
              onChange={this.handleNameChange}
            />
          </Form>
        </div>
      </Header>
    );
  }
}
