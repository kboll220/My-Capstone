import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruchetta.jpg';
import greekSaladImage from './assets/greekSalad.jpg';
import lemonDessertImage from './assets/lemonDessert.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import SpecialItemCard from './SpecialItemCard';

const specialItems = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$5.00',
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {specialItems.map((special, index) => 
        <SpecialItemCard key={index} special={special} />
      )}
    </section>
  );
};

export default WeekSpecials;
