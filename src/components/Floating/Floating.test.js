import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-styled-components';
import Floating from '.';

afterEach(cleanup);

describe('Floating component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Floating>
        <Floating.Input />
        <Floating.Label>Name</Floating.Label>
      </Floating>
    );
    expect(container).toMatchSnapshot();
  });

  it('should be rendered with at least one child component', () => {
    const { container } = render(
      <Floating>
        <Floating.Input />
        <Floating.Label>Name</Floating.Label>
      </Floating>
    );
    expect(container.firstChild.hasChildNodes).toBeTruthy();
  });

  it('should render with a class of test', () => {
    const { container } = render(
      <Floating className="test">
        <Floating.Input />
        <Floating.Label>Name</Floating.Label>
      </Floating>
    );
    expect(container.firstChild.classList.contains('test')).toBe(true);
  });

  it('should implicitely pass the float prop to children and render their styles', () => {
    const { getByTestId } = render(
      <Floating>
        <Floating.Input data-testid="child-input" />
        <Floating.Label data-testid="child-label">Name</Floating.Label>
      </Floating>
    );

    expect(getByTestId('child-label')).toHaveStyleRule('position', 'absolute');
    expect(getByTestId('child-label')).toHaveStyleRule('top', '0');
    expect(getByTestId('child-label')).toHaveStyleRule('left', '0');
    expect(getByTestId('child-input')).toHaveStyleRule('opacity', '0', {
      modifier: `
        :placeholder-shown:not(:focus)::placeholder
      `
    });
  });
});
