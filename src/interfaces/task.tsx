type difficultyType = 'Very Easy' | 'Easy' | 'Medium' | 'Hard' | 'Very Hard'

export interface ITask {
    id: number,
    title: string,
    description?: string,
    difficulty : difficultyType
}