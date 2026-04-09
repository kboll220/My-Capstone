import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './SpecialItemCard.css';
import pages from '../../../utils/pages';

const SpecialItemCard = ({ special }) => {
  return (
    <article className="special-card">
      <div className="special-card-image">
        <img src={special.image} alt={special.name} />
      </div>
      <div className="special-card-header">
        <h3>{special.name}</h3>
        <span>{special.price}</span>
      </div>
      <div className="special-card-body-footer">
        <p>{special.description}</p>
        <Link to={pages.get('orderOnline').path}>
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
        </Link>
      </div>
    </article>
  );
};

export default SpecialItemCard;
