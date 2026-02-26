type Props = {
  inputText: string;
  handleChange: (argument: string) => void;
  handleCreateTodo: () => void;
};

export function UserInputItem({
  inputText,
  handleChange,
  handleCreateTodo,
}: Props) {
  return (
    <input
      type="text"
      placeholder="What needs to be done?..."
      value={inputText}
      onChange={(event) => {
        handleChange(event.target.value);
      }}
      onKeyUp={(event) => {
        if (event.key === "Enter") {
          handleCreateTodo();
        }
      }}
    />
  );
}
