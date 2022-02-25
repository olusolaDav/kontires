import './title.css'

export const Title = ({heading, subheading}) => {
  return (
    <div className='title'>
        <h1 className='heading'> {heading} </h1>
        <p className='animate'> {subheading}</p>
    </div>
  )
}
