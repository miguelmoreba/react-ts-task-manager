interface IHeaderProps {
    title: string
}

export default function Header({title}: IHeaderProps) {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}
