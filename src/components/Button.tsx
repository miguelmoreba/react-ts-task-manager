interface IButtonProps {
    color: string,
    text: string,
    onClick: Function
}

const Button = ({color, text}: IButtonProps) => {
    
    const onClick = () => {}

    return (
        <button onClick={onClick}style={{backgroundColor: color}} className='btn'>Add</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button;
