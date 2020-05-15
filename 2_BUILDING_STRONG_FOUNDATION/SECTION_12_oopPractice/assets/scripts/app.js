class Tooltip {}

class ProjectItem {
    constructor(id) {
        this.id = id;
    }
}

class ProjectList {
    projects = [];

    constructor(type) {
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for (const prjItem of prjItems) {
            this.projects.push(new ProjectItem(prjItem.id));
        }
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
    }
}

App.init();