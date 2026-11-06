import '@testing-library/jest-dom';

Object.defineProperty(URL, 'createObjectURL', {
  configurable: true,
  value: jest.fn(() => 'blob:preview'),
});

Object.defineProperty(URL, 'revokeObjectURL', {
  configurable: true,
  value: jest.fn(),
});