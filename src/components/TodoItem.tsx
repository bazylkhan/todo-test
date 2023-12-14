import { useAppDispatch } from '../hook';
import {toggleComplete, removeTodo} from '../store/todoSlice';


interface TodoItemProps {
    id: string,
    text: string,
    description: string,
    status: string
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, description, status }) => {
    const dispatch = useAppDispatch();
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        dispatch(toggleComplete({ id, value }));
    };

    return (
        <li>
            <select value={status} onChange={handleSelectChange}>
                <option value="onHold">Ожидание</option>
                <option value="inWork">В работе</option>
                <option value="done">Выполнено</option>
            </select>
            <div>
                <div>
                    <span>{text}</span>
                </div>
                <div>
                    <span>{description}</span>
                </div>
            </div>
            <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
        </li>
    );
};

export default TodoItem;