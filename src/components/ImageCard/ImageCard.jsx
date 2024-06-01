import css from './ImageCard.module.css';

export default function ImageCard({ item, onClick }) {
  return (
    <div onClick={onClick}>
      <img
        className={css.imageCard}
        src={item.urls.small}
        alt={item.urls.description}
        width= '300px'
        height= '300px'
      ></img>
    </div>
  );
}