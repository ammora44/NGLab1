"use strict";

function TodoController() {
    const vm = this;
    vm.toDoTasks = [
        {
            task: "Make Kefir.",
            completed: true
        },
        {
            task: "Read Books.",
            completed: false
        },
        {
            task: "Do Laundry.",
            completed: true
        },
        {
            task: "Go Grocery Shopping.",
            completed: true
        },
        {
            task: "Get Lots of Sleep.",
            completed: false
        }
    ]
}


angular
  .module("toDoApp")
  .controller("TodoController", TodoController);  // takes 2 arguments: 1) name of controller, 2) reference to a function or object that has the same exact name; also, that will be used in constructor
