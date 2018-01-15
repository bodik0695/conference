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
    static async editTask(id, newTitle, newText) {
        const putReq = {
            method: 'PUT',
            url: '/todos',
            data: {
                _id: id,
                title: newTitle,
                text: newText
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
    static async delTask(id) {
        const delReq = {
            method: 'DELETE',
            url: `/todos/${id}`
        };
        return await sendRequest(delReq);
    }
}