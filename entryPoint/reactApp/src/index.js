// You can write your own logic here to determine the actual url
window.reactTodoAppUrl = "http://localhost:2001"
window.vueTodoAppUrl = "http://localhost:2002"

// Use dynamic import here to allow webpack to interface with module federation code
import("./bootstrap");
