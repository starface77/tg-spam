const Circle = ({active}) => {

    return <div style={{backgroundColor: !!active ? "#52CB5F" : "#985B72"}} className="circle"></div>
}

export default Circle