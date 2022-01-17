import React, { FC } from 'react';
import styles from './styles.module.scss';
import { FooterSvgLogo } from '../FooterSvgLogo';
import { NavigationLink } from '../../../components/AppNavigation/NavigationLink';
import { URLS } from '../../../constants';
import { HashLink as AnchorLink } from 'react-router-hash-link';
import {
  CONTACT_SECTION_ID,
  ECOSYSTEM_SECTION_ID,
  FAQ_SECTION_ID,
  TEAM_SECTION_ID,
  WHAT_IS_FRAKT_SECTION_ID,
} from '../constants';
import {
  ArrowRightTop,
  DiscordIcon,
  TwitterIcon,
  GitHubIcon,
} from '../../../icons';

export const SectionFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logoWrapper}>
          <FooterSvgLogo />
        </div>
        <div className={styles.footerNavs}>
          <div className={styles.navWrapper}>
            <h5 className={styles.navTitle}>Ecosystem</h5>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <NavigationLink to={URLS.COLLECTION} text="Collection" />
              </li>
              <li className={styles.navItem}>
                <NavigationLink to={URLS.RARITY} text="Rarity hdbk" />
              </li>
              <li className={styles.navItem}>
                <NavigationLink to={URLS.STAKE} text="Staking" />
              </li>
              <li className={styles.navItem}>
                <NavigationLink to={URLS.MARKETPLACE} text="Marketplace" />
              </li>
              <li className={styles.navItem}>
                <a className={styles.link} href={URLS.SANDBOX}>
                  Sandbox
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.link} href={URLS.FRAKTION}>
                  Fraktionalization
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.navWrapper}>
            <h5 className={styles.navTitle}>FRAKT</h5>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <AnchorLink smooth to={`#${WHAT_IS_FRAKT_SECTION_ID}`}>
                  What is FRAKT?
                </AnchorLink>
              </li>
              <li className={styles.navItem}>
                <AnchorLink smooth to={`#${ECOSYSTEM_SECTION_ID}`}>
                  Ecosystem
                </AnchorLink>
              </li>
              <li className={styles.navItem}>
                <AnchorLink smooth to={`#${TEAM_SECTION_ID}`}>
                  Team
                </AnchorLink>
              </li>
              <li className={styles.navItem}>
                <AnchorLink smooth to={`#${FAQ_SECTION_ID}`}>
                  FAQ
                </AnchorLink>
              </li>
              <li className={styles.navItem}>
                <AnchorLink smooth to={`#${CONTACT_SECTION_ID}`}>
                  Contact us
                </AnchorLink>
              </li>
            </ul>
          </div>
          <div className={styles.contacts}>
            <h5 className={styles.navTitle}>Contact us</h5>
            <a href="mailto:hello@frakt.art" className={styles.mailAddress}>
              hello@frakt.art <ArrowRightTop />
            </a>
            <ul className={styles.socialNavs}>
              <li className={styles.socialItem}>
                <a href="/" className={styles.socialLink}>
                  <DiscordIcon />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a href="/" className={styles.socialLink}>
                  <TwitterIcon />
                </a>
              </li>
              <li className={styles.socialItem}>
                <a href="/" className={styles.socialLink}>
                  <GitHubIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
