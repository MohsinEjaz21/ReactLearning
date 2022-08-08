import useWindowSize from '@rehooks/window-size';

function ForeachElement(props) {
  const icon = "assets/images/sec04/img-1.svg";
  return (
    <li className="li">
      <img src={icon} />
      <p className="text">{props.text}</p>
    </li>
  );
}

const listOfElements = [
  {
    title: 'The First Week',
    image: "assets/images/sec04/img-2.png",
    listOfValues: [
      "Your breasts might be covered with bandages or dressings to reduce swelling and to support the new shape of your breasts.",
      "Your surgeon may recommend support bra to minimize swelling.",
      "A small tube can be temporarily placed under the skin to drain excess fluid.",
      "You will be seen in the next few days for bandages and drain removal.",
      "You may also experience some loss of feeling around the incisions which is normal.",
      "You may feel tired following the surgery, but you will be able to return daily activities within days."
    ]
  },
  {
    title: 'Later',
    image: "assets/images/sec04/img-3.png",
    listOfValues: [
      "Take 2-3 weeks off work, but it can change from patient to patient.",
      "Avoid tiresome activities for at least two weeks.",
      "Refrain from strenuous exercises and avoid stretching for up to 6 weeks after the surgery.",
      "Your surgeon will follow your recovery and will tell you when you are ready. Generally, it takes 6-8 weeks.",
      "Your surgeon will provide customized recovery plan based on your needs and your level of healing."
    ]
  },
  {
    title: 'Guidance & Support',
    image: "assets/images/sec04/img-4.png",
    listOfValues: [
      "A nurse will visit you in your hotel every day during the first week after the surgery.",
      "We will expect you to be in our clinic for your post-op examination 1 week after the surgery, before you leave İstanbul.",
      "We will still follow your recovery process while you are away.",
      "Away surgery, will provide you with complete support and inform you about everything you need to know during your recovery. ",
      "We will be with you from your consultation to the very end of your recovery."
    ]
  }
]


export function SectionO4(props) {

  const windowSize = useWindowSize();
  const isSmallScreen = windowSize.innerWidth < 991;

  return (
    <div className="section-04">
      {/* <h1>
        isMobile: {isSmallScreen && "true"}
      </h1> */}

      <div className="block-1">
        <h1 className="text1">What To Expect During A Recovery?</h1>
        <h2 className="text2">Clineca with you from your consultation to the very end of your recovery.</h2>
      </div>
      {listOfElements?.map((e, index) => (
        <div className="block-2">
          <img className="image" style={!isSmallScreen && { order: (index % 2 == 0) ? 1 : 0 } || {}} src={e.image} />
          <div className="content">
            <h1 className="heading">{e.title}</h1>
            <ul className="ul">
              {e?.listOfValues?.map(e => <ForeachElement text={e} />)}
            </ul>
          </div>
        </div>
      ))}

    </div>
  );
}

