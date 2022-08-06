/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import cn from 'classnames';
import styled from 'styled-components';
import styles from './section-03.module.scss';

export function SectionO3(props) {
  const image: any = {
    '--src': `url(https\:\/\/storage\.googleapis\.com\/pxcode-pro\/62ed0331a8ac320014e22cf8\%2Fassets\%2F9fd18e66ae19bf04e2926efc5296a7e7\.png\?GoogleAccessId\=gcs-app\%40pxcode\.iam\.gserviceaccount\.com\&Expires\=2290420035\&Signature\=P\%2F2N6BTq\%2BPQwTkgAWtZE1a0OFjQmkK3w8YeYPC\%2BzKE4uObulj2uPS9a7ghjlcD0QZ21GYeeEpFvYNwWsuWMv7RZW9TvJL6IAre8NHVMOYwW4B5kH\%2F7KnZ\%2Fpc1HRYyEPfvZgdHBoIZ6Cbedkbj5IARhXk8zCGRcL\%2BwMl3oyn89Z2LJ8gH7HMQLSbkhXpIDMBSnGxn1MPsdDPwk3ksDzt\%2BCfxm1bKmJpUqIjxhoC3GgSOfYwSuX66vnc8Kdhz39BoP0sCbdQe1W8\%2BYrGGLEvM2hIpVIS2VOdlw2tKBk\%2BskJcoNc97\%2BQnVv3xb1zqv8nKXnEfwgKPsFBIRPX5Iuplfs1A\%3D\%3D)`,
  }

  return (
    <Section>
      <div className={`${cn(styles.block, styles.block_layout, styles.full_bleed)}`}>

        <div className={cn(styles.block2, styles.block2_layout)}>
          <h2 className={cn(styles.medium_title, styles.medium_title_layout)}>{'Clineca Consultaion'}</h2>
          <h1 className={cn(styles.hero_title_box, styles.hero_title_box_layout)}>
            <pre className={styles.hero_title}>
              {'We’re open and welcoming  patients! Let us make an appointment for your online consultation.'}
            </pre>
          </h1>

          <div className={cn(styles.block3, styles.block3_layout)}>
            <h5 className={cn(styles.highlights, styles.highlights_layout)}>{'Book Online Consultation'}</h5>
          </div>
        </div>

        <div className={cn(styles.group, styles.group_layout)}>
          <div className={cn(styles.box1, styles.box1_layout)} />
          <div
            style={image}
            className={cn(styles.image, styles.image_layout)}
          />
          <img
            src={'assets/images/img20.svg'}
            className={cn(styles.block4, styles.block4_layout)}
          />
        </div>
      </div>
    </Section>

  );
}

const Section = styled.div`
  display: flex;
  justify-content: center;
`