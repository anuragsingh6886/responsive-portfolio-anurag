import githubLogo from "../assets/images/icons/github.svg";

const Product = (props) => {
  const { name, description, img } = props;
  return (
    <div className="portfolio-cards row card">
      <div className="card-one col-3 w-100">
        <img className="card-img-top" src={img} alt="" />
        <div className="project-detail">
          <span>
            <img src={githubLogo} alt="" />
            <span>{name}</span>
          </span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
