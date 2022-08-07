import useWindowSize from '@rehooks/window-size';
import './section-05.scss';

function ForeachElement(props) {
  const icon = "../../../../assets/images/sec04/img-1.svg";
  return (
    <li className="li">
      <img src={icon} />
      <p className="text">{props.text}</p>
    </li>
  );
}


const data = {
  text1: 'What to Do After the Rhinoplasty?',
  text2: 'Clineca will provide you with all the support and guidance you need.',
  text3: <>What you need to do after the surgery will be explained to you in detail by your surgeon and Clineca will provide you with all the support and guidance you need.<br /><br />You will have a complete and detailed list of instructions.</>,
  text4: 'The Most Important Instructions',
  image: "../../../../assets/images/sec05/img_1.png",
  imageMobile: "../../../../assets/images/sec05/img_2.png",
  list: [
    "Your breasts might be covered with bandages or dressings to reduce swelling and to support the new shape of your breasts.",
    "Your surgeon may recommend support bra to minimize swelling.",
    "A small tube can be temporarily placed under the skin to drain excess fluid.",
    "You will be seen in the next few days for bandages and drain removal.",
    "You may also experience some loss of feeling around the incisions which is normal.",
    "You may feel tired following the surgery, but you will be able to return daily activities within days."
  ]
}



export function SectionO5(props) {
  const windowSize = useWindowSize();
  const isSmall = windowSize.innerWidth < 991;


  return (
    <div className="section-05">
      <div className="block-1">
        <div className="text1">{data.text1}</div>
        <div className="text2">{data.text2}</div>
        <div className="text3">{data.text3}</div>
        <div className="text4">{data.text4}</div>
        <ul className="ul">
          {data?.list?.map(e => <ForeachElement text={e} />)}
        </ul>
      </div>
      <div className="block-2">
        {isSmall && <img className="image" src={data.imageMobile} />}
        {!isSmall && <img className="image" src={data.image} />}
      </div>
    </div>
  );
}

