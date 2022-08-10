



function Item({ title, description, index }) {
  return (
    <div className="item">
      <h3 className="div1 index">{index}</h3>
      <div className="div2 separator"></div>
      <div className="div3 title">{title}</div>
      <div className="div4 description">{description}</div>
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
  },
  {
    index: '06',
    title: 'Resting & Recovering',
    description: 'After your stay at the hospital, we will drive you your hotel. You will rest and recover at your hotel room during the following week. A nurse will visit you every day to inform you, to examine, and to provide medical care.',
  },
  {
    index: '07',
    title: 'Entertainment',
    description: 'We will gladly and proudly show you around our beautiful city. We will be more than happy to provide you with professional guidance in historical sightseeing. You can also learn from us where you can find anything from shopping to entertainment.',
  },
  {
    index: '08',
    title: 'Follow-Up & Leaving',
    description: 'We will drive you for your 1-week follow-up with your surgeon. They will examine you, remove your bandages if required, and inform you about what you should/shouldn’t do during your recovery period, in detail. Then, we will drive you airport.',
  },
  {
    index: '09',
    title: 'Recovery Period',
    description: 'During your recovery, we will be in touch. We will inform you, check on you, and answer your questions. You can reach us 7 days 24 hours. We will expect you to send photos periodically to follow your recovery period.',
  },

]


export function SectionO2(props) {
  return (
    <div className="section-02">
      <h3 className="text1"> Step by Step Experience for International Patients</h3>
      <h2 className="text2">Clineca believes that everything should be correct, detailed and satisfying.</h2>
      <div className="content">
        {ItemsData.map(
          (item, index) => (<Item key={index} {...item} />)
        )}
      </div>
    </div>
  );
}