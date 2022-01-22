import React, { FC } from 'react';
import styles from './styles.module.scss';
import teamPhotoTim from '../assets/images/team/teamPhotoTim.jpg';
import { TwitterIcon } from '../../../icons/TwitterIcon';
import teamPhotoVedamir from '../assets/images/team/teamPhotoVedamire.jpg';
import { GitHubIcon } from '../../../icons/GitHubIcon';
import teamPhotoVlad from '../assets/images/team/teamPhotoVlad.jpg';
import teamPhotoPhil from '../assets/images/team/teamPhotoPhil.jpg';
import teamPhotoViktor from '../assets/images/team/teamPhotoViktor.jpg';
import teamPhotoRoman from '../assets/images/team/teamPhotoRoman.jpg';
import teamPhotoAdrian from '../assets/images/team/teamPhotoAdrian.jpg';
import teamPhotoEgor from '../assets/images/team/teamPhotoEgor.jpg';
import teamPhotoVlad2 from '../assets/images/team/teamPhotoVlad2.jpg';
import { TEAM_SECTION_ID } from '../constants';
import { BehanceIcon } from '../../../icons';

const MEMBERS = [
  {
    name: 'Tim',
    photoUrl: teamPhotoTim,
    position: <span>Founder</span>,
    socialLink: (
      <a
        href="https://twitter.com/timsamoylov"
        rel="noreferrer"
        target="_blank"
      >
        <TwitterIcon width={24} />
      </a>
    ),
  },
  {
    name: 'Vedamir',
    photoUrl: teamPhotoVedamir,
    position: (
      <span>
        Co-founder, <br /> DeFi Magician
      </span>
    ),
    socialLink: (
      <a href="https://github.com/vedamire" rel="noreferrer" target="_blank">
        <GitHubIcon width={24} />
      </a>
    ),
  },
  {
    name: 'Vlad',
    photoUrl: teamPhotoVlad,
    position: (
      <span>
        Co-founder, <br /> UX Lead
      </span>
    ),
    socialLink: (
      <a href="https://github.com/sablevsky" rel="noreferrer" target="_blank">
        <GitHubIcon width={24} />
      </a>
    ),
  },
  {
    name: 'Phil',
    photoUrl: teamPhotoPhil,
    position: (
      <span>
        Operations, <br /> Community
      </span>
    ),
    socialLink: (
      <a href="https://twitter.com/rawrxbt" rel="noreferrer" target="_blank">
        <TwitterIcon width={24} />
      </a>
    ),
  },
  {
    name: 'Adrian',
    photoUrl: teamPhotoAdrian,
    position: <span>Community</span>,
    socialLink: (
      <a href="https://twitter.com/0x1dad" rel="noreferrer" target="_blank">
        <TwitterIcon width={24} />
      </a>
    ),
  },
  {
    name: 'Roman',
    photoUrl: teamPhotoRoman,
    position: <span>Developer</span>,
    socialLink: (
      <a href="https://github.com/Piterom911" rel="noreferrer" target="_blank">
        <GitHubIcon width={24} />
      </a>
    ),
  },
  {
    name: 'Viktor',
    photoUrl: teamPhotoViktor,
    position: <span>Developer</span>,
    socialLink: (
      <a href="https://github.com/valpaq" rel="noreferrer" target="_blank">
        <GitHubIcon width={24} />
      </a>
    ),
  },
  {
    name: 'Vlad',
    photoUrl: teamPhotoVlad2,
    position: <span>Developer</span>,
    socialLink: (
      <a href="https://github.com/ezekiel9218" rel="noreferrer" target="_blank">
        <GitHubIcon width={24} />
      </a>
    ),
  },
  {
    name: 'Egor',
    photoUrl: teamPhotoEgor,
    position: <span>UX/UI designer</span>,
    socialLink: (
      <a
        href="https://www.behance.net/egor_russak"
        rel="noreferrer"
        target="_blank"
      >
        <BehanceIcon width={24} />
      </a>
    ),
  },
];

export const SectionTeam: FC<{ navRef: { current: HTMLParagraphElement } }> = ({
  navRef,
}) => {
  return (
    <section id={TEAM_SECTION_ID} className={`section ${styles.team}`}>
      <p className="itemForIntersectionMenu" id={TEAM_SECTION_ID} ref={navRef}>
        Team
      </p>
      <div className={`container ${styles.teamContainer}`}>
        <h2 className={styles.teamTitle}>Meet the team</h2>
        <ul className={styles.teamList}>
          {MEMBERS.map(({ name, photoUrl, position, socialLink }, idx) => (
            <li key={idx} className={styles.teamItem}>
              <img src={photoUrl} alt={name} className={styles.teamPhoto} />
              <div className={styles.teamInfo}>
                <p className={styles.teamName}>{name}</p>
                <div className={styles.teamPosition}>
                  {position}
                  {socialLink}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
