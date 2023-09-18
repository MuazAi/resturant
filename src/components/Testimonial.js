const Testimonial = ({ user_image, user_name, review }) => {
  return (
    <section className="card">
      <h1>Rating</h1>
      <p>
        <img src={user_image} alt={user_name} height="100" /> {user_name}
      </p>
      <h4>{review}</h4>
    </section>
  );
};

export default Testimonial;
