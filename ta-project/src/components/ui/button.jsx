const Button = ({children,className,stephandler}) =>{
    return (
        <button onClick={()=>stephandler()} className={className}>{children}</button>
    )
}

export {Button}