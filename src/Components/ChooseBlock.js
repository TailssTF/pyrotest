import '../styles/ChooseBlock.css'
import ChooseTabs from './ChooseTabs'


function ChooseBlock() {
    return (
      <section className='container'>
        <div className='choose-block'>
          <div className='cb-text'>Выберите свой отдых</div>
          <form className='cb-form'>
            <div className='cb-form-input'>
              <input type='text' className='cb-form-what' placeholder='Семейный отдых' />
            </div>
            <div className='cb-form-input'>
              <input type='text' className='cb-form-when'  placeholder='пт, 8 мая — вс, 17 мая'/>
            </div>
            <div className='cb-form-input'>
              <input type='text' className='cb-form-who' placeholder='2 взрослых  •  без детей  •  1 номер' />
            </div>
            <button type='submit' className='cb-form-submit'>Найти</button>
          </form>
          <div className='choose-slider'>
          <ChooseTabs /> 
          </div>
        </div>
      </section>
    );
  }
  export default ChooseBlock;