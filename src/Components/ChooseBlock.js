import '../styles/ChooseBlock.css'


function ChooseBlock() {
    return (
      <section className='container'>
        <div className='choose-block'>
          <div className='cb-text'>Выберите свой отдых</div>
          <form className='cb-form'>
            <select className='cb-form-what' type='text'>
              <option value='Семейный отдых'>Семейный отдых</option>
            </select>
            <input type='date' className='cb-form-when' />
          </form>
        </div>
      </section>
    );
  }
  export default ChooseBlock;