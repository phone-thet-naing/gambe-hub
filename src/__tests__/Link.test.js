import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Link from '../components/Link'
import '@testing-library/jest-dom/matchers'

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  //   renderer.act(() => {
  //     tree.props.onMouseEnter();
  //   });
  //   // re-rendering
  //   tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();

  //   // manually trigger the callback
  //   renderer.act(() => {
  //     tree.props.onMouseLeave();
  //   });
  //   // re-rendering
  //   tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
});

it.only('using rtl', async () => {
  // Arrange
  render(
    <Link page="http://www.youtube.com" children='Hello' />
  )

  expect(screen).toMatchSnapshot()
})