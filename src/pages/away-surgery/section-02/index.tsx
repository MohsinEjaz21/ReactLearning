
import '@styles/scss-global.scss';



function Item() {
  return (
    <div className="item">
      <div className="item-left">
        <h3 className="title heading-small color-primary">01</h3>
        <div className="separator color-primary"></div>
      </div>
      <div className="item-right">
        <h3 className="title heading-small">
          Knowing Each Other
        </h3>
        <p className="description">
          Shortly after you fill the form, one of our agents will contact you. They will listen to you, ask you questions, and answer yours. They will inform you about the whole experience, in detail. If you want to go further, they will arrange an online consultation for you.
        </p>
      </div>
    </div>
  );
}


export default function Index(props) {
  return (
    <div className="section-02">
      <div className="container">
        <h3 className="title heading-small color-primary"> Step by Step Experience for International Patients</h3>
        <h2 className="sub-title heading-medium">Clineca believes that everything should be correct, detailed and satisfying.</h2>
        <div className="sub-container">
          <Item></Item>
          <Item></Item>

        </div>
      </div>
    </div>
  );
}