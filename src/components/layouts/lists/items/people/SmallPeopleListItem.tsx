import { PersonTypes } from "../../../../../types/entities/person";
import React from "react";


// Interfaces
interface SmallPeopleListItemProps {
    person: PersonTypes;
}

const SmallPeopleListItem: React.FC<SmallPeopleListItemProps> = ( { person } ) => {
    const { name, age } = person
    return(
        <p>Name: {name}, age: {age}</p>
    )
};

export default SmallPeopleListItem;