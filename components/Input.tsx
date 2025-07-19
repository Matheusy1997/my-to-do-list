interface InputProps{
    onClick: () => void
    onChange: () => void
}

export function Input({onClick, onChange} : InputProps) {
    return(
        <div>
            <input type="number" placeholder="ID" min={0}  required onChange={onChange}/>
            <input type="text" placeholder="To-do" required onChange={onChange}/>
            <button onClick={onClick}>Save</button>
        </div>
    )
}