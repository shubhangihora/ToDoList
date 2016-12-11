new Vue ({
  el: '#task-form',
  data:
  {
    tasks: [
    {
      taskName: '', taskDesc: '', deadline: ''
    },
    {
      taskName: 'Software Engg', taskDesc: 'Final Eval Component', deadline: '11.12.2016'
    }
  ]},
  methods:
  {
    addTask: function(){
      this.tasks.push(this.task);
    }
  }

})
