import '../styles/Header.css';

function Header(){
    return(
        <header className='header'>
            <div className='header-menu'>
                <a href='#1'>О комплексе</a>
                <a href='#2'>Блог</a>
                <a href='#3'>FAQ</a>
                <a href='#4'>Контакты</a>
            </div>
            <div className='logo-wrapper'>
                <img src='/images/Header/logo.svg' className='logo' alt=''/>
                <img src='/images/Header/stars.svg' className='stars' alt=''/>
            </div>
            <div className='header-right'>
                <div className='header-lang'>
                    <a href='#' className='lang'>RU</a>
                    <a href='#' className='lang-deselected'>ENG</a>
                </div>
                <div className='login-phone'>
                    <img src='/images/Header/key.svg' className='key' alt=''/>    
                    <a href='#' className='login'>ВХОД</a>
                    <a href='tel:88005006847' className='tel'>8&nbsp;800&nbsp;500&nbsp;6847</a>
                </div>
            </div>
        </header>
    );
}
export default Header;