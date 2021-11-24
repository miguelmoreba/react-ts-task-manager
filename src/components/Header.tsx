import Button from './Button'
import {MouseEvent} from 'react'

interface IHeaderProps {
    title: string
}

export default function Header({title}: IHeaderProps) {

    const onClick: (event: MouseEvent<HTMLButtonElement>) => void = (e) => {
        console.log(e)
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello' onClick={onClick}/>
        </header>
    )
}
