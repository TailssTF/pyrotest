import '../styles/PromoBlock.css'


function PromoBlock() {
    return (
      <div className='promo-block'>
        <div className='promo-back'>
          <img src='/images/Promo/flower_stroke.svg' className='promo-flower-stroke' />
          <img src='/images/Promo/flower.png' className='promo-flower' />
        </div>
        <div className='promo-left'>
          <img src='/images/Promo/waves.svg' className='promo-waves'/>
          <p className='fhclub'>
            Family & Health Club
          </p>
          <h1>
            Mriya<br />
            Resort
          </h1>
          <p className='promo-text'>
            Российский курорт для всей семьи <br />
            на берегу черного моря
          </p>
          <div className='promo-btns'>
            <button href='#' className='promo-btn-find'>Найти номер</button>
            <button href='#' className='promo-btn-3d'>3D тур</button>
          </div>
          <div className='promo-vector' />
          <br />
          <button href='#' className='promo-btn-arrow'>
            <img src='/images/Promo/arrow.svg' className='promo-arrow' />
          </button>
        </div>
        <div className='promo-right'>
          <div className='promo-social-buttons'>
            <button href='#' className='promo-social-btn'>
              <img src='/images/Promo/facebook.svg' className='promo-social-logo' />
            </button>
            <button href='#' className='promo-social-btn'>
              <img src='/images/Promo/twitter.svg' className='promo-social-logo' />
            </button>
            <button href='#' className='promo-social-btn'>
              <img src='/images/Promo/instagram.svg' className='promo-social-logo' />
            </button>
          </div>
          <div className='promo-weather'>
            <table>
              <tr>
                <td>
                  <img src='/images/Promo/Cloudly.svg' className='promo-cloudly' />
                </td>
                <td>  
                  <h2>27°</h2>
                </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    Облачно
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src='/images/Promo/pin.svg' className='promo-pin' />
                  </td>
                  <td>  
                    Ялта, Россия
                  </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
  export default PromoBlock;