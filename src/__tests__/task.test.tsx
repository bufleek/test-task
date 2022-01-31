import { getTasks } from "../api/tasks";
import { getUsers } from "../api/users";
import Task from "../components/task";
import { render, screen, waitFor } from "../test-utils";

test("Test User and Tasks APIs", async () => {
  const usersResponse = await waitFor(async () => getUsers());
  const tasksResponse = await waitFor(async () =>
    getTasks(usersResponse.data[0].id)
  );
  // Assert for users
  expect(usersResponse.status).toBe(200);
  expect(usersResponse.data.length === 0).toBeFalsy();
  // Assert for User tasks
  expect(tasksResponse.status).toBe(200);
  expect(tasksResponse.data.length === 0).toBeFalsy();

  expect(
    tasksResponse.data[0].userId === usersResponse.data[0].id
  ).toBeTruthy();
});

test("Task render", () => {
  const title = "Test title";

  render(<Task isComplete={false} title={title} />);
  expect(screen.getByText(title)).toBeDefined();
});

test("Completed task cant be changed", () => {
  const title = "Test title";

  const { container } = render(<Task isComplete={true} title={title} />);
  expect(container.getElementsByClassName("check-complete").length).toBe(0);
});
