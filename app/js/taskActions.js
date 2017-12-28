import sendRequest from './request';

export default class TaskActions {
    static async addtask(e){
        e.preventDefault();

        const getReq = {
            method: 'GET',
            url: '/todos',
        }
        const tasks = await sendRequest(getReq);

        // for (const i of tasks) {
        //     if (i.status === 0) {
        //         i.status = '';
        //     } else if (i.status === 1) {
        //         i.status = 'checked';
        //     }
        // }
        this.data.tasks = tasks;
    }
}