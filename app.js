new Vue({
  el: '#tasks',
  data: {
    task: { name: '', desc: '', deadline: '' },
    tasks: []
  },
  ready: function() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks: function() {
      var tasks = [
        {
          id: 1,
          name: 'Software Engg',
          desc: 'Final Eval Component',
          deadline: '11.12.2016'
        }
      ];
      this.$set('tasks', tasks);
    },
    addTask: function() {
      if(this.task.name) {
        this.tasks.push(this.task);
        this.task = { name: '', desc: '', deadline: '' };
      }
    }
  }
});
