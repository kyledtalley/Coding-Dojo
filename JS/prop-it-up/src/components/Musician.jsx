const Musician = (props) => {


    const {name, genre, band} = props


  return (
    <div classname = "musician">
        <label htmlFor ="name" >Name</label>
        <p id="name">{name}</p>

        <label htmlFor="genre">Genre</label>
        <p id="genre">{genre}</p>

        <label htmlFor="band">Band</label>
        <p id="band">{band}</p>
    </div>
  )
}

export default Musician
