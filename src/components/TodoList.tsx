import React, { useState } from 'react';
import { useAppSelector } from '../hook';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list);
    const [filterValue, setFilterValue] = useState('all');

    const doneList = todos.filter(todo => todo.status === 'done');
    const inWorkList = todos.filter(todo => todo.status === 'inWork');
    const onHoldList = todos.filter(todo => todo.status === 'onHold');

    const filterHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setFilterValue(value);
    };

    const selectedList = () => {
        if (filterValue === 'onHold') return onHoldList;
        if (filterValue === 'inWork') return inWorkList;
        if (filterValue === 'done') return doneList;
        if (filterValue === 'all') return todos;
        return todos;
    };

    return (
        <>
            <div>
                Фильтр
                <select value={filterValue} onChange={filterHandler}>
                    <option value="onHold">Ожидание</option>
                    <option value="inWork">В работе</option>
                    <option value="done">Выполнено</option>
                    <option value="all">Все</option>
                </select>
            </div>
            <ul>
                {selectedList().map(todo => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </ul>
        </>
    );
};

export default TodoList;
