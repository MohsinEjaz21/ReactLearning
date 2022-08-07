import useWindowSize from '@rehooks/window-size';
import './section-11.scss';

const data = {
  text1: 'What to Do After the Rhinoplasty?',
  text2: 'Clineca will provide you with all the support and guidance you need.',
  text3: <> Using rhinoplasty, the size and the shape of the nose may be changed. It’s also possible to improve breathing.
    <div className="spacer" />The motivation may be to treat a structural problem caused by an injury, to correct a birth defect…
    <div className="spacer" />Perhaps you may just want to have a more aesthetical appearance.</>,
  image: "../../../../assets/images/sec11/img_1.png",
  imageMobile: "../../../../assets/images/sec11/img_2.png",

}

export function Section11(props) {
  const windowSize = useWindowSize();
  const isSmall = windowSize.innerWidth < 991;

  return (
    <div className="section-11">
      <div className="block-1">
        <div className="text1">{data.text1}</div>
        <div className="text2">{data.text2}</div>
        <div className="text3">{data.text3}</div>
        <button className="btn">Learn More</button>
      </div>
      <div className="block-2">
        {isSmall && <img className="image" src={data.imageMobile} />}
        {!isSmall && <img className="image" src={data.image} />}
      </div>
    </div>
  );
}

