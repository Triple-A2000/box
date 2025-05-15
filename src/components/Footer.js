import Nav from "./Nav";
import Icon from "./Icon";

function Footer(props) {
    return (
        <header>
            <div className="container flex">
                <Icon list={props.socialLinks} />
                <Nav list={props.navLinks} />
                <h3>{props.copyrightDetails}</h3>

            </div>
        </header>
    )
}

export default Footer;