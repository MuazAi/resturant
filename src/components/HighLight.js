const HighLight = () => {
  const orders = [
    {
      title: "Salad",
      image: "assets/greek salad.jpg",
      price: 12.4,
      description: ";alsjkfa sdg;as dgkljas ;ldga;s",
      link: "/#",
    },
    {
      title: "Salad",
      image: "/assets/lemon dessert.jpg",
      price: 12.4,
      description: ";alsjkfa sdg;as dgkljas ;ldga;s",
      link: "/#",
    },
    {
      title: "Salad",
      image: "./assets/greek salad.jpg",
      price: 12.4,
      description: ";alsjkfa sdg;as dgkljas ;ldga;s",
      link: "/#",
    },
  ];
  const Orders = ({ orders }) => {
    return orders.map((order, index) => {
      return (
        <article className="card" key={index}>
          <img
            src={order.image}
            height="300"
            className="col-12"
            alt={order.title}
          />
          <section className="card-body">
            <h1>
              {order.title} <span>{order.price}$</span>
            </h1>
            <p>{order.description}</p>

            <h4 className="card-footer">
              <a href={order.link}>Order a delivery </a>
              <i className="fa fa-bicycle"></i>
            </h4>
          </section>
        </article>
      );
    });
  };
  return (
    <section className="header" id="meals">
      <Orders orders={orders} />
    </section>
  );
};

export default HighLight;
