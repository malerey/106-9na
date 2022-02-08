const Card = ({ name, img }) => {
  return (
    <article>
      <h2>{name}</h2>
      <img src={img} />
    </article>
  );
};

export default Card;
