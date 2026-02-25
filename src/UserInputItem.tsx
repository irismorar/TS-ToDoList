type Props = {
  userInput: string;
  handleChangeUserInput: (argument: string) => void;
  handleCreateTodo: () => void;
};

export function UserInputItem({
  userInput,
  handleChangeUserInput,
  handleCreateTodo,
}: Props) {
  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      value={userInput}
      onChange={(event) => {
        handleChangeUserInput(event.target.value);
      }}
      onKeyUp={(event) => {
        if (event.key === "Enter") {
          handleCreateTodo();
        }
      }}
    />
  );
}
