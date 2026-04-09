import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './About.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Nestled in the heart of bustling Chicago, Little Lemon is where modern
          flair meets cozy nostalgia. Our diverse, artisanal menu, featuring
          delectable bruschettas, succulent burgers, and refreshing Greek
          salads, is a testament to our belief that food is an art. Crafted by
          expert chefs with locally-sourced ingredients, our dishes not only
          delight the palate but nourish the soul. Whether you're seeking a
          romantic dinner, a family meal, or a relaxed atmosphere with friends,
          Little Lemon is your ideal culinary destination. Find us in the heart
          of Chicago for an unforgettable experience.
        </p>
      </div>
      <div className="our-story-chefs">
        <img className="chefsA" src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img className="chefsB" src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
