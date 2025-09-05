export interface IRecordItem {
    id: string;
    name: string;
    quickUrl?: string;
    color?: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
}

export const baseStatusMap = {
    "delivering": "已投递",
    "interviewing": "面试中",
    "pending": "泡池子",
    "offer": "已意向"
}