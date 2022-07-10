// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

struct Task {
    uint256 id;
    string title;
    string description;
    bool done;
    uint256 createdAt;
}

contract TasksContract {
    mapping(uint256 => Task) public tasks;
    uint256 public tasksCounter = 0;

    constructor() {
        // createTask("title", "description");
    }

    function createTask(string memory _title, string memory _description)
        public
    {
        tasks[tasksCounter] = Task(
            tasksCounter,
            _title,
            _description,
            false,
            block.timestamp
        );
        tasksCounter++;
    }

    function toggle(uint256 _id) public {
        Task memory _task = tasks[_id];
        _task.done = !_task.done;
        tasks[_id] = _task;
    }
}
