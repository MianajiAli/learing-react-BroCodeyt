function List(props) {
    const category = props.category
    const itemList = props.items 
    
    const listitems = itemList.map(item=> <li key = {item.id}>{item.id}:{item.name}:{item.calories}</li>)
    // fruits.sort((a, b) => a.name.localeCompare(b.name))
    // fruits.sort((a, b) => b.name.localeCompare(a.name))
    // fruits.sort((a, b) => b.calories - a.calories)
    // const lowcClories = fruits.filter(fruit => fruit.calories < 100);
    // const listItem = lowcClories.map(lowcClorie => <li key={lowcClorie.id}>{lowcClorie.name}:<b>{lowcClorie.calories}</b></li>)
    return (<ul>{listitems}</ul>)
}
export default List