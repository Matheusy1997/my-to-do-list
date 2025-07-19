interface TableRowProps{
    id:number
    name:string
}

export default function TableRow({id, name}: TableRowProps) {
    return (
        <tr>
            <td  className="py-3 px-4 text-left text-sm font-semibold tracking-wider">{id}</td>
            <td className="py-3 px-4 text-left text-sm font-semibold tracking-wider">{name}</td>
            <td className="py-3 px-4 text-left text-sm font-semibold tracking-wider"><button className="hover:cursor-pointer">X</button></td>
        </tr>
    )
}