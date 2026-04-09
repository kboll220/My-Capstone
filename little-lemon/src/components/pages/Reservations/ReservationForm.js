import { useState } from 'react';
import { Col, Row } from 'antd';

const ReservationForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData
}) => {
  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ['No Occasion', 'Birthday', 'Anniversary', 'Engagement', 'First Date', 'Other'];

  const [firstName, setFirstName] = useState({
    value: "",
    isTouched: false,
  });
  const [lastName, setLastName] = useState({
    value: "",
    isTouched: false,
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [
    numberOfGuests, 
    setNumberGuests
  ] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState(occasions[0]);
  const [comments, setComments] = useState("");

  const allFieldsValid = () => {
    if(firstName.value.length >= 3 && lastName.value.length >= 3 && numberOfGuests >= 1 && numberOfGuests <= 10)
    return true;
  }

  const GuestsErrorMessage = () => {
  return (
    <p className="FieldError">Please enter a number between 1 and 10</p>
  );
  };

  const TextLengthErrorMessage = () => {
  return (
    <p className="FieldError">Name should have at least 3 characters</p>
  );
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    submitData({ firstName, lastName, phoneNumber, email, date, time, numberOfGuests, occasion, comments });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Row gutter={16}>
          <Col span={12}>
          <div className='Field'>
            <label htmlFor='first-name'>
              First Name <sup>*</sup>
            </label>
            <input 
              type="text" 
              placeholder='Enter First Name'
              id="first-name" 
              name="first-name"  
              required={true} 
              onChange={(e) => setFirstName({...firstName, value: e.target.value})}
              onBlur={() => setFirstName({ ...firstName, isTouched: true })}
            />
            {firstName.isTouched && firstName.value.length < 3 ? <TextLengthErrorMessage />: null}
            </div>
            <div className='Field'>
              <label htmlFor='phone-number'>
                Phone Number
              </label>
              <input 
                type="text" 
                placeholder='Enter Phone Number (optional)'
                id="phone-number" 
                name="phone-number"  
                value={phoneNumber}
                required={false} 
                onChange={e => setPhoneNumber(e.target.value)}
              />
            </div>
          <div className='Field'>
              <label htmlFor='reservation-date'>
                Date <sup color='red'>*</sup>
              </label>
              <input 
                type="date" 
                id="reservation-date" 
                name="reservation-date" 
                min={minimumDate} 
                value={date} 
                required={true} 
                onChange={e => {setDate(e.target.value);dispatchOnDateChange(e.target.value);
                }}
              />
            </div>
            <div className='Field'>
              <label htmlFor='reservation-number-guests'>
                Number of Guests <sup>*</sup>
              </label>
              <input 
                type="number" 
                id="reservation-number-guests" 
                name="reservation-number-guests" 
                placeholder='Enter number of guests'
                value={numberOfGuests} 
                min={minimumNumberOfGuests} 
                max={maximumNumberOfGuests} 
                required={true} 
                onChange={(e) => setNumberGuests(e.target.value)}
                />
                {numberOfGuests > 10 ? <GuestsErrorMessage />: null}
            </div>
          </Col>
          <Col span={12}>
            <div className='Field'>
              <label htmlFor='last-name'>
                Last Name <sup>*</sup>
              </label>
              <input 
                type="text" 
                placeholder='Enter Last Name'
                id="last-name" 
                name="last-name"  
                required={true} 
                onChange={(e) => setLastName({...lastName, value: e.target.value})}
                onBlur={() => setLastName({ ...lastName, isTouched: true })}
              />
              {lastName.isTouched && lastName.value.length < 3 ? <TextLengthErrorMessage />: null}
            </div>
            <div className='Field'>
              <label htmlFor='email'>
                Email
              </label>
              <input 
                type='email'
                placeholder='Enter Email (optional)'
                id="email" 
                name="email" 
                value={email} 
                required={false} 
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className='Field'>
              <label htmlFor='reservation-time'>
                Reservation Time<sup>*</sup>
              </label>
              <select 
                id="reservation-time" 
                name="reservation-time" 
                value={time} 
                required={true} 
                onChange={e => setTime(e.target.value)}
              >
                 {availableTimes.map(times => 
                <option data-testid="reservation-time-option" key={times}>
                {times}
                </option>
                )}
              </select>
            </div>
            <div className='Field'>
              <label htmlFor='reservation-occasion'>Occasion</label>
              <select 
                id="reservation-occasion" 
                name="reservation-occasion" 
                value={occasion} 
                required={false} 
                onChange={e => setOccasion(e.target.value)}
              >
                {occasions.map(occasion => 
                  <option data-testid="reservation-occasion-option" key={occasion}>
                    {occasion}
                  </option>
                )}
              </select>
            </div>
          </Col>
      </Row>
      <div className='Field'>
              <label htmlFor='comments'>
                Comments or Special Requests
              </label>
              <input 
                type="textarea" 
                placeholder='Please enter any comments or special requests such as allergies'
                id="comments" 
                name="comments"  
                value={comments}
                required={false} 
                onChange={(e) => setComments(e.target.value)}
              />
            </div>
      <button 
        className="button-primary" 
        type="submit" 
        disabled={!allFieldsValid()}
        aria-label="On Click"
      >
        Make your reservation
      </button>
    </form>
  );
};

export default ReservationForm;