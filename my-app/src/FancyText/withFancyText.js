const withFancyText=(WrappedComponet)=>{
    return(props)=>{
        const fancyStyle={fontStyle:"italic",fontWeight:"bold"};
        return(
            <div style={fancyStyle}>
                <WrappedComponet {...props}/>
            </div>
        );
    };
};

export default withFancyText;