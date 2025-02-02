import React, { useEffect, useRef, useState } from "react";
import Banner from "../../components/Banner/Banner";
import TaskCard from "../../components/Cards/TaskCard";

interface TaskProps {
  name: string;
  done: boolean;
}

const Task: React.FC = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current === false) {
      fetch("/tasks.json")
        .then((response) => response.json())
        .then((data) => setTasks(data))
        .then(() => (loaded.current = true));
    }

    return () => {};
  }, [loaded]);

  return (
    <div className="wrapper">
      <div className="mt-6 mx-auto">
        <Banner bannerName="Current Tasks" labelName="3 Task" />
      </div>
      <div className="wrap-list_tasks">
        <div className="content">
          <ul className="list-tasks">
            {tasks.map((task, index) => (
              <TaskCard key={index} taskName={task.name} isDone={task.done} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Task;
