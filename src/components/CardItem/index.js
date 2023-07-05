import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  const cardStyling = `${className} card-styles`
  console.log(cardStyling)
  return (
    <li className={cardStyling}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="image-align">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default Card
