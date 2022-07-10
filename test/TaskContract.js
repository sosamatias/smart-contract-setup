const TasksContract = artifacts.require("TasksContract");

contract("TasksContract", () => {
    before(async () => {
        this.tasksContract = await TasksContract.deployed();
    });

    it('migration deployed successfully', async () => {
        const address = this.tasksContract.address;
        assert.notEqual(address, null);
        assert.notEqual(address, undefined);
        assert.notEqual(address, 0x0);
        assert.notEqual(address, "");
    });

    it('happy path', async () => {
        tasksContract = this.tasksContract;
        counter = await tasksContract.tasksCounter();
        await tasksContract.createTask("Title A", "Description A");
        newId = counter.toNumber() + 1;
        t = await tasksContract.tasks(newId);
        assert.equal(t.done, false);
        await tasksContract.toggle(newId);
        t = await tasksContract.tasks(newId);
        assert.equal(t.done, true);
    });
});
