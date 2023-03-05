import { Link } from 'react-router-dom';
import './directory-item.styles.scss';


const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const path = `/shop/${title}`

  return (
    <div className='directory-item-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <Link to={path} className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Link>
    </div>
  );
};

export default DirectoryItem;
