import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Brittany Anderson',
    image: customer1Image,
    rating: [1, 1, 1, 1, 1],
    says: `The food was amazing and the atmosphere was impecible.`,
  },
  {
    fullName: 'Hernado Garcia',
    image: customer2Image,
    rating: [1, 1, 1, 1],
    says: `Serivce was fast and staff was extremely kind.`,
  },
  {
    fullName: 'Camila Carmine',
    image: customer3Image,
    rating: [1, 1, 1, 1],
    says: `Wuick service and friendly staff.`,
  },
  {
    fullName: 'Brandon Smith',
    image: customer4Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Celebrated my birthday and could not have asked for a more enjoyable night.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
