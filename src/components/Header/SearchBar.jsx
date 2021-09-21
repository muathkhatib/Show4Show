import { useContext } from 'react';
import {Watcher} from '../../context'

const SearchBar = () => {
    const { filterChannels,setFilterChannels} = useContext(Watcher);
    return <input type="search" placeholder='Enter name of channel'  onChange={(e)=>{
        console.log('filterChannels',filterChannels)
        setFilterChannels(e.target.value)
    }}/>

};
export default SearchBar;