const Home = () => {

    const handleClick = () => {
        console.log('Clicked');
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
         <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;