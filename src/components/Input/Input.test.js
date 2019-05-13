import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-styled-components';
import Input from '.';

afterEach(cleanup);

describe('Input component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });

  it('should render with a class of test', () => {
    const { container } = render(<Input className="test" />);
    expect(container.firstChild.classList.contains('test')).toBe(true);
  });

  it('should render with float styles if float prop is passed', () => {
    const { container } = render(<Input float />);
    expect(container.firstChild).toHaveStyleRule('opacity', '0', {
      modifier: `
        :placeholder-shown:not(:focus)::placeholder
      `
    });
  });
});
