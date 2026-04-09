import { fireEvent, render, screen } from "@testing-library/react";
import ReservationForm from './ReservationForm';

describe('Reservation form', () => {
  const availableTimes = ['18:00', '22:30'];
  const today = new Date().toISOString().split('T')[0];
  const dispatchOnDateChange = jest.fn();
  const submitData = jest.fn();

  test('Correctly render all fields and default values', async () => {
    render(
      <ReservationForm availableTimes={availableTimes} submitData={submitData} />
    );

    const firstName = screen.getByLabelText(/First Name/)
    const lastName = screen.getByLabelText(/Last Name/)
    const phoneNumber = screen.getByLabelText(/Phone Number/)
    const email = screen.getByLabelText(/Email/)
    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);
    const timeOptions = await screen.findAllByTestId('reservation-time-option');
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const occasionOptions = await screen.findAllByTestId(`reservation-occasion-option`);
    const submitButton = screen.getByRole('button');

    expect(firstName).toBeInTheDocument();
    expect(firstName).toHaveAttribute('type', 'text');
    expect(firstName).toHaveAttribute('id', 'first-name');
    expect(dateInput).toHaveValue('');

    expect(lastName).toBeInTheDocument();
    expect(lastName).toHaveAttribute('type', 'text');
    expect(lastName).toHaveAttribute('id', 'last-name');
    expect(lastName).toHaveValue('');

    expect(phoneNumber).toBeInTheDocument();
    expect(phoneNumber).toHaveAttribute('type', 'text');
    expect(phoneNumber).toHaveAttribute('id', 'phone-number');
    expect(phoneNumber).toHaveValue('');

    expect(email).toBeInTheDocument();
    expect(email).toHaveAttribute('type', 'text');
    expect(email).toHaveAttribute('id', 'email');
    expect(email).toHaveValue('');

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('id', 'reservation-date');
    expect(dateInput).toHaveValue(today);

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('id', 'reservation-time');
    expect(timeOptions.length).toBe(2);

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute('id', 'reservation-number-guests');
    expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
    expect(numberOfGuestsInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('id', 'reservation-occasion');
    expect(occasionOptions.length).toBe(2);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeEnabled();
  });

  test(
    `Display an error message and disable sumbit button when first name value is empty`, () => {
    render(
      <ReservationForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    );

    const firstName = screen.getByLabelText(/First Name/);
    fireEvent.change(firstName, { target: { value: '' } });
    fireEvent.blur(firstName);
    const errorMessage = screen.getByTestId('error-message');
    const submitButton = screen.getByRole('button');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Name should have at least 3 characters');
    expect(submitButton).toBeDisabled();
  });

  test(
    `Display an error message and disable sumbit button when last name value is empty`, () => {
    render(
      <ReservationForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    );

    const lastName = screen.getByLabelText(/Last Name/);
    fireEvent.change(lastName, { target: { value: '' } });
    fireEvent.blur(lastName);
    const errorMessage = screen.getByTestId('error-message');
    const submitButton = screen.getByRole('button');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Name should have at least 3 characters');
    expect(submitButton).toBeDisabled();
  });

  test(
    `Display an error message and disable sumbit button when first name value is less than 3 characters`, () => {
    render(
      <ReservationForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    );

    const firstName = screen.getByLabelText(/First Name/);
    fireEvent.change(firstName, { target: { value: 'Ka' } });
    fireEvent.blur(firstName);
    const errorMessage = screen.getByTestId('error-message');
    const submitButton = screen.getByRole('button');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Name should have at least 3 characters');
    expect(submitButton).toBeDisabled();
  });

  test(
    `Display an error message and disable sumbit button when last name value is less than 3 characters`, () => {
    render(
      <ReservationForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    );

    const lastName = screen.getByLabelText(/Last Name/);
    fireEvent.change(lastName, { target: { value: 'Ja' } });
    fireEvent.blur(lastName);
    const errorMessage = screen.getByTestId('error-message');
    const submitButton = screen.getByRole('button');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Name should have at least 3 characters');
    expect(submitButton).toBeDisabled();
  });

  test(
    `Display an error message and disable sumbit button when number of guests is more than 10`, () => {
    render(
      <ReservationForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    );

    const numbeOfGuests = screen.getByLabelText(/Number of Guests/);
    fireEvent.change(numbeOfGuests, { target: { value: 12 } });
    fireEvent.blur(numbeOfGuests);
    const errorMessage = screen.getByTestId('error-message');
    const submitButton = screen.getByRole('button');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Please enter a number between 1 and 10');
    expect(submitButton).toBeDisabled();
  });

  test('Successfully submit form with required values', () => {
    render(
      <ReservationForm availableTimes={availableTimes} submitData={submitData} />
    );

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(submitData).toHaveBeenCalledWith({ 
      firstName: "Test",
      lastName: "Tester",
      date: today, 
      time: availableTimes[0], 
      numberOfGuests: 1, 
      occasion: 'Birthday', 
    });
  });

test('Renders the Reservation heading', () => {
    render(<ReservationForm />);
    const headingElement = screen.getByText("Table Reservation");
    expect(headingElement).toBeInTheDocument();
});
});