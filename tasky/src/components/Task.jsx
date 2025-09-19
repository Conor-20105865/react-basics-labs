const Task = (props) => {
    
    return (
        <div>
            <p>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
        </div>
    )
}
