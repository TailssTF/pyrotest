import '../styles/ChooseBlock.css'
import ChooseTabs from './ChooseTabs'


function ChooseBlock() {
    return (
      <section className='container'>
        <div className='choose-block'>
          <div className='cb-text'>Выберите свой отдых</div>
          <form className='cb-form'>
            <input type='text' className='cb-form-what' placeholder='Семейный отдых' />
            <input type='text' className='cb-form-when'  placeholder='пт, 8 мая — вс, 17 мая'/>
            <input type='text' className='cb-form-who' placeholder='2 взрослых  •  без детей  •  1 номер' />
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