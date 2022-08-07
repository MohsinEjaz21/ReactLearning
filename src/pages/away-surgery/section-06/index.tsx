import useWindowSize from '@rehooks/window-size';
import './section-06.scss';

const listOfElements = [
  {
    title: 'The First Week',
    image: "../../../../assets/images/sec06/img_1.png",
    text: `Like all kinds of surgery, rhinoplasty requires anesthesia.
          \nDepending on the particular case, it can be performed using general anesthesia.`
  },
  {
    title: 'Surgery',
    image: "../../../../assets/images/sec06/img_2.png",
    text: `The details of the surgery depend on the patient’s needs and the surgeon’s approach. During the surgery, nasal bones, nasal cartilage, and the skin covering the nose can be worked on.
          \nSometimes it may be necessary to remove parts of nasal tissues or add tissue inside the nose. If tissue addition is necessary, the required tissue may be taken from deeper parts of the nose, or other parts of the body.
          \nPatient’s septum may also be corrected during the surgery to improve breathing. There are 2 main approaches to rhinoplasty: open method and the closed method.`,

  },
  {
    title: 'Open And Closed Rhinoplasty',
    image: "../../../../assets/images/sec06/img_3.png",
    text: `Our surgeons, while being highly skilled in both open and closed rhinoplasty, have specialized in the closed method which leaves no visible scars.
          \nIn this method, whole surgery is done inside the nostrils. In some cases, using the open method (in which an incision between the nostrils is made) may be necessary.
    `,

  }
]


export function SectionO6(props) {

  const windowSize = useWindowSize();
  const isSmallScreen = windowSize.innerWidth < 991;


  return (
    <div className="section-06">
      <div className="block-1">
        <h1 className="text1">How is a Rhinoplasty Done?</h1>
        <h2 className="text2">Complex surgery customized according to needs and wishes of the patient.</h2>
      </div>
      {listOfElements?.map((e, index) => (
        <div className="block-2">
          <img className="image" style={!isSmallScreen && { order: (index % 2 == 0) ? 0 : 1 } || {}} src={e.image} />
          <div className="content">
            <h1 className="heading">{e.title}</h1>
            <h2 className="description pre-whitespace" >{e.text}</h2>
          </div>
        </div>
      ))}

    </div>
  );
}

