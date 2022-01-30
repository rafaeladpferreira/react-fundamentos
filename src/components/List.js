import Item from './Item'

function List() {
    return(
      <>
        <h1> Minha lista</h1>
        <ul>
            < Item marca= 'Velar' ano_lancamento={1985}/>
            < Item marca= 'Land Rover' ano_lancamento={1964}/>
            < Item marca= 'HB20' ano_lancamento={2000}/>
            <Item/>
        </ul>
      </>
    )
}

export default List