import users from "../data/users.json";
import s from "./UserCard.module.css";
const Description = () => {
  return (
    <>
      <ul className={s.list}>
        {users.map((item) => (
          <li className={s.cardItem} key={item.id}>
            <div className={s.infoWrap}>
              <p className={s.cardInfo}>{item.name}</p>
              <p className={s.cardInfo}>{item.dob}</p>
              <p className={s.cardInfo}>{item.dod}</p>
              <iframe
                width="250"
                height="200"
                src="https://www.youtube.com/embed/t99KH0TR-J4?si=h_7Q6lreQzuEP6JI"
                title="Queen - The Show Must Go On"
              ></iframe>
              <p></p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Description;
