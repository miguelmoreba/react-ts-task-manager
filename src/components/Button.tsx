interface IButtonProps {
    color: string,
    text: string
}

const Button = ({color, text}: IButtonProps) => {
    return (
        <button style={{backgroundColor: color}} className='btn'>Add</button>
    )
}

export default Button;
