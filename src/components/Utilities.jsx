import {Link} from 'react-router-dom' 

export function Icon({className}) {
    return (
        <Link to="/">
            <img className={className} src="icon.png" alt=""/>
        </Link>
    )
}