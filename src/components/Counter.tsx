import { useAppSelector } from '../hook';

const Counter: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list);

    const doneSum = todos.filter( todo => {
        return todo.status === 'done'
    })

    return (
        <div className={"Counter"}>
            Выполнено {doneSum.length} из {todos.length}
        </div>
    );
};

export default Counter;