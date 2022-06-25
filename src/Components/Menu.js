import '../styles/Menu.css'

function Menu() {
      return(
            <nav className='side-menu'>
                  <input type='checkbox' id='menu-toggle' hidden />
                  <label for='menu-toggle' class='menu-toggle' onclick />
                  <div className='side-header'>
                        <img src='/images/Side/logo.svg' className='side-logo'/>
                        <div className='side-header-menu'>
                              <a href='#'>О комплексе</a>
                              <a href='#'>Блог</a>
                              <a href='#'>FAQ</a>
                              <a href='#'>Контакты</a>
                        </div>
                        <div className='side-login'>
                              <img src='/images/Side/key.svg' className='side-key'/>    
                              <a href='#' className='side-login'>ВХОД</a>
                        </div>
                  </div>
                  <div className='side-menu-content'>
                        <div className='side-social'>
                              <div className='side-line' />
                              <div className='side-social-buttons'>
                                    <button href='#' className='side-social-btn'>
                                          <img src='/images/Side/facebook.svg' className='side-social-logo' />
                                    </button>
                                    <button href='#' className='side-social-btn'>
                                          <img src='/images/Side/twitter.svg' className='side-social-logo' />
                                    </button>
                                    <button href='#' className='side-social-btn'>
                                          <img src='/images/Side/instagram.svg' className='side-social-logo' />
                                    </button>
                              </div>
                        </div>
                        <div className='side-category'>

                        </div>
                        <div className='side-banner'>

                        </div>
                  </div>
                  <div className='side-footer'>
                        <a href='mail:info@mriyaresort.com'>info@mriyaresort.com</a>
                  </div>
                  <button className='side-menu-pad' onClick={toggleMenu()}>
                        <img src='/images/Side/Btn/open.png' className='side-menu-btn'/>
                  </button>
            </nav>
      );
}

export default Menu;