app = Vue.createApp({
	data() {
		return {
			taskGroups: []
		}
	},
	methods: {
		addTaskGroup() {
			this.taskGroups.push({
				name: "",
				tasks: []
			})
		},

		deleteTaskGroup(index) {
			this.taskGroups.splice(index, 1);
		},

		addTask(taskGroup) {
			taskGroup.tasks.push({
				name: ""
			})
		},

		deleteTask(tasks, index) {
			tasks.splice(index, 1);
		}
	}
})

app.mount('#app')