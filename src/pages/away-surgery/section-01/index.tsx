
function Item({ title, description, btnText, image }) {
  const assets = '../../../assets'
  return (
    <div className="item">
      <img className="image" src={`${assets}/${image}`} alt="" />
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      {btnText && <button className="button">{btnText}</button>}
    </div>
  );
}

const items = [
  {
    image: "images/image1.svg",
    title: "Fully Equipped Hospitals",
    description: "Surgeries are performed in prestigious fully equipped hospitals in which doctors from all specialties are present.",
    btnText: "More Info"
  },
  {
    image: "images/image2.svg",
    title: "Free Consultation",
    description: "We provide free online consultation with our surgeons through video chat.",
    btnText: "More Info"
  },
  {
    image: "images/image2.svg",
    title: "Ensured Performance",
    description: "Our surgeons perform a limited number of surgeries each week to ensure the best results.",
    btnText: ""
  },
  {
    image: "images/image2.svg",
    title: "7/24 Support",
    description: "You can contact our agents 7 days 24 hours for your questions or support.",
    btnText: ""
  },
  {
    image: "images/image2.svg",
    title: "5-Star Hotels",
    description: "We provide special discounts in luxurious hotels near the hospital. Considering your comfort, this is very important to us.",
    btnText: "More Info"
  },
  {
    image: "images/image2.svg",
    title: "VIP Transportation",
    description: "We provide, via VIP vehicles, airport transfer and transportation between your hotel and the hospital before and after the surgery.",
    btnText: "More Info"
  },
  {
    image: "images/image2.svg",
    title: "Visits by Nurses",
    description: "A nurse will visit you every day during your hotel resting to examine you and provide medical care.",
    btnText: ""
  },
  {
    image: "images/image2.svg",
    title: "No Hidden Costs",
    description: "The price includes fees of the surgeon and the anesthesiologist, operating room expenses, anesthesia, hospitalization, standard tests, medications and medical visits by a nurse.",
    btnText: ""
  },
  {
    image: "images/image2.svg",
    title: "All Inclusive",
    description: "The price includes hotel accommodation (including breakfast), airport transfer, transportation between hotel and hospital before and after the surgery.",
    btnText: "More Info"
  },
  {
    image: "images/image2.svg",
    title: "All Inclusive",
    description: "Interpreter service, BBL pillow, neck pillow (rhinoplasty), eye mask (rhinoplasty), voltage converter, and others that will enhance your comfort and satisfaction.",
    btnText: ""
  },
  {
    image: "images/image2.svg",
    title: "Why Turkey?",
    description: "Turkey is a leading player in medical tourism, now. And İstanbul is the plastic surgery capital of Turkey. İstanbul is also an extremely beautiful touristic city.",
    btnText: "More Info"
  }
];

export function SectionO1(props) {
  return (
    <section className="section-01">
      <div className="container">
        <div className="left-section">
          <h2 className="h-01">
            Why Clineca?.
          </h2>
          <h1 className="h-02">
            From beginning to end, we inform you, guide you, serve you, and help you.
          </h1>
        </div>
        <div className="right-section">
          <div className="item-grid">
            {items.map((item, index) => <Item key={index} {...item} />)}
          </div>
        </div>
      </div>
    </section >
  );
}

