import { Link } from 'react-router-dom';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'antd';
import "./index.css"
import pages from '../../../utils/pages';

const ConfirmedReservation = () => {
  return (
    <div className="container confirmed-reservation">
      <FontAwesomeIcon icon={faCircleCheck} size="6x" />
      <section>
        <h2>Your reservation has been confirmed.</h2>
        &nbsp;
        <p>You will receive an email with all the details.</p>
        <p> If you would like to create an account please click Sign Up below</p>
      </section>
      &nbsp;
      <Row gutter={16}>
        <Col span={12}>
          <Link className="button-primary" aria-label="On Click" to={pages.get('signup').path}>
            Signup
          </Link>
        </Col>
        <Col span={12}>
          <Link className="button-primary" aria-label="On Click" to={pages.get('home').path}>
            Home
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default ConfirmedReservation;