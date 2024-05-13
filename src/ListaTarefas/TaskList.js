import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore2 } from "./firebase2";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [displayDialog, setDisplayDialog] = useState(false);
  const [newTask, setNewTask] = useState({
    id: null,
    status: "Em Andamento",
    date: "",
    content: "",
  });
  const [displayCreateDialog, setDisplayCreateDialog] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore2, "tasks"));
        const tasksData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(tasksData);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };

    fetchData();
  }, []);

  const showDialog = (task) => {
    setSelectedTask(task);
    setDisplayDialog(true);
  };

  const hideDialog = () => {
    setSelectedTask(null);
    setDisplayDialog(false);
  };

  const showCreateDialog = () => {
    setNewTask({ id: null, status: "Em Andamento", date: "", content: "" });
    setDisplayCreateDialog(true);
  };

  const hideCreateDialog = () => {
    setDisplayCreateDialog(false);
  };

  const saveTask = async () => {
    try {
      if (newTask.id) {
        await firestore2.collection("tasks").doc(newTask.id).update(newTask);
      } else {
        const docRef = await firestore2.collection("tasks").add(newTask);
        setTasks((prevTasks) => [...prevTasks, { ...newTask, id: docRef.id }]);
      }

      hideDialog();
    } catch (error) {
      console.error("Erro ao salvar/atualizar tarefa:", error);
    }
  };

  const deleteTask = async () => {
    try {
      if (selectedTask) {
        // Use `doc` para obter uma referência de documento
        const taskDocRef = doc(firestore2, "tasks", selectedTask.id);

        await deleteDoc(taskDocRef);
        const updatedTasks = tasks.filter(
          (task) => task.id !== selectedTask.id
        );
        setTasks(updatedTasks);
        hideDialog();
      }
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  const completeTask = async (isSuccessful) => {
    try {
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTask.id
          ? {
              ...task,
              status: isSuccessful
                ? "Concluída com sucesso!"
                : "Concluída sem sucesso",
            }
          : task
      );

      // Use `doc` para obter uma referência de documento
      const taskDocRef = doc(firestore2, "tasks", selectedTask.id);

      await updateDoc(taskDocRef, {
        status: isSuccessful
          ? "Concluída com sucesso!"
          : "Concluída sem sucesso",
      });

      setTasks(updatedTasks);
      hideDialog();
    } catch (error) {
      console.error("Erro ao completar tarefa:", error);
    }
  };
  const createTask = async () => {
    try {
      const dateToStore =
        newTask.date instanceof Date
          ? newTask.date.toISOString().split("T")[0]
          : newTask.date || null;

      // Adiciona o documento à coleção "tasks"
      const docRef = await addDoc(collection(firestore2, "tasks"), {
        status: newTask.status,
        date: dateToStore,
        content: newTask.content,
      });

      // Adiciona os dados ao estado
      setTasks((prevTasks) => [...prevTasks, { ...newTask, id: docRef.id }]);
      hideCreateDialog();
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <Button
        label="Criar Atividade"
        icon="pi pi-plus"
        onClick={showCreateDialog}
      />

      <DataTable
        value={tasks}
        selectionMode="single"
        onSelectionChange={(e) => showDialog(e.value)}
        style={{
          border: "1px solid #dcdcdc",
          borderRadius: "5px",
          marginTop: "15px",
        }}
      >
        <Column
          field="status"
          header="Status"
          style={{
            borderBottom: "1px solid #dcdcdc",
            borderRight: "1px solid #dcdcdc",
            padding: "8px",
          }}
        ></Column>
        <Column
          field="date"
          header="Data"
          style={{
            borderBottom: "1px solid #dcdcdc",
            borderRight: "1px solid #dcdcdc",
            padding: "8px",
          }}
        ></Column>
        <Column
          field="content"
          header="Conteúdo"
          style={{ borderBottom: "1px solid #dcdcdc", padding: "8px" }}
        ></Column>
      </DataTable>

      <Dialog
        header="Detalhes da Tarefa"
        visible={displayDialog}
        onHide={hideDialog}
        style={{
          width: "50%",
          border: "10px solid white",
          borderRadius: "5px",
          backgroundColor: "white",
        }}
      >
        <div style={{ borderBottom: "1px solid #dcdcdc", padding: "8px" }}>
          <h4>
            Status:{" "}
            <span
              style={{
                color:
                  selectedTask?.status === "Concluída com sucesso!"
                    ? "green"
                    : selectedTask?.status === "Concluída sem sucesso"
                    ? "red"
                    : "inherit",
              }}
            >
              {selectedTask?.status}
            </span>
          </h4>
        </div>
        <div style={{ borderBottom: "1px solid #dcdcdc", padding: "8px" }}>
          <h4>Data: {selectedTask?.date}</h4>
        </div>
        <div style={{ borderBottom: "1px solid #dcdcdc", padding: "8px" }}>
          <h4>Conteúdo: {selectedTask?.content}</h4>
        </div>
        <div style={{ marginTop: "15px" }}>
          <Button
            label="Concluir com Sucesso"
            icon="pi pi-check"
            onClick={() => completeTask(true)}
            className="p-button-success"
            style={{
              marginRight: "10px",
              backgroundColor: "green",
              border: "1px solid green",
            }}
          />
          <Button
            label="Concluir sem Sucesso"
            icon="pi pi-times"
            onClick={() => completeTask(false)}
            className="p-button-danger"
            style={{
              marginLeft: "5px",
              marginRight: "15px",
              backgroundColor: "red",
              border: "1px solid red",
            }}
          />
          <Button
            label="Excluir"
            onClick={deleteTask}
            className="p-button-danger"
          />
        </div>
      </Dialog>

      <Dialog
        header="Criar Nova Tarefa"
        visible={displayCreateDialog}
        onHide={hideCreateDialog}
        style={{
          width: "23%",
          border: "10px solid white",
          borderRadius: "5px",
          backgroundColor: "white",
        }}
      >
        <div style={{ padding: "8px" }}>
          <label>Status:</label>
          <InputText
            value={newTask.status}
            onChange={(e) =>
              setNewTask((prev) => ({ ...prev, status: e.target.value }))
            }
          />
        </div>
        <div style={{ padding: "8px" }}>
          <label>Data:</label>
          

          <Calendar
  value={newTask.date}
  onChange={(e) =>
    setNewTask((prev) => ({
      ...prev,
      date:
        e.target.value instanceof Date
          ? e.target.value.toISOString().split("T")[0]
          : e.target.value,
    }))
  }
  showIcon
  style={{ width: "100%", marginTop: "8px" }}
  className="p-inputtext"
  dateFormat="yy-mm-dd"
  dayTemplate={(date) => (
    <div
      style={{
        backgroundColor:
          date.day > 0 && date.day <= 31 ? "black" : "black",
        padding: "0.5em",
        borderRadius: "50%",
        textAlign: "center",
        border: "10px solid black",
      }}
    >
      {date.day}
    </div>
  )}
/>

         
        </div>
        <div
          style={{
            padding: "8px",
            marginBottom: "10px",
          }}
        >
          <label>Conteúdo da tarefa:</label>
          <InputText
            value={newTask.content}
            onChange={(e) =>
              setNewTask((prev) => ({ ...prev, content: e.target.value }))
            }
          />
        </div>
        <Button label="Criar" onClick={createTask} />
      </Dialog>
    </div>
  );
};

export default TaskList;
