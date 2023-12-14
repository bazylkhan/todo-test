import { useAppDispatch } from '../hook';
import {toggleComplete, removeTodo} from '../store/todoSlice';


interface TodoItemProps {
    id: string,
    text: string,
    description?: string,
    status: string
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, description, status }) => {
    const dispatch = useAppDispatch();
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        dispatch(toggleComplete({ id, value }));
    };

    return (
        <li className={"TodoItem"}>
            <select value={status} onChange={handleSelectChange}>
                <option value="onHold">Ожидание</option>
                <option value="inWork">В работе</option>
                <option value="done">Выполнено</option>
            </select>
            <div className={"TodoItem-inner"}>
                <div className={"TodoItem-title"}>
                    <span>Title:</span>
                    <div>{text}</div>
                </div>
                <div className={`TodoItem-description ${description === '' ? "hidden":null}`}>
                    <span>Description:</span>
                    <div>{description}</div>
                </div>
            </div>
            <div className={'delete'} onClick={() => dispatch(removeTodo(id))}>&times;</div>
        </li>
    );
};

export default TodoItem;