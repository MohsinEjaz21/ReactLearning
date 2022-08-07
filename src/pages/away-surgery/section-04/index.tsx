import './section-04.scss';


export function SectionO4(props) {
  const icon = "../../../../assets/images/sec04/img-1.svg";
  const image = "../../../../assets/images/sec04/img-2.png";

  return (
    <div className="section-04">
      <div className="block-1">
        <h1 className="text1">What To Expect During A Recovery?</h1>
        <h2 className="text2">Clineca with you from your consultation to the very end of your recovery.</h2>
      </div>
      <div className="block-2">
        <img className="image" src={image} />
        <div className="content">
          <h1 className="heading">The First Week</h1>
          <ul className="ul">
            <li className="li">
              <img src={icon} />
              <p className="text">
                Your breasts might be covered with bandages or dressings to reduce swelling and to support the new shape of your breasts.
              </p>
            </li>
            <li className="li">
              <img src={icon} />
              <p className="text">
                Your breasts might be covered with bandages or dressings to reduce swelling and to support the new shape of your breasts.
              </p>
            </li>
            <li className="li">
              <img src={icon} />
              <p className="text">
                Your breasts might be covered with bandages or dressings to reduce swelling and to support the new shape of your breasts.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

