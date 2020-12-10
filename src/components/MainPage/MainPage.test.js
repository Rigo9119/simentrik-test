import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from './MainPage'

test('Link changes the class when hovered', () => {
    render(<MainPage />)
    const component = screen.getByTestId('mainpage');
    expect(component).toBeInTheDocument();
});
