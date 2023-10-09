
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div>
        <p className="uppercase text-orange-500">{subHeading}</p>
        <h3 className="text-5xl font-bold">{heading}</h3>
    </div>
  )
}

export default SectionTitle