export default interface RegisterPersistence {
    name: string;
    email: string;
    password: string;
    confirm_password?: string;
}
