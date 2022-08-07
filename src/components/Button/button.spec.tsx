import { describe, expect, test } from 'vitest';
import { render, cleanup } from 'solid-testing-library';
import Button from './button.component';

describe('<Button />', () => {
  test('Should create', () => {
    const {baseElement, unmount } = render(() => <Button text="Button"/>);
    expect(baseElement).toBeInTheDocument();
    unmount();
  });
});