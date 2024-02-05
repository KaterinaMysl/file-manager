export const getUserName = async () => {
    const user_name = process.argv.filter((el) => el.startsWith('--username'))[0];
    return user_name ? user_name.replace(/^--username=/, '') : 'The mystery man 😎';
}
