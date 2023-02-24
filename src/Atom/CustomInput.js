export default function CustomInput({className , placeholder ,onKeyDown ,onChange ,value}) {
    return(
        <>
        <input value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} className={className}/>
        </>
    )
}