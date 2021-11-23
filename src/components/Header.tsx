import Button from './Button'

interface IHeaderProps {
    title: string
}

export default function Header({title}: IHeaderProps) {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello'/>
        </header>
    )
}
