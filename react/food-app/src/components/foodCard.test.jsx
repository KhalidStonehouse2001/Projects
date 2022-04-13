import {render, screen} from '@testing-library/react'
import Foodcard from './foodCard'
describe('Testing Food Card', () => {
   describe('Testing Label', () => {
    it('Shows Label Title', () => {
        render(<Foodcard/>)
        const resultElement = screen.getByText('Search For Your Favourite Food')
        expect(resultElement).toBeInTheDocument()
    });
   });
   describe('Testing Each Food Card', () => {
       it('renders each card', () => {
           render(<Foodcard/>)
           const resultElementId = screen.getByTestId('food-card-item')
           expect(resultElementId).toBeInTheDocument()
       });
       
   });
   

   
    
});
