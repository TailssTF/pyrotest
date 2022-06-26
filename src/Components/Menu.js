import '../styles/Menu.css'
import MenuBanner from './MenuBanner.js';

function Menu() {
      return(
            <div>
                  <input type='checkbox' id='menu-toggle' hidden />
                  <nav className='side-menu'>
                        <label for='menu-toggle' class='menu-toggle' onclick />
                        <div className='side-header'>
                              <img src='/images/Side/logo.svg' className='side-logo' alt=''/>
                              <div className='side-header-menu'>
                                    <a href='#'>О комплексе</a>
                                    <a href='#'>Блог</a>
                                    <a href='#'>FAQ</a>
                                    <a href='#'>Контакты</a>
                              </div>
                              <div className='side-login'>
                                    <img src='/images/Side/key.svg' className='side-key' alt=''/>    
                                    <a href='#' className='side-login'>ВХОД</a>
                              </div>
                        </div>
                        <div className='side-menu-box'>
                              <div className='side-social'>
                                    <div className='side-line' />
                                    <div className='side-social-buttons'>
                                          <button href='#' className='side-social-btn'>
                                                <img src='/images/Side/facebook.svg' className='side-social-logo' alt='' />
                                          </button>
                                          <button href='#' className='side-social-btn'>
                                                <img src='/images/Side/twitter.svg' className='side-social-logo' alt='' />
                                          </button>
                                          <button href='#' className='side-social-btn'>
                                                <img src='/images/Side/instagram.svg' className='side-social-logo' alt='' />
                                          </button>
                                    </div>
                              </div>
                              <div className='side-menu-main'>
                                    <div className='side-menu-body'>
                                          <div className='side-category'>
                                                <div className='side-category-left'>
                                                      <ul className='side-category-ul'>
                                                            <li className='side-category-item'>Размещение</li>
                                                            <li className='side-category-item'>Медицина
                                                                  <ul className='side-category-subul'>
                                                                        <li className='side-category-subitem'>Клиника персонализированной медицины</li>
                                                                        <li className='side-category-subitem'>Медицинский центр</li>
                                                                  </ul>      
                                                            </li>
                                                            <li className='side-category-item'>Мероприятия
                                                                  <ul className='side-category-subul'>
                                                                        <li className='side-category-subitem'>Проверка</li>
                                                                        <li className='side-category-subitem'>Тестовое</li>
                                                                  </ul>
                                                            </li>
                                                            <li className='side-category-item'>Красота и восстановление</li>
                                                            <li className='side-category-item'>Бары и рестораны</li>
                                                            <li className='side-category-item'>Развлечения</li>
                                                            <li className='side-category-item'>Спорт</li>
                                                            <li className='side-category-item'>Детям</li>
                                                            <li className='side-category-item'>Транспорт</li>
                                                      </ul>
                                                </div>
                                                <div className='side-category-right'>
                                                      <div className='side-category-right-text'>
                                                            Международные стандарты лечения и современные методики в сочетании с высококлассным сервисом и проживанием в одном из лучших семейных курортов мира Mriya Resort & SPA 5* 
                                                      </div>      
                                                </div>
                                          </div>
                                          <div className='side-banner'>
                                                <MenuBanner />
                                          </div>
                                    </div>
                                    <div className='side-footer'>
                                          <a href='mail:info@mriyaresort.com' className='side-mail'>info@mriyaresort.com</a>
                                    </div>
                              </div>      
                        </div>

                  </nav>
            </div>
      );
}

export default Menu;