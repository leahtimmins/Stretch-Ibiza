const Container = ({children, className}) => {
    return (
        <div className={`container mx-auto px-4 block relative ${className ? className : ""}`}>{children}</div>
    )
}

export default Container;