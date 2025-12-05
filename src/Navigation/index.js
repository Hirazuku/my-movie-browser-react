import { toTasks, toAuthor } from "../routes";
import { List, ListItem, StyledNavLink } from "./styled";

const Navigation = () => {
    return (
        <nav>
            <List>
                <ListItem>
                    <StyledNavLink to={toTasks()}>Movies</StyledNavLink>
                </ListItem>
                <ListItem>
                    <StyledNavLink to={toAuthor()}> People</StyledNavLink>
                </ListItem>
            </List>
        </nav>
    )
}

export default Navigation;