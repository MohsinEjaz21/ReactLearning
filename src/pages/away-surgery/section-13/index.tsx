import useWindowSize from '@rehooks/window-size';

const data = {
  image: "assets/images/sec13/img_2.png",
  imageMobile: "assets/images/sec13/img_1.png",
  title: 'Looking Beautiful isn’t Luck, It’s a Decision',
  subTitle: 'Rhinoplasty (nose)',
  description: <>
    A rhinoplasty procedure reshapes, corrects or <span className="color-primary">reconstructs the nose</span> to achieve more aesthetically pleasing results and to
    <span className="color-primary"> enhance ones' physical appearance.</span> <br /> <span className="spacer" /> Not the right nose? <span className="color-primary">Lets fix it.</span>
  </>,
  btnText: 'Book Online Consultation',

}

export function Section13(props) {
  const windowSize = useWindowSize();
  const isSmall = windowSize.innerWidth < 1144;

  return (
    <div className="section-13">
      <div className="block1">
        <h2 className="title">{data.title}</h2>
        <h1 className="subtitle">{data.subTitle}</h1>
        <p className="description">{data.description}</p>
        <button className="btn">{data.btnText}</button>
      </div>
      <div className="block2">
        {isSmall && <img className="image" src={data.imageMobile} />}
        {!isSmall && <img className="image" src={data.image} />}
      </div>
    </div>
  );
}

