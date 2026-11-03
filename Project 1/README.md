# My To-do List

My To-do List is a simple web application for creating and managing everyday tasks. The project was developed using HTML, CSS and native JavaScript. It does not use external JavaScript libraries or frameworks.

The application is suitable for users who want to keep a small list of assignments, study activities, appointments or personal tasks.



### 1. Add a task

The user writes a task in the input field and clicks the **Add Task** button. JavaScript reads the input and adds the task to the list on the page.


### 2. Input validation

The application checks the input before adding a task.

- Empty tasks are not accepted.
- A task must contain at least three characters.
- Invalid input displays an error message.
- The invalid input field receives a red border.
- The error disappears when the user enters valid text.

### 3. Complete a task

Each active task has a **Complete** button. Clicking the button marks the task as completed.

A completed task:

- receives a line through its text;
- changes to a gray color;
- changes its **Complete** button to an **Undo** button.

### 4. Undo a completed task

The **Undo** button changes a completed task back to an active task. The line-through style is removed and the task is included in the open-task count again.

### 5. Delete a task

Each task has a **Delete** button. Clicking it removes that task from the list and from browser storage.

### 6. Filter tasks

The application includes three filter buttons:

- **All** shows every task.
- **Active** shows only tasks that are not completed.
- **Completed** shows only completed tasks.

The filters change only what is visible. They do not delete or modify the saved tasks.

### 7. Open-task counter

The **Open tasks** counter shows how many tasks are currently unfinished. The number is updated when the user adds, completes, restores or deletes a task.

### 8. Save tasks in the browser

Tasks are saved with `localStorage`. The application converts the task array to JSON before saving it and converts the saved JSON back to an array when the page is opened.

This means that tasks remain available after refreshing or closing the page. However, the data is stored only in the current browser and device. Another browser or device will have a separate task list.
