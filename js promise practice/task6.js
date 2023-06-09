import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ]).then(results => {
    return results.map(result => {
      return {
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason
      };
    });
  });
}