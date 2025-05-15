function Button(props) {
    return (
        <button className={props.isLoggedIn ? 'primary' : 'secondary'}>
            {props.isLoggedIn ? 'Login' : 'Browse as Guest'}
        </button>
    );
}

export default Button;