import withFancyText from "./withFancyText";

const textComponent = () =>{
    return(
        <p>Hello Fancy Text.</p>
    );
}

export default withFancyText(textComponent);