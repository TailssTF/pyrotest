import '../styles/InfoBlock.css';

function InfoBlock() {
    return (
      <section className='container'>
        <div className='info-block'>
          <div className='info-block-bg'>
            <img src='/images/Info/111.png' className='info-bg-left' alt='' />
            <img src='/images/Info/222.png' className='info-bg-right' alt='' />
          </div>
          <img src='/images/Info/waves.svg' className='waves' alt='' />
          <h1>
            Mriya Resort & SPA — 
            <br />
            <span className='text-bold'>больше чем просто отдых</span>
          </h1>
          <img src='/images/Info/vector.svg' className='vector' alt='' />
          <article className='info-text'>
            В окружении необычного природного ландшафта курорт становится по-настоящему уникальным. Это место идеально для тех, кто больше гор любит только море.
          </article>
          <button className='explore-btn' href='#'>О КОМПЛЕКСЕ</button>
        </div>
      </section>
    );
  }
  export default InfoBlock;