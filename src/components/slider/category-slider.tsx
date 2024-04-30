'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './category-slider.module.css';
import ImagePlaceholder from './image-placeholder';

export default function CategorySlider() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: '65px'
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: '30px'
        }
      }
    ]
  };

  return (
    <div className={styles.slider}>
      <div>
        <h2>Inspírate</h2>
        <div className={styles.sliderLinks}>
          <div>
            <a>Estancias</a>
          </div>
          <div>
            <a>Estil</a>
          </div>
          <div>
            <a>Muebles</a>
          </div>
          <div>
            <a>Decoración</a>
          </div>
          <div>
            <a>We are Kave</a>
          </div>
          <div>
            <a>Proyectos</a>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        <div className={styles.imageItem}>
          <ImagePlaceholder />
          <a>We are Kave</a>
        </div>
        <div className={styles.imageItem}>
          <ImagePlaceholder />
          <a>Estancias</a>
        </div>
        <div className={styles.imageItem}>
          <ImagePlaceholder />
          <a>Muebles</a>
        </div>
        <div className={styles.imageItem}>
          <ImagePlaceholder />
          <a>Decoración</a>
        </div>
        <div className={styles.imageItem}>
          <ImagePlaceholder />
          <a>Proyectos</a>
        </div>
        <div className={styles.imageItem}>
          <ImagePlaceholder />
          <a>Estilos</a>
        </div>
      </Slider>
    </div>
  );
}
