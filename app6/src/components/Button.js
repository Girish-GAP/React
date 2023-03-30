import classnames from 'classnames';

function Button({
    children, 
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest    // the extra props we are going to pass. eg. onClick, onHover, onSubmit...  
    // onClick, onHover
    }){

        // rest.className to handel two identical names.
    const classes = classnames(rest.className, 'flex items-center px-3 py-1.5 border',    // this will applay to all
    {
        'border-blue-500 bg-blue-500 text-white' : primary,
        'border-gray-500 bg-gray-500 text-gray' : secondary,
        'border-green-500 bg-green-500 text-green' : success,
        'border-yellow-500 bg-yellow-500 text-white' : warning,
        'border-red-500 bg-red-500 text-red' : danger,
        'rounded-full' : rounded,
        'bg-white' : outline,
        'text-blue-500' : outline && primary,
        'text-gray-900' : outline && secondary,
        'text-green-500' : outline && success,
        'text-yellow-400' : outline && warning,
        'text-red-500' : outline && danger,
    });

    return(
        // ...rest will pass the probable props to button eg. onClick = {handelonclick} 
        <button {...rest} className= {classes} >{children}</button> // children is the prop which we have passed from inside tag
    )
}

// add custome validation types for props
Button.propTypes = {
    checkVariationValue : ({primary, secondary, success, warning, danger }) => {
      
        // !!undefined gives 0 in this way we can check which props are passed
        // if passed more than one we will give error
        const count = 
        Number(!!primary) + 
        Number(!!secondary) + 
        Number(!!success) + 
        Number(!!warning) +
        Number(!!danger);

        if(count > 1){
            return new Error('you can pass only one prop at a time from primary, secondary, success, warning, danger');
        }
    },
};

export default Button;






// import propTypes from 'prop-types';

    // we can avoid that using the classnames library
    // let baseClassName = 'px-3 py-1.5 border'
    // if(primary){
    //     baseClassName += 'bg-blue-600 border-blue-600 text-white'
    // } else if(secondary){
    //     baseClassName += 'bg-blue-600 border-blue-600 text-white'
    // }


    // const finalClassName = classnames(
//     {
//         // bg-blue-500 : true   // invalid js object contains dash
//         'bg-blue-500' : true,
//         'text-yellow-500' : true,
//     }
// );