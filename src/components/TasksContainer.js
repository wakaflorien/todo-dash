import TaskCard from "./TaskCard";

function TasksContainer(props) {
  const { allTasks } = props;
  return (
    <div className={`masonry sm:masonry-sm md:masonry-md`}>
      {allTasks.map((todo) => (
        <TaskCard
          key={todo.id}
          title={todo.title}
          subTitle={todo.subTitle}
          commentsCount={todo.commentsCount}
          status={todo.status}
          hasImage={todo.hasImage}
          image={todo.image}
          currentTheme={props.currentTheme}
        />
      ))}
    </div>
  );
}

export default TasksContainer;
