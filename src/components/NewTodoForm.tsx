interface NewTodoFormProps {
    valueTask: string,
    valueDescription?: string,
    updateText: (str: string) => void,
    updateDescription: (str: string) => void,
    handleAction: () => void
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({ valueTask, valueDescription, updateText,updateDescription, handleAction }) => {
    return (
        <div>
            <input
                placeholder='task title'
                value={valueTask}
                onChange={(e) => updateText(e.target.value)}
            />
            <input
                placeholder='description'
                value={valueDescription}
                onChange={(e) => updateDescription(e.target.value)}
            />
            <button onClick={handleAction}>Add task</button>
        </div>
    );
};

export default NewTodoForm;