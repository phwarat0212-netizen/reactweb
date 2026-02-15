const FormattedDate = ({isHighlight, children}) => {
    return (
        <div>
            <span className={`text-sm ${isHighlight['exp1'] ? "text-lime-700" : ""}`}>
                {children}
            </span>
        </div>
    )
}

export default FormattedDate