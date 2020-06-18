class DOMHelper {
    static moveElement(elementId, destinationSelector) {
        const element = document.getElementById(elementId);
        const destination = document.querySelector(destinationSelector);
        destination.append(element);
    }

    static removeEventListener(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }
}

class ToolTip {
    constructor(tooltipNotifierFn) {
        this.tooltipNotifierHandler = tooltipNotifierFn;
    }

    detach() {
        this.element.remove();
        this.tooltipNotifierHandler();
    }

    attach() {
        const tooltipEl = document.createElement('div');
        tooltipEl.className = 'card';
        tooltipEl.textContent = 'DUMMY';
        tooltipEl.addEventListener('click', this.detach.bind(this));
        this.element = tooltipEl;
        document.body.append(this.element);
    }
}

class ProjectItem {
    hasActiveTooltip = false;

    constructor(id, updateProjectsListFunction, type) {
        this.id = id;
        this.updateProjectsListHandler = updateProjectsListFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
    }

    moreInfoHandler() {
        if (this.hasActiveTooltip) {
            return;
        }

        this.hasActiveTooltip = true;
        const toolTip = new ToolTip(() => {
            this.hasActiveTooltip = false;
        });
        toolTip.attach();
    }

    connectMoreInfoButton() {
        const projectItemEl = document.getElementById(this.id);
        const moreInfoBtnEl = projectItemEl.querySelector('button:first-of-type');
        moreInfoBtnEl.addEventListener('click', this.moreInfoHandler.bind(this));
    }

    connectSwitchButton(type) {
        const projectItemEl = document.getElementById(this.id);
        let switchBtnEl = projectItemEl.querySelector('button:last-of-type');
        switchBtnEl.textContent = type === 'active' ? 'Finish' : 'Activate';
        switchBtnEl = DOMHelper.removeEventListener(switchBtnEl);        
        switchBtnEl.addEventListener('click', this.updateProjectsListHandler.bind(null, this.id));
    }

    update(type, updateProjectsListFn) {
        this.updateProjectsListHandler = updateProjectsListFn;
        this.connectSwitchButton(type);
    }
}

class ProjectList {
    projects = [];

    constructor(type) {
        this.type = type;
        const projectListEl = document.querySelectorAll(`#${type}-projects li`);
        for (const projectEl of projectListEl) {
            this.projects.push(new ProjectItem(projectEl.id, this.switchProject.bind(this), this.type));
        }
        console.log(this.projects);
    }

    connectSwitchHandler(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject(project) {
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.type, this.switchProject.bind(this));
    }

    switchProject(projectId) {
        this.switchHandler(this.projects.find(project => project.id === projectId));
        this.projects = this.projects.filter(project => project.id !== projectId);
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
        activeProjectsList.connectSwitchHandler(
            finishedProjectsList.addProject.bind(finishedProjectsList)
        );
        finishedProjectsList.connectSwitchHandler(
            activeProjectsList.addProject.bind(activeProjectsList)
        );
    }
}

App.init();