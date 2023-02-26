export default function CustomButton({buttonText ,className ,onClick}) {
    return(
        <>
        <button onClick={onClick} className={className}>{buttonText}</button>
        </>
    )
}