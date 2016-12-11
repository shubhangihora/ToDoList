new Vue ({
  el: '#app',
  data:
  {
    task: { taskName: '', taskDesc: '', deadline: ''},

    tasks: [
      {taskName: "submit git code", taskDesc: "git push test for Final Eval Component", deadline: "11.12.2016"},
        {taskName: "Do the web page", taskDesc: "create the design for web page", deadline: "11.12.2016"}
  ]},

  methods:
  {
    addTask: function(){
    //  alert("hello " + this.task.taskName + " " + this.task.taskDesc + " " + this.task.deadline);
      this.tasks.push(this.task);
      this.task = { taskName: '', taskDesc: '', deadline: ''};

    }
  }

})
