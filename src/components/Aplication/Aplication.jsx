import s from "./Aplication.module.css";
const Aplication = ({ images }) => {
  return (
    <>
      <p></p>
      {images.map((item) => (
        <img
          className={s.images}
          src={item.url}
          alt={item.title}
          key={item.id}
          width={200}
        />
      ))}
    </>
  );
};

export default Aplication;
