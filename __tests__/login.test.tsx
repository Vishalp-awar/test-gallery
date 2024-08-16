// // __tests__/login.test.tsx
// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import LoginPage from '../pages/login';
// import { useRouter } from 'next/router';

// jest.mock('next/router', () => ({
//   useRouter: jest.fn(),
// }));

// const mockRouter = { push: jest.fn() };
// (useRouter as jest.Mock).mockReturnValue(mockRouter);

// describe('LoginPage', () => {
//   beforeEach(() => {
//     render(<LoginPage />);
//   });

//   it('should render login form', () => {
//     expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
//   });

//   it('should display error on invalid credentials', async () => {
//     fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'invalidUser' } });
//     fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'invalidPass' } });
//     fireEvent.click(screen.getByRole('button', { name: /login/i }));

//     expect(await screen.findByText(/login failed/i)).toBeInTheDocument();
//   });

//   it('should login and redirect on valid credentials', async () => {
//     fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'validUser' } });
//     fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'validPass' } });
//     fireEvent.click(screen.getByRole('button', { name: /login/i }));

//     expect(await screen.findByText(/login successful/i)).toBeInTheDocument();
//     expect(mockRouter.push).toHaveBeenCalledWith('/HomePage');
//   });

//   it('should show validation errors for empty fields', () => {
//     fireEvent.click(screen.getByRole('button', { name: /login/i }));

//     expect(screen.getByText(/username is required/i)).toBeInTheDocument();
//     expect(screen.getByText(/password is required/i)).toBeInTheDocument();
//   });
// });
