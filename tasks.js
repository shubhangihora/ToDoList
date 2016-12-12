var timeoutID;
new Vue ({
  el: '#app',
  data:
  {
    task: { taskName: '', taskDesc: '', deadline: ''},

    tasks: [
      {taskName: "SoftwareEngg", taskDesc: "Final Eval Submission", deadline: "12.12.2016"},
        {taskName: "New Girl!", taskDesc: "Watch the latest episode!!", deadline: "ASAP"}
  ]},
  methods:
    {
    addTask: function(){
     // alert("hello " + this.task.taskName + " " + this.task.taskDesc + " " + this.task.deadline);
      this.tasks.push(this.task);
      this.task = { taskName: '', taskDesc: '', deadline: ''};
    },
    alertOne: function(){
      alert("Reminder for " + this.task.taskName);
    }
  }
})
