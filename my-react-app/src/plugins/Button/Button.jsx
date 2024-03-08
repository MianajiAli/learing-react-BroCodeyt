import style from './Button.module.css'
function Button() {
    const handleClick = (name) => console.log(`${name} stop clicking`);
    
    return (
        <button onClick={() =>handleClick("ali")} className={style.button}>test</button>
    )
}
export default Button