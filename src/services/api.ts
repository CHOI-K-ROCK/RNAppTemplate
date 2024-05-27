/**
 * 임시로 작성해둔 api 호출 예시입니다.
 *
 * @param bool
 */
export const fakeApiCall = (bool: boolean) => {
    return new Promise<boolean>((resolve, reject) => {
        if (bool) {
            resolve(true);
        } else {
            reject(false);
        }
    });
};
