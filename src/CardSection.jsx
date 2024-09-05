import './App.css';

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={image} alt={title} className="card-img" />
        <div className="card-text">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

const CardSection = ({ data }) => {
  return (
    <div className="card-list">
      {data.map((item) => {
        return (
          <Card 
            key={item.id} 
            image={item.image} 
            title={item.title} 
            description={item.discription} 
          />
        );
      })}
    </div>
  );
};

export default CardSection;
