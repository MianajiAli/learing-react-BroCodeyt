function Student(props) {
    return(
        <>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.isStudent? "yes":"no"}</p>
        </>
    )
}
export default Student