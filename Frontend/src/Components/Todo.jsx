export function Todo({ todos }) {
    return (
        <div>
            {todos.map(function(todo){
                return <div>
                    <h1>{todo.name}</h1>
                    <p>{todo.description}</p>
                    <button>Mark as done</button>
                </div>
            })}
        </div>
    );
}
