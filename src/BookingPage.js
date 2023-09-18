import ChairCounterButton from "./components/ChairCounterButton";
import Hero from "./components/Hero";

const BookingPage = () => {
  return (
    <>
      <Hero />
      <seciton id="reservation-form">
        <h1>Reserve a table</h1>
        <form>
          <label>
            full name
            <input type="text" />
          </label>
          <ChairCounterButton />
          <label>
            Date <input type="date" />
          </label>
          <label>
            Time
            <input type="time" />
          </label>

          <input type="submit" className="action-button" />
        </form>
      </seciton>
    </>
  );
};

export default BookingPage;
