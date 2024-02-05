export const getUserName = async () => {
    const userName = process.argv.filter((el) => el.startsWith('--username'))[0];
    const updatedUserName = userName ? userName.replace(/^--username=/, '') : 'The mystery man 😎';
    return updatedUserName ? updatedUserName : 'The mystery man 😎';
}
