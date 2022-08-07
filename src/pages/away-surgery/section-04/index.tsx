import './section-04.scss';





function ForeachElement(props) {
  const icon = "../../../../assets/images/sec04/img-1.svg";
  return (
    <li className="li">
      <img src={icon} />
      <p className="text">{props.text}</p>
    </li>
  );
}

const listOfElements = [
  { text: "Прибиране на пригорещения и пригорещения" },
  { text: "Прибиране на пригорещения и пригорещения" },
  { text: "Прибиране на пригорещения и пригорещения" },
  { text: "Прибиране на пригорещения и пригорещения" }
]


export function SectionO4(props) {
  const image = "../../../../assets/images/sec04/img-2.png";
  const text = "Your breasts might be covered with bandages or dressings to reduce swelling and to support the new shape of your breasts.";
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
            {listOfElements?.map(e => <ForeachElement text={e.text} />)}
          </ul>
        </div>
      </div>
    </div>
  );
}

