import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-styled-components';
import Flex from '.';

afterEach(cleanup);

describe('Flex component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <Flex>
        <Flex.Item>Hi</Flex.Item>
      </Flex>
    );
    expect(container).toMatchSnapshot();
  });

  it('should be rendered with at least one child component', () => {
    const { container } = render(<Flex>Hi</Flex>);
    expect(container.firstChild.hasChildNodes).toBeTruthy();
  });

  it('should render with a class of test', () => {
    const { container } = render(<Flex className="test">Hi</Flex>);
    expect(container.firstChild.classList.contains('test')).toBe(true);
  });
});
