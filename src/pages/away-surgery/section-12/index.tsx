import useWindowSize from '@rehooks/window-size';

const data = {
  block1: [
    { imageUrl: 'assets/images/sec12/img_1.svg', text: 'Face Operation', className: "type1" },
    { imageUrl: '', text: 'Hair Transplants', className: "type2" },
    { imageUrl: '', text: 'Rhinoplasty', className: "type2 active" },
    { imageUrl: '', text: 'Brow Lift', className: "type2" },
    { imageUrl: '', text: 'Chin Augmentation', className: "type2" },
    { imageUrl: '', text: 'Dimple Surgery', className: "type2" },
    { imageUrl: '', text: 'Eyelid Surgery', className: "type2" },
    { imageUrl: '', text: 'Ear Surgery', className: "type2" },
    { imageUrl: '', text: 'Facelift', className: "type2" },
    { imageUrl: '', text: 'Neck Lift', className: "type2" },
    { imageUrl: 'assets/images/sec12/img_2.svg', text: 'Breast Opearation', className: "type3" },
    { imageUrl: 'assets/images/sec12/img_3.svg', text: 'Body Operation', className: "type3" }
  ],
  block2: {
    title: 'Our Pantients Say',
    subTitle: 'Don’t just take our word for it but let’s listen to our patients.',
  }

}

export function Section12(props) {
  const windowSize = useWindowSize();
  const isSmall = windowSize.innerWidth < 991;

  return (
    <div className="section-12">
      <div className="block1">
        {data.block1.map((item, index) => (
          <div className={`item ${item.className}`} key={index}>
            <img className="img" src={item.imageUrl} alt="" />
            <p className="text">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="block2">
        <h1 className="heading">{data.block2.title}</h1>
        <h2 className="subheading">{data.block2.subTitle}</h2>
      </div>
    </div>
  );
}

