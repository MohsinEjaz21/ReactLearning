import useWindowSize from '@rehooks/window-size';

function ForeachElement(props) {
  return (
    <li className="li">
      <img src={props.icon} />
      <p className="text">{props.text}</p>
    </li>
  );
}


const data = {
  text1: 'What to Do After the Rhinoplasty?',
  text2: 'Clineca will provide you with all the support and guidance you need.',
  text3: <>What you need to do after the surgery will be explained to you in detail by your surgeon and Clineca will provide you with all the support and guidance you need.<br /><br />You will have a complete and detailed list of instructions.</>,
  text4: 'The Most Important Instructions',
  image: "assets/images/sec05/img_1.png",
  imageMobile: "assets/images/sec05/icons/img_2.png",
  list: [
    {
      icon: "assets/images/sec05/icons/icon_1.png",
      text: "Do not smoke for at least 2 weeks after the surgery."
    },
    {
      icon: "assets/images/sec05/icons/icon_1.png",
      text: "Do not take non-steroidal anti-inflammatory medications after the surgery until your surgeon approves using them."
    },
    {
      icon: "assets/images/sec05/icons/icon_1.png",
      text: "Do not blow your nose."
    },
    {
      icon: "assets/images/sec05/icons/icon_1.png",
      text: "Avoid strenuous activities."
    },
    {
      icon: "assets/images/sec05/icons/icon_1.png",
      text: "Do not let your sunglasses or eyeglasses put pressure on your nose for at least 1 month after the surgery. You can tape your glasses to your forehead."
    },
    {
      icon: "assets/images/sec05/icons/icon_2.png",
      text: "Love yourself and show the world how beautiful you are!."
    }

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
          {data?.list?.map(e => <ForeachElement text={e.text} icon={e.icon} />)}
        </ul>
      </div>
      <div className="block-2">
        {isSmall && <img className="image" src={data.imageMobile} />}
        {!isSmall && <img className="image" src={data.image} />}
      </div>
    </div>
  );
}

