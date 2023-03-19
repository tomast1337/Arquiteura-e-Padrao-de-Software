export interface Dao<T> {
    tableName: string;
    insert(object: T): void;
    update(object: T): void;
    delete(id: number): void;
    find(id: number): T;
    findAll(): T[];
}
