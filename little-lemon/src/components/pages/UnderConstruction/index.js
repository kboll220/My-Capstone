import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

const UnderConstruction = () => {
  return (
    <div className="container under-construction">
      <FontAwesomeIcon icon={faPersonDigging} size="10x" />
      <section>
        <h2>Page under construction</h2>
        &nbsp;
        <h3>Please come back at another date</h3>
      </section>
    </div>
  );
};

export default UnderConstruction;