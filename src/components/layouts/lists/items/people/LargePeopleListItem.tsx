import { PersonTypes } from "../../../../../types/entities/person";

// Interfaces
interface LargePeopleListItemProps {
    person: PersonTypes;
}

const LargePeopleListItem: React.FC<LargePeopleListItemProps> = ( { person } ) => {
    const { name, age, hairColor, hobbies } = person
    return(
        <>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}</p>
            <h3>Hobbies</h3>
            <ul>
                {hobbies.map( hobby => <li key={hobby}>{hobby}</li> )}
            </ul>
        </>
    )
};

export default LargePeopleListItem;