const ShortenerForm = props => (
  <form onSubmit={props.onSubmit}>
    <input
      type='text'
      placeholder='Enter URL'
      onChange={props.onChange}
      value={props.value}
    />
    <button>Shorten</button>
  </form>
)

export default ShortenerForm
