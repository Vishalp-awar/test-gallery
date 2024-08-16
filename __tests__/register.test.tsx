// // __tests__/register.test.tsx
// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import RegisterPage from '../pages/register';
// import { useRouter } from 'next/router';

// jest.mock('next/router', () => ({
//   useRouter: jest.fn(),
// }));

// const mockRouter = { push: jest.fn() };
// (useRouter as jest.Mock).mockReturnValue(mockRouter);

// describe('RegisterPage', () => {
//   beforeEach(() => {
//     render(<RegisterPage />);
//   });

//   it('should render registration form', () => {
//     expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
//   });

//   it('should display error on invalid input', async () => {
//     fireEvent.change(screen.getByLabelText(/username/i), { target: { value: '' } });
//     fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '' } });
//     fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: '' } });
//     fireEvent.click(screen.getByRole('button', { name: /register/i }));

//     expect(await screen.findByText(/invalid input/i)).toBeInTheDocument();
//   });

//   it('should register and redirect on valid input', async () => {
//     fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'validUser' } });
//     fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'validPass' } });
//     fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'validPass' } });
//     fireEvent.click(screen.getByRole('button', { name: /register/i }));

//     expect(await screen.findByText(/registration successful/i)).toBeInTheDocument();
//     expect(mockRouter.push).toHaveBeenCalledWith('/HomePage');
//   });

//   it('should show validation errors for empty fields', () => {
//     fireEvent.click(screen.getByRole('button', { name: /register/i }));

//     expect(screen.getByText(/username is required/i)).toBeInTheDocument();
//     expect(screen.getByText(/password is required/i)).toBeInTheDocument();
//   });

//   it('should show error for password mismatch', () => {
//     fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'validPass' } });
//     fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'invalidPass' } });
//     fireEvent.click(screen.getByRole('button', { name: /register/i }));

//     expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
//   });
// });
