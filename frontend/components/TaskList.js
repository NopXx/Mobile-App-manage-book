import { FlatList, RefreshControl, Text } from "react-native";
import React, { useState, useEffect } from "react";

import { getTasks, deleteTask } from "../api";
import TaskItem from "./TaskItem";
import { useIsFocused } from "@react-navigation/native";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const isFocused = useIsFocused();

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, [isFocused]);

  const handleDelete = async (id) => {
    await deleteTask(id);
    await loadTasks();
  };

  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleDelete={handleDelete} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  });

  return (
    <FlatList
      style={{ width: "100%" }}
      data={tasks}
      keyExtractor={(item) => item.id + ""} // keyExtractor requires a string
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          colors={["#78e08f"]}
          onRefresh={onRefresh}
          refreshing={refreshing}
          progressBackgroundColor="#0a3d62"
        />
      }
    />
  );
};

export default TaskList;
