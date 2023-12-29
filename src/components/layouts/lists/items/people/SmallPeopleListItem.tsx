import { PersonTypes } from "../../../../../types/entities/person";

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