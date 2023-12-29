interface NumberedListProps {
    items: object[];
    resourceName: string;
    itemComponent: React.FC<any>;
}

const NumberedList = ({
    items,
    resourceName,
    itemComponent: ItemComponent,
}: NumberedListProps) => {

    return(
    <>
        {items.map((item, i) => (
            <>
                <h3>{i + 1}</h3>
                <ItemComponent key={i} { ...{ [resourceName]: item } } />
            </>
        ))}
    </>)
}

export default NumberedList;