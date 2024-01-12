import React from "react";

interface RegularListProps {
    items: object[];
    resourceName: string;
    itemComponent: React.FC<any>;
}
 
const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent,
}: RegularListProps) => {

    return(<>
        {items.map((item, i) => (
            <ItemComponent key={i} { ...{ [resourceName]: item } } />
            // Trad:
            //<ItemComponent person={item} />
        ))}
    </>)
}

export default RegularList;