import '../styles/PromoBlock.css'


function PromoBlock() {
    return (
      <section className='container'>
        <div className='promo-block'>
          <div className='promo-back'>
            <img src='/images/Promo/flower_stroke.svg' className='promo-flower-stroke' alt='' />
            <img src='/images/Promo/flower.png' className='promo-flower' alt='' />
            <img src='/images/Promo/flower_stroke-mobile.svg' className='promo-flower-stroke-mobile' alt='' />
            <img src='/images/Promo/flower-mobile.png' className='promo-flower-mobile' alt='' />
          </div>
          <div className='promo-left'>
            <img src='/images/Promo/waves.svg' className='promo-waves' alt='' />
            <p className='fhclub'>
              Family & Health Club
            </p>
            <h1>
              Mriya<br />
              Resort
            </h1>
            <p className='promo-text'>
              Российский курорт для всей семьи на берегу черного моря
            </p>
            <div className='promo-btns'>
              <button href='#' className='promo-btn-find'>Найти номер</button>
              <button href='#' className='promo-btn-3d'>3D тур</button>
            </div>
            <div className='promo-vector' />
            <br />
            <button href='#' className='promo-btn-arrow'>
              <img src='/images/Promo/arrow.svg' className='promo-arrow' alt='' />
            </button>
          </div>
          <div className='promo-right'>
            <div className='promo-social-buttons'>
              <a href='#' className='promo-social-btn'>
                <span className='promo-social-pad'>
                  <img src='/images/Promo/facebook.svg' className='promo-social-logo' alt='' />
                </span>
              </a>
              <a href='#' className='promo-social-btn'>
                <span className='promo-social-pad'>
                  <img src='/images/Promo/twitter.svg' className='promo-social-logo' alt='' />
                </span>
              </a>
              <a href='#' className='promo-social-btn'>
                <span className='promo-social-pad'>
                  <img src='/images/Promo/instagram.svg' className='promo-social-logo' alt='' />
                </span>  
              </a>
            </div>
            <div className='promo-weather'>
              <img src='/images/Promo/intersect.svg' className='promo-intersect' />
              <img src='/images/Promo/intersect.png' className='promo-intersect-dark' />
              <div className='promo-weather-text'>
                <div className='promo-weather-column-left'>
                  <img src='/images/Promo/Cloudly.svg' className='promo-cloudly' alt='' />
                  <img src='/images/Promo/pin.png' className='promo-pin' alt='' />
                </div>
                <div className='promo-weather-column-right'>
                  <div className='promo-weather-row'>
                    <div className='promo-weather-degrees'>
                      27°
                    </div>
                  </div>
                  <div className='promo-weather-row'>
                    <div className='promo-weather-weather'>
                      Облачно
                    </div>
                  </div>
                  <div className='promo-weather-row'>                    
                    <div className='promo-weather-geo'>
                      Ялта, Россия
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  export default PromoBlock;