import classNames from 'classnames'


function Panel({children, className, ...rest}){
    const fialClassNames = classNames('border rounded p-3 shoadow bg-white w-full',
        className
    )


    return <div {...rest} className = {fialClassNames}>
        {children}
    </div>

}

export default Panel;