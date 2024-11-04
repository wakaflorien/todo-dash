import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  LinkIcon,
  LockOpenIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

import RightSidePanel from "../components/RightSidePanel";
import LeftSidePanel from "../components/LeftSidePanel";
import ThemeSwitcher from "../components/ThemeSwitcher";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Notification from "../components/Notification";
import UserGroupBlend from "../components/UserGroupBlend";
import { ServerStackIcon } from "@heroicons/react/16/solid";
import Tooltip from "../components/Tooltip";
import { SecondaryButton } from "../components/buttons";
import Modal from "../components/Modal";

import TasksContainer from "../components/TasksContainer";
import { addTodo, fetchTodos } from "../api/api";
import { setError, setTodos } from "../app/slices/todosSlice";

const Home = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    todo: "",
    userId: "",
    completed: false,
  });
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  const [currentTheme, setCurrentTheme] = useState("light");
  const [activeTab, setActiveTab] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const transformTodos = (todos) => {
    if (!todos) return [];
    return todos.map((todo, index) => {
      return {
        ...todo,
        title: todo.todo,
        subTitle: "landing page ui",
        commentsCount: index + todo.id,
        status:
          todo.id % 6 === 0
            ? "to do"
            : todo.completed
            ? "completed"
            : "in progress",
        hasImage: todo.id % 5 === 0 ? true : false,
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      };
    });
  };

  // Fetch todos query
  const { isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    select: (data) => {
      dispatch(setTodos(data));
    },
    throwOnError: (error) => {
      dispatch(setError(error.message));
    },
  });

  // Add mutation
  const addTodoMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: (newTodo) => {
      clearForm();
      setIsOpen(false);
      dispatch(addTodo(newTodo));
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error) => {
      dispatch(setError(error.message));
    },
  });

  const clearForm = () => {
    setFormData({ todo: "", userId: "", completed: false });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      todo: e.target.value,
      userId: Math.floor(Math.random() * 100) + 1,
    });
  };
  const handleCreateNewTodo = (e) => {
    e.preventDefault();
    if (!formData.todo.trim()) return;

    addTodoMutation.mutate(formData);
  };

  const totalTasks = todos ? todos.limit : 0;
  const totalCompletedTasks = todos.todos
    ? todos.todos.filter((todo) => todo.completed).length
    : 0;
  const totalActiveTasks = todos.todos
    ? todos.todos.filter((todo) => !todo.completed).length
    : 0;
  const allTasks = todos.todos ? transformTodos(todos.todos) : [];

  const breadCrumbsItems = [
    { id: 1, name: `${t("breadcrumbs.workspace")}`, href: "#", active: false },
    { id: 2, name: `${t("breadcrumbs.creative")}`, href: "#", active: false },
    {
      id: 3,
      name: `${t("breadcrumbs.creativedesign")}`,
      href: "#",
      active: true,
    },
  ];

  const tabsItems = [
    {
      id: 1,
      name: `${t("tabs.alltasks")}`,
      current: true,
      tasksCount: totalTasks,
      content: (
        <>
          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <ArrowPathIcon className="w-8 h-8 animate-spin" />
            </div>
          ) : (
            <TasksContainer allTasks={allTasks} />
          )}
        </>
      ),
    },
    {
      id: 2,
      name: `${t("tabs.todo")}`,
      current: false,
      tasksCount: totalActiveTasks,
      content: (
        <>
          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <ArrowPathIcon className="w-8 h-8 animate-spin" />
            </div>
          ) : (
            <TasksContainer
              allTasks={allTasks.filter((todo) => todo.status === "to do")}
            />
          )}
        </>
      ),
    },
    {
      id: 3,
      name: `${t("tabs.inprogress")}`,
      current: false,
      tasksCount: totalActiveTasks,
      content: (
        <>
          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <ArrowPathIcon className="w-8 h-8 animate-spin" />
            </div>
          ) : (
            <TasksContainer
              allTasks={allTasks.filter(
                (todo) => !todo.completed && todo.status !== "to do"
              )}
            />
          )}
        </>
      ),
    },
    {
      id: 4,
      name: `${t("tabs.completed")}`,
      current: false,
      tasksCount: totalCompletedTasks,
      content: (
        <>
          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <ArrowPathIcon className="w-8 h-8 animate-spin" />
            </div>
          ) : (
            <TasksContainer
              allTasks={allTasks.filter(
                (todo) => todo.completed && todo.status !== "to do"
              )}
            />
          )}
        </>
      ),
    },
  ];

  if (error) return <div>Error: {error.message}</div>;

  return (
    <main
      className={`flex h-content select-none ${
        currentTheme === "dark" ? "bg-night text-white" : "bg-white"
      } `}
    >
      <section
        className={`flex flex-col justify-between items-center p-4 w-fit h-screen  shadow-r-md border-r ${
          currentTheme === "light" ? "border-content-bg" : "border-primary/20"
        }`}
      >
        <LeftSidePanel currentTheme={currentTheme} />
      </section>

      <section
        className={`flex justify-between w-full ${
          currentTheme === "light" ? "bg-content-bg" : "bg-night"
        } static`}
      >
        <div className="w-full">
          {/* Header */}
          <div
            className={`flex gap-2 p-2 lg:p-4 justify-between w-full md:w-[calc(100%-300px)]  ${
              currentTheme === "light" ? "bg-white" : "bg-night"
            }`}
          >
            <div
              className={`flex w-full items-center gap-2 ${
                currentTheme === "light" ? "bg-content-bg" : "bg-primary/20"
              }  rounded-md`}
            >
              <input
                type="search"
                placeholder="Search"
                className={`${
                  currentTheme === "light" ? "bg-content-bg" : "bg-primary/20"
                } w-full p-2 h-8 focus:outline-none focus:ring-none rounded-md`}
              />
              <div className="flex px-2 gap-2 divide-x divide-solid">
                <MagnifyingGlassIcon className="nav-icon" />
              </div>
            </div>

            <ThemeSwitcher
              currentTheme={currentTheme}
              setCurrentTheme={setCurrentTheme}
            />

            <Notification currentTheme={currentTheme} />

            <LanguageSwitcher currentTheme={currentTheme} />
          </div>

          <div className="p-4">
            <div className="w-full">
              {/* BreadCrumbs */}
              <div className="flex justify-between">
                <div className="flex flex-col md:flex-row">
                  {breadCrumbsItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-1 md:gap-2"
                    >
                      <p
                        className={`capitalize cursor-pointer text-xs md:text-sm ${
                          item.active
                            ? "text-primary hover:text-secondary"
                            : "text-secondary hover:text-primary"
                        }`}
                      >
                        {item.name}
                      </p>
                      {item.id !== 3 && (
                        <ChevronRightIcon className="nav-icon" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-end">
                  <p className="capitalize text-xs md:text-md">
                    {t("breadcrumbs.from")} 23 {t("months.april")} 7
                  </p>
                  <p className="relative text-secondary">
                    {" "}
                    <span className="absolute -left-4 bottom-1.5 w-2 h-2 bg-green-500 rounded-full"></span>{" "}
                    <span className="text-xs md:text-md">
                      {t("breadcrumbs.updated")} 12 min {t("breadcrumbs.ago")}
                    </span>
                  </p>
                </div>
              </div>

              {/* Title */}
              <header className="capitalize font-semibold text-lg md:text-2xl">
                {t("titles.website")}
              </header>

              {/* Actions */}
              <div className="flex items-center justify-between py-2 gap-2 md:py-4 md:gap-4">
                <div className="flex gap-2 divide-x divide-solid">
                  <div className="flex gap-2 items-center">
                    <LockOpenIcon className="nav-icon" />
                    <span className="text-secondary text-xs md:text-sm capitalize">
                      {t("actions.limited")}
                    </span>
                    <ChevronDownIcon className="nav-icon" />
                  </div>
                  <div className="px-4">
                    <UserGroupBlend
                      hasAdd={true}
                      iconType="solid"
                      hasMore={true}
                    />
                  </div>
                </div>

                <div className="hidden sm:flex gap-2 divide-x divide-solid">
                  <Tooltip text="Copy link" position="bottom">
                    <LinkIcon className="nav-icon" />
                  </Tooltip>
                  <div className="flex px-2 gap-2">
                    <ServerStackIcon className="nav-icon text-tertiary" />
                    <Squares2X2Icon className="nav-icon" />
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <nav className="w-full bg-white flex  items-center justify-between rounded-md p-4 overflow-scroll scroll-smooth scrollbar-hide">
                {tabsItems.map((item) => (
                  <button
                    key={item.id}
                    className={`flex  flex-col gap-2 items-center md:flex-row py-2 px-4 border-b-2 font-medium text-sm transition-colors duration-200
                        ${
                          activeTab === item.id
                            ? "border-tertiary text-tertiary"
                            : "border-transparent text-secondary hover:text-tertiary "
                        }
                      `}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <p className="capitalize">{item.name}</p>
                    <span className="text-xs p-1 bg-content-bg text-secondary rounded-md cursor-pointer">
                      {item.tasksCount}
                    </span>
                  </button>
                ))}

                <div className="hidden sm:flex  sm:flex-col lg:flex-row gap-2">
                  <SecondaryButton
                    icon={<AdjustmentsHorizontalIcon className="nav-icon" />}
                    text={t("tabs.filter")}
                    onClick={() => {}}
                  />
                  <SecondaryButton
                    icon={<PlusIcon className="nav-icon" />}
                    text={t("tabs.newtask")}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </div>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
              {tabsItems.map((tab, index) => (
                <div
                  key={tab.id}
                  className={`${
                    activeTab === tab.id ? "block " : "hidden"
                  } rounded-lg bg-content-bg`}
                >
                  {tab.content}
                </div>
              ))}
            </div>

            {/* Modals */}
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              title="Add New Task"
            >
              <form
                onSubmit={handleCreateNewTodo}
                className="mb-4"
                id="taskForm"
              >
                <input
                  type="text"
                  value={formData.todo}
                  name="todo"
                  onChange={handleChange}
                  placeholder="Add new todo"
                  className="w-full bg-white focus:outline-none focus:ring-1 border rounded-md p-2"
                  required
                />
                <div className="mt-4 flex justify-end space-x-3">
                  <button
                    type="submit"
                    disabled={addTodoMutation.isPending}
                    className="mt-2 px-4 py-2 bg-tertiary text-white rounded-md"
                  >
                    {addTodoMutation.isPending ? "Adding..." : "Add Todo"}
                  </button>
                </div>
              </form>
            </Modal>
          </div>
        </div>

        {/* <RightSidePanel currentTheme={currentTheme} /> */}
      </section>
    </main>
  );
};

export default Home;
