import '../styles/Menu.css'

function Menu() {
      return(
            <div>
                  <input type='checkbox' id='menu-toggle' hidden />
                  <nav className='side-menu'>
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
                        <div className='side-menu-box'>
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
                              <div className='side-menu-main'>
                                    <div className='side-menu-body'>
                                          <div className='side-category'>

                                          </div>
                                          <div className='side-banner'>
                                                
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