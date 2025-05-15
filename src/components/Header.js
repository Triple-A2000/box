import Nav from "./Nav";
import '../css/index.css';

function header(props) {
    return (
        <header className="flex justify-between">
            <div className="title">
                <h1><span>.</span>{props.title}</h1> 
            </div>
            <Nav list={props.navLinks} />
        </header>
    )
}

export default header;
