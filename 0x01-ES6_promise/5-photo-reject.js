export default function uploadPhoto(filename) {
    const error = new Error('${filename} cannot be empty');
    return Promise.reject(error);
}