import sendRequest from './request';

export default class TaskActions {
    static async getTasks() {
        const getReq = {
            method: 'GET',
            url: '/todos',
        }
        return await sendRequest(getReq);
    }
    static async changeStatus(id, newStatus) {
        const putReq = {
            method: 'PUT',
            url: '/todos',
            data: {
                _id: id,
                status: newStatus,
            }
        }
        return await sendRequest(putReq);
    }
    static async addTask(newTitle, newText) {
        const postReq = {
            method: 'POST',
            url: '/todos',
            data: {
                title: newTitle,
                text: newText,
                status: 0,
            },
        };
        return await sendRequest(postReq);
    }
}