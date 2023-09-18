import Testimonial from "./components/Testimonial";

const CoustomersSay = () => {
  const customer_say = [
    {
      user_image: "assets/Mario and Adrian b.jpg",
      user_name: "muaz",
      review: "lsdfjl",
    },
    {
      user_image: "assets/Mario and Adrian b.jpg",
      user_name: "muaz",
      review: "lsdfjl",
    },
    {
      user_image: "assets/Mario and Adrian b.jpg",
      user_name: "muaz",
      review: "lsdfjl",
    },
  ];
  return (
    <section>
      <h1 className="header">Testimonial</h1>
      <section className="testmonial">
        {customer_say.map((say) => {
          return <Testimonial {...say} />;
        })}
      </section>
    </section>
  );
};

export default CoustomersSay;
