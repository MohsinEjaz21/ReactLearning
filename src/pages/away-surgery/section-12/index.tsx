import useWindowSize from '@rehooks/window-size';

const data = {
  block1: [
    { icon: 'icon1', text: 'Face Operation' },
    { icon: '', text: 'Hair Transplants' },
    { icon: '', text: 'Rhinoplasty' },
    { icon: '', text: 'Brow Lift' },
    { icon: '', text: 'Chin Augmentation' },
    { icon: '', text: 'Dimple Surgery' },
    { icon: '', text: 'Eyelid Surgery' },
    { icon: '', text: 'Ear Surgery' },
    { icon: '', text: 'Facelift' },
    { icon: '', text: 'Neck Lift' },
  ]

}

export function Section12(props) {
  const windowSize = useWindowSize();
  const isSmall = windowSize.innerWidth < 991;

  return (
    <div className="section-12">

    </div>
  );
}

