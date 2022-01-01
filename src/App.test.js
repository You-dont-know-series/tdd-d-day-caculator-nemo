import { render, screen } from '@testing-library/react';
import App from './App';
import { remainDay } from './test';

test('날짜가 6일 남았습니다.', () => {
  const result = remainDay('2021-02-10', '2021-02-16');

  expect(result).toBe(6);
});

test('5', () => {
  render(<App />);
  const ddayElement = screen.getByText('5');

  expect(ddayElement).toBeInTheDocument();
});
