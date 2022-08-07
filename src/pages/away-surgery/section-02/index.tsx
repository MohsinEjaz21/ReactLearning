
import './section-02.scss';



function Item({ title, description, index }) {
  return (
    <div className="item">
      <div className="item-left">
        <h3 className="title1 heading-small color-primary">{index}</h3>
        <div className="separator color-primary"></div>
      </div>
      <div className="item-right">
        <h3 className="title2 heading-small">
          {title}
        </h3>
        <p className="description">
          {description}
        </p>
      </div>
    </div>
  );
}

const ItemsData = [
  {
    index: '01',
    title: 'Knowing Each Other',
    description: 'Shortly after you fill the form, one of our agents will contact you. They will listen to you, ask you questions, and answer yours. They will inform you about the whole experience, in detail. If you want to go further, they will arrange an online consultation for you.',
  }, {
    index: '02',
    title: 'Online Consultation',
    description: 'You will have an online consultation with your surgeon through video chat. They will perform an online examination, listen to you about your wishes, and will provide you with in-depth information. They will help you to choose what the best approach to your case is.',
  },
  {
    index: '03',
    title: 'Planning',
    description: "We'll plan your whole journey, including the date of your surgery and where you'll stay at while you’re in Istanbul. We'll inform you about everything you need to know from what to have in your suitcase to what to do before your procedure.",
  },
  {
    index: '04',
    title: 'Landing',
    description: "Our VIP transportation vehicle will be ready at the airport before you land. Driver will be waiting for you. We'll drive you the hospital. At the hospital, we will perform required blood tests and the COVID test. Then, we will drive you your hotel.",
  },
  {
    index: '05',
    title: 'Examination & Surgery',
    description: 'The next morning, we will take you from your hotel and drive you the hospital. Your surgeon will examine you and inform you about the procedure. On the same day, you will have the surgery. You will stay at the hospital 1-2 day(s), depending on the procedure.',
  }
]


export function SectionO2(props) {
  return (
    <div className="section-02">
      <div className="container">
        <h3 className="title heading-small color-primary"> Step by Step Experience for International Patients</h3>
        <h2 className="sub-title heading-medium">Clineca believes that everything should be correct, detailed and satisfying.</h2>
        <div className="sub-container">
          {ItemsData.map(
            (item, index) => (<Item key={index} {...item} index={index + 1} />)
          )}
        </div>
      </div>
    </div>
  );
}