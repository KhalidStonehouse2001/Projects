import {render, screen } from '@testing-library/react'
import Foodcard from './foodCard';
describe('Testing Food Card Component', () => {
    describe('Food Name ', () => {
        it('renders Food Name', () => {
            const foodMockData = {
                name: 'Mock Food',
                image: 'url',
                origin: 'Manchester',
                starRating: 5
            }
            render(<Foodcard food={foodMockData}/>)
            const foodNameElement = screen.getByText('Food Name: Mock Food')
        });
        
    });
    
});
