import { FunctionComponent } from "react";
import styles from "./gallery-overview.module.css";
const GalleryOverview: FunctionComponent = () => {
  return (
    <div className={styles.galleryOverview}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.content}>
            <div className={styles.listItems}>
              <b className={styles.gallerySection}>Gallery Section</b>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className={styles.description}>
                <p className={styles.etiamSodalesAc}>
                  Etiam sodales ac felis id interdum
                </p>
                <p className={styles.etiamSodalesAc}>&nbsp;</p>
                <p className={styles.etiamSodalesAc}>
                  Etiam sodales ac felis id interdum
                </p>
                <p className={styles.etiamSodalesAc}>&nbsp;</p>
                <p className={styles.etiamSodalesAc}>
                  Etiam sodales ac felis id interdum
                </p>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.bookADemo}>BOOK A DEMO</div>
            </div>
          </div>
        </div>
        <div className={styles.smallColumns}>
          <div className={styles.column1}>
            <div className={styles.imageWrapper}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            </div>
            <div className={styles.imageWrapper}>
              <img className={styles.imageIcon1} alt="" src="/image1@2x.png" />
            </div>
            <div className={styles.imageWrapper}>
              <img className={styles.imageIcon2} alt="" src="/image2@2x.png" />
            </div>
            <div className={styles.imageWrapper}>
              <img className={styles.imageIcon3} alt="" src="/image3@2x.png" />
            </div>
          </div>
          <div className={styles.column1}>
            <div className={styles.imageWrapper}>
              <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
            </div>
            <div className={styles.imageWrapper5}>
              <img className={styles.imageIcon5} alt="" src="/image5@2x.png" />
            </div>
            <div className={styles.imageWrapper}>
              <img className={styles.imageIcon6} alt="" src="/image6@2x.png" />
            </div>
            <div className={styles.imageWrapper}>
              <img className={styles.imageIcon7} alt="" src="/image7@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryOverview;
