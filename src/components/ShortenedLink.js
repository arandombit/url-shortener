const ShortenedLink = props => (
  <div className='shortened-link'>
    <span className='shortened-url' onClick={props.onClick}>
      { props.shortURL }
    </span>
    <button className={props.copySuccess ? 'success' : ''} onClick={props.onClick}>
      { props.copySuccess ? 'Copied!' : 'Copy' }
    </button>
  </div>
)

export default ShortenedLink
