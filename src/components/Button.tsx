import { MouseEvent } from 'react';

interface IButtonProps {
    color: string,
    text: string,
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({color, text, onClick}: IButtonProps) => {


    return (
        <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button;
