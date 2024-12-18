import withFancyText from "./withFancyText";

const Hello = (props) =>{
    const theData=useContext(MyContext);
    return(
        <div>
            <p>Hello World from Hello commponent.</p>
            <h2>Data from context: {theData}</h2>
        </div>
    );
}

export default Hello;