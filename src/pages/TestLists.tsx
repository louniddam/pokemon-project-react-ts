import LargePeopleListItem from "../components/layouts/lists/items/people/LargePeopleListItem";
import SmallPeopleListItem from "../components/layouts/lists/items/people/SmallPeopleListItem";
import RegularList from "../components/layouts/lists/list/RegularList"
import { people } from "../utils/objects";

const TestLists = () => {
    return(
        <RegularList 
            items={people}
            resourceName="person"
            itemComponent={LargePeopleListItem}
        />
    )
}

export default TestLists;