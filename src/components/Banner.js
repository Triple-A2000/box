import Button from './Button';

function Banner(props) {
    return (
        <section className='hero-section flex flex-column center'>
            <div className="container">
                <h2>{props.heroText}</h2>
                <p>{props.heroSubtext}</p>
            </div>
            <div className='button-container flex gap-16'>
                <Button isLoggedIn={true}/>
                <Button isLoggedIn={false}/>
            </div>
        </section>  
    )
}

export default Banner;