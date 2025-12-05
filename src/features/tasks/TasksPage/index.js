import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";
import Input from "../Input";
import { ExampleTasksButton } from "./ExampleTasksButton";

function TasksPage() {

  return (

    <Container>
      <Header
        title="Movie browser"
      />

      <Section
        title="Saw VI"
        extraHeaderContent={<Form/>}
        body="Piękna bajka dla dzieci. Zalecane przed oglądaniem założenie pampersa."
      />

      <Section
        title="Wyszukiwarka"
        extraHeaderContent={<ExampleTasksButton/>}
        body={
          <Search />
        }
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons />
        }
        body={
          <TaskList />
        }
      />

    </Container>
  );
}

export default TasksPage;