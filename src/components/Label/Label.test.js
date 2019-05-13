import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-styled-components';
import Label from '.';

afterEach(cleanup);

describe('Label component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Label>First Name</Label>);
    expect(container).toMatchSnapshot();
  });

  it('should be rendered with at least one child component', () => {
    const { container } = render(<Label>First Name</Label>);
    expect(container.firstChild.hasChildNodes).toBeTruthy();
  });

  it('should render with default color if not passed explicitely', () => {
    const { container } = render(<Label>First Name</Label>);
    expect(container.firstChild).toHaveStyleRule('color', '#aaa');
  });

  it('should render with float styles if float prop is passed', () => {
    const { container } = render(<Label float>First Name</Label>);
    expect(container.firstChild).toHaveStyleRule('position', 'absolute');
    expect(container.firstChild).toHaveStyleRule('top', '0');
    expect(container.firstChild).toHaveStyleRule('left', '0');
  });
});
