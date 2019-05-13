import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-styled-components';
import Card from '.';

afterEach(cleanup);

describe('Card component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Card>
        <div>Hi</div>
      </Card>
    );
    expect(container).toMatchSnapshot();
  });

  it('should be rendered with at least one child component', () => {
    const { container } = render(
      <Card>
        <div>Hi</div>
      </Card>
    );
    expect(container.firstChild.hasChildNodes).toBeTruthy();
  });

  it('should render with a class of test', () => {
    const { container } = render(
      <Card className="test">
        <div>Hi</div>
      </Card>
    );
    expect(container.firstChild.classList.contains('test')).toBe(true);
  });

  it('should render with default box shadow if not passed explicitely', () => {
    const { container } = render(
      <Card>
        <div>Hi</div>
      </Card>
    );
    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      '0 5px 35px rgba(64,67,109,0.25)'
    );
  });

  it('should render with default border radius if not passed explicitely', () => {
    const { container } = render(
      <Card>
        <div>Hi</div>
      </Card>
    );
    expect(container.firstChild).toHaveStyleRule('border-radius', '10px');
  });
});
