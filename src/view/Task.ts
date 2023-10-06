export default class Task {

    id: number;
    title: string;
    status: string = 'pendente';
    created_at: string = Date.now().toLocaleString();
}