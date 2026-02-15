const Tech = ({isHighlight, data}) => {
    return (
        <div className="flex gap-4 text-sm">
            {
                data.map((e, i) => (
                    <div key={`${e}-tech-${i}`} className={`rounded-md bg-primarySubcontent px-4 py-1 ${isHighlight ? "text-primaryAccent" : ""}`}>{e}</div>
                ))
            }
            
        </div>
    )
}

export default Tech;