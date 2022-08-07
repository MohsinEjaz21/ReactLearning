import useWindowSize from '@rehooks/window-size';
import './section-07.scss';

function ForeachElement(props) {
  return (
    <li className="li">
      <img src={props.icon} />
      <p className="text">{props.text}</p>
    </li>
  );
}


const data = {
  text1: 'What to Do Before the Rhinoplasty?',
  text2: 'Our surgeons ask your medical history and physical examination.',
  text3: `During your online consultation, your surgeon will ask you questions about your medical history.
        \nThey will also conduct a physical examination. Your surgeon will inform you about everything you need to know before the surgery.
        \nClineca will provide you with complete guidance and support before your surgery.
        \nYou will have a complete and detailed list of instructions.`,

  text4: 'The Most Important Instructions',
  image: "../../../../assets/images/sec07/img_1.png",
  list: [
    {
      icon: "../../../../assets/images/sec05/icons/icon_1.png",
      text: "Do not smoke for at least 2 weeks after the surgery."
    },
    {
      icon: "../../../../assets/images/sec05/icons/icon_1.png",
      text: "Do not take non-steroidal anti-inflammatory medications after the surgery until your surgeon approves using them."
    },
    {
      icon: "../../../../assets/images/sec05/icons/icon_1.png",
      text: "Do not blow your nose."
    },
    {
      icon: "../../../../assets/images/sec05/icons/icon_3.png",
      text: "Avoid strenuous activities."
    }

  ]
}



export function Section07(props) {
  const windowSize = useWindowSize();
  const isSmall = windowSize.innerWidth < 991;


  return (
    <div className="section-07">
      <div className="block-2">
        <img className="image" src={data.image} />
      </div>
      <div className="block-1">
        <div className="text1">{data.text1}</div>
        <div className="text2">{data.text2}</div>
        <div className="text3 whitespace_prewrap">{data.text3}</div>
        <div className="text4">{data.text4}</div>
        <ul className="ul">
          {data?.list?.map(e => <ForeachElement text={e.text} icon={e.icon} />)}
        </ul>
      </div>

    </div>
  );
}

