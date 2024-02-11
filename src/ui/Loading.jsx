import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

function Loading({width="75",height="40"}) {
	return <ThreeDots height={height} width={width} radius={9} 
    wrapperStyle={{
        display:"flex"
        ,justifyContent:"center"
    }}
    color='rgb(var(--color-primary-900))'
        
    />;
}

export default Loading;
