import useWindowSize from '@rehooks/window-size';

function ForeachElement(props) {
  return (
    <li className="li">
      <img className="icon" src={props.icon} />
      <p className="text">{props.text}</p>
    </li>
  );
}



const data = {
  text1: 'What to Do Before the Rhinoplasty?',
  text2: 'The results of rhinoplasty can be analyzed in three main',
  block2: [
    {
      image: "../../../../assets/images/sec08/img_1.svg",
      text1: 'Aesthetical Outcomes',
      text2: 'Rhinoplasty can address all kinds of aesthetical concerns about nose.',
      list: [
        {
          icon: "../../../../assets/images/sec08/icon_1.svg",
          text: "Do not smoke for at least 2 weeks after the surgery."
        },
        {
          icon: "../../../../assets/images/sec08/icon_1.svg",
          text: "Do not take non-steroidal anti-inflammatory medications after the surgery until your surgeon approves using them."
        },
        {
          icon: "../../../../assets/images/sec08/icon_1.svg",
          text: "Do not blow your nose."
        },
        {
          icon: "../../../../assets/images/sec08/icon_1.svg",
          text: "Avoid strenuous activities."
        }
      ]
    },
    {
      image: "../../../../assets/images/sec08/img_3.svg",
      text1: 'Health-related Outcomes',
      text2: `The health-related outcome of rhinoplasty is related to breathing.\nIf your septum is crooked or bent, you may be experiencing breathing problems.`,


      list: [
        {
          icon: "../../../../assets/images/sec08/icon_1.svg",
          text: "During the surgery, these problems may also be eliminated."
        },
        {
          icon: "../../../../assets/images/sec08/icon_1.svg",
          text: "Beauty is important! Breathing is important, too!"
        }
      ]
    },
    {
      image: "../../../../assets/images/sec08/img_2.svg",
      text1: 'Psychological Outcomes',
      text2: <> <span className="color-primary">Not being happy</span> with your nose can lead to serious psychological distress..< br /> If your septum is crooked or bent, you may be experiencing breathing problems.</>,
      list: [
        {
          icon: "../../../../assets/images/sec08/icon_1.svg",
          text: "Do not smoke for at least 2 weeks after the surgery."
        },
        {
          icon: "../../../../assets/images/sec08/icon_1.svg",
          text: "Do not take non-steroidal anti-inflammatory medications after the surgery until your surgeon approves using them."
        },
        {
          icon: "../../../../assets/images/sec08/icon_1.svg",
          text: "Do not blow your nose."
        },
        {
          icon: "../../../../assets/images/sec08/icon_1.svg",
          text: "Avoid strenuous activities."
        }
      ]
    },
  ]

}



export function Section08(props) {
  const windowSize = useWindowSize();
  const isSmall = windowSize.innerWidth < 991;


  return (
    <div className="section-08">
      <div className="block-1">
        <div className="text1">{data.text1}</div>
        <div className="text2">{data.text2}</div>
      </div>
      <div className="block-2">
        {data.block2.map((elem, index) => (
          <div className="content">
            <img className="image" src={elem.image} />
            <div className="text1">{elem.text1}</div>
            <div className="text2 whitespace_prewrap">{elem.text2}</div>
            <ul className="ul">
              {elem?.list?.map(e => <ForeachElement text={e.text} icon={e.icon} />)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

