import '../styles/Header.css';

function Header(){
    return(
        <header className='header'>
            {/*
            <div className='side-menu-btn'>
                <img src='/images/Header/open.svg' className='menu-open'/>
            </div>
            */}
            <div className='header-menu'>
                <a href='#'>О комплексе</a>
                <a href='#'>Блог</a>
                <a href='#'>FAQ</a>
                <a href='#'>Контакты</a>
            </div>
            <div className='logo-wrapper'>
                <img src='/images/Header/logo.svg' className='logo'/>
                <img src='/images/Header/stars.svg' className='stars'/>
            </div>
            <div className='header-right'>
                <div className='header-lang'>
                    <a href='#' className='lang'>RU</a>
                    <a href='#' className='lang'>ENG</a>
                </div>
                <div className='login-phone'>
                    <img src='/images/Header/key.svg' className='key'/>    
                    <a href='#' className='login'>ВХОД</a>
                    <a href='tel:88005006847' className='tel'>8&nbsp;800&nbsp;500&nbsp;6847</a>
                </div>
            </div>
        </header>
    );
}
export default Header;