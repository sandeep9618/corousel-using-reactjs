import {Image, PlanetName, Description, DivContainer} from './styledComponents'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, description, imageUrl} = planetDetails

  return (
    <DivContainer>
      <Image src={imageUrl} alt={`planet ${name}`} />
      <PlanetName>{name}</PlanetName>
      <Description>{description}</Description>
    </DivContainer>
  )
}
export default PlanetItem
